export type Review = {
  id: string;
  name: string;
  isLocalGuide: boolean;
  reviewCount: number;
  rating: number; // 1-5
  text: string;
  timeAgo: string;
};

export const overallRating = 4.4;
export const totalReviews = 442;

export const ratingBreakdown = [
  { stars: 5, percent: 78 },
  { stars: 4, percent: 14 },
  { stars: 3, percent: 5 },
  { stars: 2, percent: 2 },
  { stars: 1, percent: 1 },
];

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Ayesha",
    isLocalGuide: true,
    reviewCount: 72,
    rating: 5,
    text: "A good experience — the place feels quiet and comfortable. There was enough space to sit and relax and the overall environment was clean.",
    timeAgo: "3 months ago",
  },
  {
    id: "r2",
    name: "Muhammad Faheem",
    isLocalGuide: true,
    reviewCount: 591,
    rating: 3,
    text: "A beautiful place, but poorly maintained in parts — rooms and bathrooms could use more upkeep. Food and breakfast service also need improvement.",
    timeAgo: "7 months ago",
  },
  {
    id: "r3",
    name: "Saad Mehmood",
    isLocalGuide: true,
    reviewCount: 34,
    rating: 5,
    text: "A members-only place with a snooker table, a nice quiet library, a cigar room, and a lawn tennis court — perfect. Gym and pool as well.",
    timeAgo: "8 months ago",
  },
];

export function sortReviews(
  list: Review[],
  sort: "recent" | "highest" | "lowest"
) {
  const copy = [...list];
  if (sort === "highest") return copy.sort((a, b) => b.rating - a.rating);
  if (sort === "lowest") return copy.sort((a, b) => a.rating - b.rating);
  return copy; // already in "most recent" order
}
