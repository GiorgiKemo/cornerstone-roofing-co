export const company = {
  name: "Cornerstone Roofing Co.",
  phone: "(773) 555-1234",
  phoneHref: "tel:+17735551234",
  email: "info@cornerstoneroofingco.com",
  address: {
    street: "Chicago, IL",
    city: "Chicago",
    state: "IL",
    zip: "60601",
  },
  url: "https://cornerstoneroofingco.com",
  rating: { value: 4.9, count: 187 },
  yearsInBusiness: 15,
  projectsCompleted: 500,
};

export type Company = typeof company;
