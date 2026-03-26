import { HfInference } from "@huggingface/inference";
import { buildSystemPrompt } from "@/lib/chat-context";

const MODEL_ID = "HuggingFaceH4/zephyr-7b-beta";
const MAX_CONVERSATION_PAIRS = 8;

export async function POST(request: Request) {
  const token = process.env.HF_API_TOKEN;
  if (!token) {
    return Response.json(
      { error: "Chat is not configured. Please contact us directly." },
      { status: 500 }
    );
  }

  let body: { messages?: Array<{ role: string; content: string }> };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "Messages are required." }, { status: 400 });
  }

  // Trim conversation to last N pairs to stay within context window
  const trimmed =
    messages.length > MAX_CONVERSATION_PAIRS * 2
      ? messages.slice(-MAX_CONVERSATION_PAIRS * 2)
      : messages;

  const fullMessages = [
    { role: "system" as const, content: buildSystemPrompt() },
    ...trimmed.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  ];

  try {
    const hf = new HfInference(token);
    const stream = hf.chatCompletionStream({
      model: MODEL_ID,
      messages: fullMessages,
      max_tokens: 512,
      temperature: 0.7,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices?.[0]?.delta?.content;
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (err) {
          console.error("HF stream error:", err);
          controller.enqueue(
            encoder.encode(
              "\n\nI'm having trouble right now. Please call us at (773) 555-1234 for immediate help."
            )
          );
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("HF API error:", err);
    return Response.json(
      { error: "Sorry, I couldn't process that. Please try again or call us directly." },
      { status: 502 }
    );
  }
}
