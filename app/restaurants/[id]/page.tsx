import Image from "next/image";
import restaurants from "../../../restaurants.json";
import DietaryIcon from "../../../components/DietaryIcons"; // Corrected import path

//typing the restaurant object
interface Restaurant {
  id: number;
  name: string;
  image: string;
  priceRange: string;
  cuisineType: string;
  dietary: string[];
  rating: number;
  openingHours: string;
  address: string;
  phone: string;
  city: string;
  state: string;
}

interface RestaurantDetailPageProps {
  params: { id: string };
}

//Dynamic metadata generator
export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;
  const restaurant = restaurants.find(
    (restaurant: Restaurant) => restaurant.id === parseInt(id)
  );
  return {
    title: restaurant?.name,
    description: `Learn more about ${restaurant?.name}, a ${restaurant?.cuisineType} restaurant in ${restaurant?.city}, ${restaurant?.state}.`,
  };
}

const RestaurantDetailPage = ({ params }: RestaurantDetailPageProps) => {
  //find the restaurant by id
  const id = params.id;
  const restaurant = restaurants.find(
    (restaurant: Restaurant) => restaurant.id === parseInt(id)
  );

  //error handling for nonexistent restaurant
  if (!restaurant) return <div>Restaurant not found</div>;

  //parse open hours field (string) => formatted array
  const openingHoursArray = restaurant.openingHours.split("\n").map((line) => {
    const [day, hours] = line.split(": ");
    return { day, hours };
  });

  return (
    <div className="flex flex-col items-center justify-center text-off-black">
      <div className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-2 items-center">
        <div aria-label="restaurant details" className="relative m-20">
          <div
            aria-label="restaurant image and name"
            className="relative w-full"
          >
            <Image
              aria-label="restaurant image"
              src={restaurant.image}
              alt={restaurant.name}
              width={800}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
            <h1
              aria-label="restaurant name"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1/2 z-10 text-4xl border-4 p-4 font-bold mb-8 text-center text-paprika-salmon bg-white"
            >
              {restaurant.name}
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4 justify-evenly">
          <p aria-label="restaurant price range" className="text-lg mb-4">
            Price Range - <strong>{restaurant.priceRange}</strong>
          </p>
          <p aria-label="restaurant average rating" className="text-lg mb-4">
            Rating: <strong>{restaurant.rating}/5</strong>
          </p>
          <p aria-label="restaurant cuisine" className="text-lg mb-4">
            {restaurant.cuisineType}
          </p>
        </div>
        <div
          aria-label="restaurant dietary accomodations list"
          className="text-2xl mb-4 flex flex-wrap gap-6"
        >
          {restaurant.dietary.map((option) => (
            <div
              aria-label={option}
              key={option}
              className="flex scale-125 items-center"
            >
              <DietaryIcon option={option} />
            </div>
          ))}
        </div>

        <div
          aria-label="restaurant open hours list"
          className="text-lg mb-4 border-2 p-4 rounded-lg"
        >
          {openingHoursArray.map(({ day, hours }) => (
            <p key={day}>
              {day}: {hours}
              <br />
            </p>
          ))}
        </div>
        <p aria-label="restaurant address" className="text-lg mb-4">
          {restaurant.address}
        </p>
        <p aria-label="restaurant phone number" className="text-lg mb-4">
          {restaurant.phone}
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
