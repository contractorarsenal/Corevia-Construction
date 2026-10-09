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

export type Service = {
  number: string;
  title: string;
  projectType: ProjectType;
  description: string;
  actionLabel: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Roofing",
    projectType: "Roofing",
    description:
      "Planning a roofing project? Tell us about your property, the condition of your roof, and what you want to address.",
    actionLabel: "Discuss Your Roof",
  },
  {
    number: "02",
    title: "Remodeling",
    projectType: "Remodeling",
    description:
      "Ready to update the spaces you use every day? Share your ideas for your bathroom, kitchen, or another room in your home.",
    actionLabel: "Plan Your Remodel",
  },
  {
    number: "03",
    title: "Additions & ADUs",
    projectType: "Addition / ADU",
    description:
      "Need more living space? Start a conversation about a home addition or accessory dwelling unit.",
    actionLabel: "Explore Your Project",
  },
  {
    number: "04",
    title: "Restoration",
    projectType: "Restoration",
    description:
      "Have an area of your property that needs attention? Tell us what happened and what you are looking to restore.",
    actionLabel: "Discuss Restoration",
  },
];

export const timingOptions = [
  "Exploring Options",
  "Within 3 Months",
  "3-6 Months",
  "Flexible",
] as const;
