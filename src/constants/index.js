import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  highlightFiveImg,
  highlightSixthVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "The first iPhone designed for",
      "Apple Intelligence. Personal,",
      "private, powerful.",
    ],
    video: highlightFirstVideo,
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: [
      "So fast. So fluid.",
      "Get a feel for the all-new",
      "Camera Control.",
    ],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "4K 120 fps Dolby Vision.",
      "4 studio-quality mics.",
      "A Pro studio in your pocket.",
    ],
    video: highlightThirdVideo,
    videoDuration: 5,
  },
  {
    id: 4,
    textLists: [
      "All-new A18 Pro chip powers",
      "unrivalled intelligence. And",
      "unprecedented performance.",
    ],
    video: highlightFourthVideo,
    videoDuration: 5,
  },

  {
    id: 5,
    textLists: [
      "Our thinnest borders yet — for",
      "even larger displays. Brilliant.",
    ],
    video: highlightFiveImg,
    videoDuration: 2,
  },

  {
    id: 6,
    textLists: ["A huge leap in battery life.", "Game on."],
    video: highlightSixthVideo,
    videoDuration: 5,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
