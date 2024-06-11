import Link from "next/link";
import restaurants from "../../../restaurants.json";
import Image from "next/image";
import NotFound from "@/components/NotFound";

//Format city/state names to Title Case
const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

//Dynamic metadata generator
export async function generateMetadata({ params }: any) {
  //format inputs for metadata generation
  const city = params.city.replace("-", " ");
  const state = params.state.replace("-", " ");
  const formattedCity = toTitleCase(city);
  const formattedState = getFullStateName(state) || toTitleCase(state);

  return {
    title: `Restaurants in ${formattedCity}, ${formattedState}`,
    description: `Find the best restaurants in ${formattedCity}, ${formattedState}. Search by dietary preferences like vegan, vegetarian, gluten-free, and more.`,
  };
}

//Find correspnding full state names from input abbreviation
const getFullStateName = (inputState: string) => {
  const lowerCaseState = inputState.toLowerCase();
  const restaurant = restaurants.find(
    (restaurant) =>
      restaurant.state.toLowerCase() === lowerCaseState ||
      restaurant.stateAbbr.toLowerCase() === lowerCaseState
  );
  return restaurant ? restaurant.state : null;
};

const RestaurantListPage = ({ params }: any) => {
  //normalize inputs
  const city = params.city.replace("-", " ").trim().toLowerCase();
  const state = params.state.replace("-", " ").trim().toLowerCase();
  //format inputs for heading text
  const formattedCity = toTitleCase(city);
  const formattedState = getFullStateName(state) || toTitleCase(state);

  //filter restaurants by input city/state
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const restaurantCity = restaurant.city.toLowerCase();
    const restaurantState = restaurant.state.toLowerCase();
    const restaurantStateAbbr = restaurant.stateAbbr.toLowerCase();

    return (
      restaurantCity === city &&
      (restaurantState === state || restaurantStateAbbr === state)
    );
  });

  //conditionally return error page or filtered restaurant profile cards
  return filteredRestaurants.length === 0 ? (
    <NotFound formattedCity={formattedCity} formattedState={formattedState} />
  ) : (
    <div className="flex flex-col items-center p-8 justify-center text-off-black">
      <h1 className="text-4xl font-bold mb-8 text-center text-paprika-salmon">
        Restaurants in {formattedCity}, {formattedState}
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        aria-label={`Restaurants in ${formattedCity}, ${formattedState}`}
      >
        {filteredRestaurants.map((restaurant) => (
          <Link
            aria-label={`Link to ${restaurant.name} details`}
            key={restaurant.id}
            href={`/restaurants/${restaurant.id}`}
          >
            <div
              aria-label={`${restaurant.name} profile card`}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <div
                aria-label="restaurant image"
                className="w-auto h-48 flex justify-center mb-4 overflow-hidden"
              >
                <Image
                  alt="restaurant image"
                  src={restaurant.image}
                  width={200}
                  height={100}
                  className="object-fit"
                />
              </div>
              <h2
                aria-label="restaurant name"
                className="text-lg font-bold mb-2"
              >
                {restaurant.name}
              </h2>
              <p aria-label="restaurant cuisine" className="text-gray-600">
                {restaurant.cuisineType}
              </p>
              <p aria-label="restaurant price range" className="text-gray-600">
                {restaurant.priceRange}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListPage;
