export const business = {
  name: "Corevia Construction Group Inc.",
  shortName: "Corevia",
  phone: "(253) 861-5992",
  phoneHref: "tel:+12538615992",
  email: "coreviaconstructiongroup@gmail.com",
  emailHref: "mailto:coreviaconstructiongroup@gmail.com",
  address: {
    line1: "4422 S 73rd St",
    line2: "Tacoma, WA 98409",
  },
  serviceAreas: "King County and Pierce County, Washington",
  facebook: "https://www.facebook.com/CorveiaConstructionGroupINC/",
  description:
    "Welcome to Corevia Construction Group Inc.! As a family-owned company, we deliver quality craftsmanship, honest communication, and dependable service. From roofing to remodeling, additions, ADUs, and restoration, we're here to build with confidence.",
} as const;

export const services = [
  {
    number: "01",
    title: "Roofing",
    description:
      "Roofing services to help protect your home through the Pacific Northwest seasons.",
  },
  {
    number: "02",
    title: "Remodeling",
    description:
      "Update the spaces you use every day, with thoughtful attention to the finished details.",
  },
  {
    number: "03",
    title: "Additions & ADUs",
    description:
      "Explore options for more living space, from home additions to accessory dwelling units.",
  },
  {
    number: "04",
    title: "Restoration",
    description: "Discuss the repairs and restoration your property needs.",
  },
] as const;

export const projectTypes = [
  "Roofing",
  "Remodeling",
  "Addition / ADU",
  "Restoration",
  "Other",
] as const;
