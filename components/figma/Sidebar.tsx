// components/Sidebar.tsx
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-row md:flex-col w-full lg:col-span-1 lg:row-span-2 text-md border-r-2 border-[#E8E8E8] font-bold gap-8 p-4 md:p-8">
      <Link href="#best-matches">Best Matches</Link>
      <Link href="#menu">Menu</Link>
      <Link href="#dietary-info">Dietary Info</Link>
      <Link href="#reviews">Reviews</Link>
    </div>
  );
};

export default Sidebar;
