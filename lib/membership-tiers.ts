export type MembershipTier = {
  id: string;
  category: string;
  icon: string;
  name: string;
  tagline: string;
  entranceFee: string;
  monthlyFee: string;
  monthlyLabel: string;
  popular: boolean;
  features: { included: boolean; text: string }[];
  ctaLabel: string;
};

export const membershipTiers: MembershipTier[] = [
  {
    id: "individual",
    category: "Category Alpha",
    icon: "person",
    name: "Individual Member",
    tagline: "Tailored for single practitioners, sports enthusiasts, and corporate leaders.",
    entranceFee: "PKR 450,000",
    monthlyFee: "PKR 4,500",
    monthlyLabel: "monthly maintenance levy",
    popular: false,
    features: [{ included: true, text: "Full sports grounds (Tennis, Squash, Gym & Pool)" }, { included: true, text: "Historic library & member quiet study room" }, { included: true, text: "Governor's Veranda dining privileges" }, { included: true, text: "2 accompanied guest passes per month" }, { included: false, text: "Excludes junior coaching subsidy" }],
    ctaLabel: "Apply for Individual",
  },
  {
    id: "family",
    category: "Category Sovereign",
    icon: "family_restroom",
    name: "Family Membership",
    tagline: "Complete legacy sanctuary for primary member, spouse, and juniors up to 25.",
    entranceFee: "PKR 750,000",
    monthlyFee: "PKR 7,500",
    monthlyLabel: "monthly household maintenance",
    popular: true,
    features: [{ included: true, text: "Unrestricted family access to all 8 facilities" }, { included: true, text: "Spouse & junior cards with biometric verification" }, { included: true, text: "Summer swimming & tennis camp passes for juniors" }, { included: true, text: "Priority reservation on Royal Banquet Lawns" }, { included: true, text: "6 accompanied guest invitations per month" }, { included: true, text: "National reciprocal admission across Punjab & Sindh" }],
    ctaLabel: "Apply for Family",
  },
  {
    id: "corporate",
    category: "Category Institutional",
    icon: "apartment",
    name: "Corporate Patron",
    tagline: "Structured for commercial enterprises, diplomatic delegations, and leadership groups.",
    entranceFee: "PKR 1,500,000",
    monthlyFee: "PKR 15,000",
    monthlyLabel: "monthly institutional retainer",
    popular: false,
    features: [{ included: true, text: "Up to 3 designated c-suite nominees & spouses" }, { included: true, text: "Private boardroom & executive salon booking" }, { included: true, text: "Annual Corporate Sports Day & lawn hosting" }, { included: true, text: "Unlimited client dining admission passes" }, { included: true, text: "Dedicated senior club concierge liaison" }],
    ctaLabel: "Apply for Corporate",
  },
];
