"use static";
import { Metadata } from "next";
import Search from "@/components/Search";

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
    // OpenGraph Image placeholder code
    // images: [
    //   {
    //     url: "http://localhost:3000/ogImage.jpg", // Local image URL
    //     width: 1200,
    //     height: 630,
    //     alt: "Restaurant Finder",
    //   },
    // ],
  },
};

const HomePage: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center align-center text-off-black">
      <Search></Search>
    </div>
  );
};

export default HomePage;
