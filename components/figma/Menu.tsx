// components/Menu.tsx
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  const items = [
    {
      src: "/placeholder.png",
      title: "English Breakfast",
      price: "$8.99",
      description:
        "Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast delight.",
      match: "75% Dietary Match",
    },
    {
      src: "/placeholder.png",
      title: "English Breakfast",
      price: "$8.99",
      description:
        "Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast delight.",
      match: "75% Dietary Match",
    },
    {
      src: "/placeholder.png",
      title: "English Breakfast",
      price: "$8.99",
      description:
        "Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast delight.",
      match: "75% Dietary Match",
    },
    {
      src: "/placeholder.png",
      title: "English Breakfast",
      price: "$8.99",
      description:
        "Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast delight.",
      match: "75% Dietary Match",
    },
    // Add more menu items
  ];

  return (
    <div id="menu" className="flex flex-col w-full gap-6 pt-8">
      <h1 className="font-bold text-xl">Appetizers</h1>
      <div className="flex flex-row flex-wrap justify-between gap-6">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
