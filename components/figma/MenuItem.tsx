// components/MenuItem.tsx
import Image from "next/image";

const MenuItem: React.FC<{
  src: string;
  title: string;
  price: string;
  description: string;
  match: string;
}> = ({ src, title, price, description, match }) => {
  return (
    <div className="border-2 border-[#CDCDCD] flex flex-row rounded-xl gap-2 p-[24px]">
      <Image
        src={src}
        alt={title}
        width={135}
        height={145}
        className="rounded-xl"
      />
      <div className="flex flex-col w-[292px] h-[145px] justify-between">
        <div className="flex justify-between flex-row font-bold text-md">
          <h3>{title}</h3>
          <h3 className="place-self-end">{price}</h3>
        </div>
        <p className="text-sm text-[#4F4F4F]">{description}</p>
        <div className="flex flex-row text-[#226CE8] bg-[#EBF2FF] w-[154px] h-[41px] font-bold text-sm rounded-xl">
          <div className="flex self-center p-2">{match}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
