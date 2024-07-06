"use static";
import { Metadata } from "next";

// pages/index.tsx
import Sidebar from "@/components/figma/Sidebar";
import MainContent from "@/components/figma/MainContent";
import ImageGallery from "@/components/figma/ImageGallery";

export const metadata: Metadata = {
  //Traditional metadata fields
  title: "Restaurant Finder",
  description:
    "Find the best restaurants in your city and state. Search by dietary preferences like vegan, vegetarian, gluten-free, and more.",
  //Facebooks OpenGraph Metadata format
  openGraph: {
    type: "website",
    url: "http://localhost:3000",
    title: "Restaurant Finder",
    description:
      "Find the best restaurants in your city and state. Search by dietary preferences like vegan, vegetarian, gluten-free, and more.",
  },
};

const FigmaPage: React.FC = () => {
  return (
    <div className="h-full self-center w-full 2xl:w-3/4 3xl:w-2/3 bg-cover bg-center">
      <ImageGallery />
      <div className="w-full md:grid md:grid-cols-5 font-inter">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default FigmaPage;
