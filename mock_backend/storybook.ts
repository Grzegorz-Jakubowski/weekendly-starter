import type { Place, PlaceInput } from "@/models/place";
import { SEED_PLACES } from "./seed";

// Storybook replaces src/api/places.ts with this module: no server, no network.
const RESPONSE_DELAY_MS = 800;
const respondAfterDelay = <Value>(value: Value) =>
  new Promise<Value>((resolve) => setTimeout(() => resolve(value), RESPONSE_DELAY_MS));

export const fetchPlaces = () => respondAfterDelay(SEED_PLACES);

export const createPlace = (input: PlaceInput) =>
  respondAfterDelay<Place>({ ...input, id: crypto.randomUUID(), isVisited: false });

export const updatePlace = (place: Place) => respondAfterDelay(place);

export const deletePlace = async (placeId: string) => {
  await respondAfterDelay(placeId);
};
