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

export const services = [
  {
    title: "Roofing",
    description:
      "Roofing services for homeowners in Tacoma and across King and Pierce Counties.",
  },
  {
    title: "Remodeling",
    description:
      "Update your bathroom and other living spaces with a focus on craftsmanship and the finished details.",
  },
  {
    title: "Additions & ADUs",
    description:
      "Planning more room? Talk with us about your home addition or accessory dwelling unit.",
  },
  {
    title: "Restoration",
    description:
      "Tell us about the condition of your property and the restoration work you need.",
  },
] as const;

export const projectTypes = [
  "Roofing",
  "Remodeling",
  "Addition / ADU",
  "Restoration",
  "Other",
] as const;
