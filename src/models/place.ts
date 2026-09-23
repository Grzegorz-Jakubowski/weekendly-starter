export type PlaceCategory = "nature" | "culture" | "food" | "city";

export type Place = {
  id: string;
  name: string;
  category: PlaceCategory;
  description: string;
  isVisited: boolean;
};

export type PlaceInput = Pick<Place, "name" | "category" | "description">;
