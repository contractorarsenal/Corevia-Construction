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
} as const;

export const projectTypes = [
  "Roofing",
  "Remodeling",
  "Addition / ADU",
  "Restoration",
  "Other",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export const services: {
  title: string;
  description: string;
  projectType: ProjectType;
}[] = [
  {
    title: "Roofing",
    description:
      "Roofing services for homeowners in Tacoma and across King and Pierce Counties. Ask about a full replacement, repairing storm damage, or addressing a persistent leak.",
    projectType: "Roofing",
  },
  {
    title: "Remodeling",
    description:
      "Update your bathroom and other living spaces with a focus on craftsmanship and the finished details. Share your plans for a bathroom refresh, a kitchen update, or another interior space.",
    projectType: "Remodeling",
  },
  {
    title: "Additions & ADUs",
    description:
      "Planning more room? Talk with us about your home addition or accessory dwelling unit. Discuss a new addition, a backyard ADU, or extra living space for family.",
    projectType: "Addition / ADU",
  },
  {
    title: "Restoration",
    description:
      "Tell us about the condition of your property and the restoration work you need. Describe storm damage, wear over time, or repairs you have been putting off.",
    projectType: "Restoration",
  },
];

export const timingOptions = [
  "Exploring Options",
  "Within 3 Months",
  "3-6 Months",
  "Flexible",
] as const;
