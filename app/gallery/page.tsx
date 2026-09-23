import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | Bahawal Gymkhana",
};

export default function Page() {
  return <GalleryContent />;
}
