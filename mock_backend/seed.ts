import type { Place } from "../src/models/place.ts";

export const SEED_PLACES: Place[] = [
  {
    id: "kyoto-gardens",
    name: "Kyoto’s quiet gardens",
    category: "culture",
    description:
      "Take the slower path through moss gardens and temple courtyards. A little space to pause, far from your everyday routine.",
    isVisited: false,
  },
  {
    id: "dolomites",
    name: "A morning in the Dolomites",
    category: "nature",
    description:
      "Lace up your walking shoes and follow a mountain trail. Leave plenty of time for the views and a well-earned picnic.",
    isVisited: false,
  },
  {
    id: "lisbon",
    name: "Lisbon, one neighbourhood at a time",
    category: "city",
    description:
      "Wander tiled streets, find a sunny square and let the hills set the pace. Your only plan: see what is around the next corner.",
    isVisited: true,
  },
  {
    id: "copenhagen",
    name: "A bakery crawl in Copenhagen",
    category: "food",
    description:
      "Make a small adventure out of coffee and something freshly baked. Pick a neighbourhood and follow whatever looks delicious.",
    isVisited: false,
  },
  {
    id: "lake-bled",
    name: "A slow day at Lake Bled",
    category: "nature",
    description:
      "Trade your usual weekend for lakeside paths and a long lunch. Pack a book and give yourself permission to linger.",
    isVisited: false,
  },
];
