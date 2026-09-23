import type { Metadata } from "next";
import FacilitiesContent from "@/components/FacilitiesContent";

export const metadata: Metadata = {
  title: "Facilities | Bahawal Gymkhana",
};

export default function Page() {
  return <FacilitiesContent />;
}
