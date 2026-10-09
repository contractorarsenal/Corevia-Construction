import bathroomRemodel01 from "../assets/images/bathroom-remodel-01.jpg";
import bathroomRemodel02 from "../assets/images/bathroom-remodel-02.jpg";
import commercialProject from "../assets/images/commercial-project.jpg";
import exteriorProject from "../assets/images/exterior-project.jpg";
import fenceProject from "../assets/images/fence-project.jpg";
import finishedRoof01 from "../assets/images/finished-roof-01.jpg";
import finishedRoof02 from "../assets/images/finished-roof-02.jpg";
import roofBackyardView from "../assets/images/roof-backyard-view.jpg";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  objectPosition: string;
  width: number;
  height: number;
};

export const heroImage = {
  src: roofBackyardView,
  alt: "Newly completed asphalt shingle roof viewed from the backyard, under a clear sky",
  width: 1920,
  height: 1080,
};

export const aboutImage = {
  src: bathroomRemodel01,
  alt: "Finished bathroom remodel with new fixtures and tile work",
  width: 1079,
  height: 1440,
};

export const projectGallery: GalleryImage[] = [
  {
    src: finishedRoof02,
    alt: "Wide view of a completed roofing project with dark architectural shingles",
    title: "Roofing Project",
    objectPosition: "object-top",
    width: 1920,
    height: 1440,
  },
  {
    src: bathroomRemodel02,
    alt: "Finished bathroom remodel, portrait view of vanity and tile",
    title: "Bathroom Remodel",
    objectPosition: "object-center",
    width: 1536,
    height: 2048,
  },
  {
    src: fenceProject,
    alt: "Finished wood fence project along a property line",
    title: "Fence Project",
    objectPosition: "object-center",
    width: 960,
    height: 548,
  },
  {
    src: commercialProject,
    alt: "Commercial construction project exterior",
    title: "Commercial Project",
    objectPosition: "object-center",
    width: 1920,
    height: 1080,
  },
  {
    src: finishedRoof01,
    alt: "Close view of a completed roof installation",
    title: "Roofing Detail",
    objectPosition: "object-top",
    width: 1284,
    height: 1196,
  },
  {
    src: exteriorProject,
    alt: "Exterior view of a completed residential project",
    title: "Exterior Project",
    objectPosition: "object-center",
    width: 1588,
    height: 2048,
  },
];
