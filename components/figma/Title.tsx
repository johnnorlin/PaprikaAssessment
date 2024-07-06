// components/Header.tsx
import Image from "next/image";
import ButtonWithIcon from "./ButtonWithIcon";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row w-full gap-10 lg:gap-0 justify-between pb-8 border-b-2 border-[#D6D6D6]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row flex-wrap gap-2">
          <h1 className="font-bold text-3xl">The Daily Grind</h1>
          <Image src="/verified.svg" alt="verified" width={34} height={34} />
        </div>
        <div className="flex flex-col md:flex-row text-xl">
          <div>1.2 miles away</div>
          <div className="mx-2 hidden md:flex"> | </div>
          <div className="text-[#36AA7D] text-xl font-bold">Open</div>
        </div>
      </div>
      <ButtonWithIcon />

      {/* <div className="flex flex-row w-full gap-10 lg:gap-0 justify-between pb-8 border-b-2 border-[#D6D6D6]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap gap-2">
            <h1 className="font-bold text-3xl">The Daily Grind</h1>

          </div>
          <div className="flex flex-col md:flex-row text-xl">
            <div>1.2 miles away</div>
            <div className="mx-2 hidden md:flex"> | </div>
            <div className="text-[#36AA7D] text-xl font-bold">Open</div>
          </div>
        </div>

      {/* </div> */}
    </div>
  );
};

export default Header;
