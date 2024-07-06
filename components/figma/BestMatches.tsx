// components/BestMatches.tsx
import Image from "next/image";

const BestMatches: React.FC = () => {
  const items = [
    {
      src: "/berryparfait.png",
      title: "Avocado Green Toast",
      price: "$8.99",
      match: "100% preference match",
    },
    {
      src: "/berryparfait.png",
      title: "Avocado Green Toast",
      price: "$8.99",
      match: "100% preference match",
    },
    {
      src: "/berryparfait.png",
      title: "Avocado Green Toast",
      price: "$8.99",
      match: "100% preference match",
    },
    {
      src: "/berryparfait.png",
      title: "Avocado Green Toast",
      price: "$8.99",
      match: "100% preference match",
    },
    {
      src: "/berryparfait.png",
      title: "Avocado Green Toast",
      price: "$8.99",
      match: "100% preference match",
    },
    // Add more best matches
  ];
  return (
    <div id="best-matches" className="flex flex-col w-full gap-6 pt-8">
      <h1 className="font-bold text-xl">Best Matches</h1>
      <div className="flex flex-row gap-8 2xl:justify-between flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col">
              <Image
                src={item.src}
                alt={item.title}
                width={180}
                height={180}
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-md">{item.title}</h3>
                <p className="text-[#2A9865] text-xs font-extrabold">
                  {item.match}
                </p>
                <p className="text-xs">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestMatches;
