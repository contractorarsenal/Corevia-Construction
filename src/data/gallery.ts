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
  caption: string;
  width: number;
  height: number;
};

export const heroImage: GalleryImage = {
  src: roofBackyardView,
  alt: "Newly completed asphalt shingle roof viewed from the backyard, under a clear sky",
  caption: "Roofing",
  width: 1920,
  height: 1080,
};

export const aboutImage: GalleryImage = {
  src: bathroomRemodel01,
  alt: "Finished bathroom remodel with new fixtures and tile work",
  caption: "Bathroom Remodel",
  width: 1079,
  height: 1440,
};

export const projectGallery: GalleryImage[] = [
  {
    src: finishedRoof02,
    alt: "Wide view of a completed roofing project with dark architectural shingles",
    caption: "Roofing",
    width: 1920,
    height: 1440,
  },
  {
    src: bathroomRemodel02,
    alt: "Finished bathroom remodel, portrait view of vanity and tile",
    caption: "Bathroom Remodel",
    width: 1536,
    height: 2048,
  },
  {
    src: fenceProject,
    alt: "Finished wood fence project along a property line",
    caption: "Fence Project",
    width: 960,
    height: 548,
  },
  {
    src: commercialProject,
    alt: "Commercial construction project exterior",
    caption: "Commercial Work",
    width: 1920,
    height: 1080,
  },
  {
    src: finishedRoof01,
    alt: "Close view of a completed roof installation",
    caption: "Roofing",
    width: 1284,
    height: 1196,
  },
  {
    src: exteriorProject,
    alt: "Exterior view of a completed residential project",
    caption: "Exterior Project",
    width: 1588,
    height: 2048,
  },
];
