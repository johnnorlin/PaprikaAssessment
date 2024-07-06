// components/MainContent.tsx
import Title from "@/components/figma/Title";
import BestMatches from "./BestMatches";
import Menu from "./Menu";

const MainContent: React.FC = () => {
  return (
    <div className="w-full md:col-span-4 p-4 lg:p-8 ">
      <Title />
      <BestMatches />
      <Menu />
    </div>
  );
};

export default MainContent;
