const { faker } = require('@faker-js/faker');
const fs = require('fs');

//seed data definition
const dietaryOptionsArray = ['Vegan', 'Vegetarian', 'GlutenFree', 'EggFree', 'ShellfishFree', 'SesameFree', "DairyFree", "FishFree", "TreenutFree", "PeanutFree", "SoyFree"];
const cuisineTypes = ['Italian', 'Chinese', 'Indian', 'French', 'Mexican', 'Japanese', 'Mediterranean', 'Thai', 'American'];
const priceRanges = ['$', '$$', '$$$', '$$$$'];
const cityStatePairs = [
    { city: "New York", state: "New York", stateAbbr: "NY" },
    { city: "Los Angeles", state: "California", stateAbbr: "CA" },
    { city: "Chicago", state: "Illinois", stateAbbr: "IL" },
    { city: "Houston", state: "Texas", stateAbbr: "TX" },
    { city: "Phoenix", state: "Arizona", stateAbbr: "AZ" },
    { city: "Philadelphia", state: "Pennsylvania", stateAbbr: "PA" },
    { city: "San Antonio", state: "Texas", stateAbbr: "TX" },
    { city: "San Diego", state: "California", stateAbbr: "CA" },
    { city: "Dallas", state: "Texas", stateAbbr: "TX" },
    { city: "San Jose", state: "California", stateAbbr: "CA" },
    { city: "Austin", state: "Texas", stateAbbr: "TX" },
    { city: "Jacksonville", state: "Florida", stateAbbr: "FL" },
    { city: "San Francisco", state: "California", stateAbbr: "CA" },
    { city: "Indianapolis", state: "Indiana", stateAbbr: "IN" },
    { city: "Columbus", state: "Ohio", stateAbbr: "OH" },
    { city: "Fort Worth", state: "Texas", stateAbbr: "TX" },
    { city: "Charlotte", state: "North Carolina", stateAbbr: "NC" },
    { city: "Memphis", state: "Tennessee", stateAbbr: "TN" },
    { city: "Boston", state: "Massachusetts", stateAbbr: "MA" },
    { city: "Baltimore", state: "Maryland", stateAbbr: "MD" },
    { city: "Detroit", state: "Michigan", stateAbbr: "MI" },
    { city: "El Paso", state: "Texas", stateAbbr: "TX" },
    { city: "Seattle", state: "Washington", stateAbbr: "WA" },
    { city: "Denver", state: "Colorado", stateAbbr: "CO" },
    { city: "Milwaukee", state: "Wisconsin", stateAbbr: "WI" },
    { city: "Portland", state: "Oregon", stateAbbr: "OR" },
    { city: "Oklahoma City", state: "Oklahoma", stateAbbr: "OK" },
    { city: "Nashville", state: "Tennessee", stateAbbr: "TN" },
    { city: "Washington", state: "District of Columbia", stateAbbr: "DC" },
    { city: "Kansas City", state: "Missouri", stateAbbr: "MO" },
    { city: "St. Louis", state: "Missouri", stateAbbr: "MO" },
    { city: "Raleigh", state: "North Carolina", stateAbbr: "NC" },
    { city: "Cleveland", state: "Ohio", stateAbbr: "OH" },
    { city: "Miami", state: "Florida", stateAbbr: "FL" },
    { city: "Oakland", state: "California", stateAbbr: "CA" },
    { city: "Minneapolis", state: "Minnesota", stateAbbr: "MN" },
    { city: "Tulsa", state: "Oklahoma", stateAbbr: "OK" },
    { city: "Virginia Beach", state: "Virginia", stateAbbr: "VA" },
    { city: "Sacramento", state: "California", stateAbbr: "CA" },
    { city: "Louisville", state: "Kentucky", stateAbbr: "KY" },
    { city: "Albuquerque", state: "New Mexico", stateAbbr: "NM" },
    { city: "Tucson", state: "Arizona", stateAbbr: "AZ" },
    { city: "New Orleans", state: "Louisiana", stateAbbr: "LA" },
    { city: "Long Beach", state: "California", stateAbbr: "CA" },
    { city: "Colorado Springs", state: "Colorado", stateAbbr: "CO" },
    { city: "Hartford", state: "Connecticut", stateAbbr: "CT" },
    { city: "Tampa", state: "Florida", stateAbbr: "FL" },
    { city: "Richmond", state: "Virginia", stateAbbr: "VA" },
    { city: "Newark", state: "New Jersey", stateAbbr: "NJ" },
    { city: "Honolulu", state: "Hawaii", stateAbbr: "HI" },
    { city: "Anaheim", state: "California", stateAbbr: "CA" },
    { city: "Santa Ana", state: "California", stateAbbr: "CA" },
    { city: "Corpus Christi", state: "Texas", stateAbbr: "TX" },
    { city: "Riverside", state: "California", stateAbbr: "CA" },
    { city: "St. Paul", state: "Minnesota", stateAbbr: "MN" },
    { city: "Cincinnati", state: "Ohio", stateAbbr: "OH" },
    { city: "Greensboro", state: "North Carolina", stateAbbr: "NC" },
    { city: "Toledo", state: "Ohio", stateAbbr: "OH" },
    { city: "Newark", state: "Ohio", stateAbbr: "OH" },
    { city: "Orlando", state: "Florida", stateAbbr: "FL" },
    { city: "Jersey City", state: "New Jersey", stateAbbr: "NJ" },
    { city: "Chula Vista", state: "California", stateAbbr: "CA" },
    { city: "Norfolk", state: "Virginia", stateAbbr: "VA" },
    { city: "Chandler", state: "Arizona", stateAbbr: "AZ" },
    { city: "Laredo", state: "Texas", stateAbbr: "TX" },
    { city: "Madison", state: "Wisconsin", stateAbbr: "WI" },
    { city: "Durham", state: "North Carolina", stateAbbr: "NC" },
    { city: "Lubbock", state: "Texas", stateAbbr: "TX" },
    { city: "Winston-Salem", state: "North Carolina", stateAbbr: "NC" },
    { city: "Garland", state: "Texas", stateAbbr: "TX" },
    { city: "Glendale", state: "Arizona", stateAbbr: "AZ" },
    { city: "Hialeah", state: "Florida", stateAbbr: "FL" },
    { city: "Reno", state: "Nevada", stateAbbr: "NV" },
    { city: "Baton Rouge", state: "Louisiana", stateAbbr: "LA" },
    { city: "Irvine", state: "California", stateAbbr: "CA" },
    { city: "Chesapeake", state: "Virginia", stateAbbr: "VA" },
    { city: "Irving", state: "Texas", stateAbbr: "TX" },
    { city: "Scottsdale", state: "Arizona", stateAbbr: "AZ" },
    { city: "North Las Vegas", state: "Nevada", stateAbbr: "NV" },
    { city: "Fremont", state: "California", stateAbbr: "CA" },
    { city: "Gilbert", state: "Arizona", stateAbbr: "AZ" },
    { city: "San Bernardino", state: "California", stateAbbr: "CA" },
    { city: "Boise", state: "Idaho", stateAbbr: "ID" },
    { city: "Birmingham", state: "Alabama", stateAbbr: "AL" },
];

//simple restaurant name generator
function generateRestaurantName(cuisineType) {
    const prefixes = ["The", "Grand", "Royal", "Delicious", "Taste of", "Flavor Town", "Gourmet"];
    const suffixes = ["Bistro", "Cafe", "Diner", "Eatery", "Grill", "Kitchen", "House"];
    const name = `${faker.helpers.arrayElement(prefixes)} ${cuisineType} ${faker.helpers.arrayElement(suffixes)}`;
    return name;
}

//address builder function, combined with city and state pairs
function generateAddress(city, state) {
    const streetName = faker.location.street();
    const buildingNumber = faker.location.buildingNumber();
    return `${buildingNumber} ${streetName}, ${city}, ${state}`;
}
//open hours randomizer
function generateRandomTime(openHour, closeHour) {
  const openTime = new Date();
  const closeTime = new Date();
  openTime.setHours(openHour, 0, 0);
  closeTime.setHours(closeHour, 0, 0);
  return `${openTime.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })} - ${closeTime.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })}`;
}
//defines ranges for open hours with structure
const openingHoursrange = {
  MONDAY: generateRandomTime(11, 21), 
  TUESDAY: generateRandomTime(11, 21), 
  WEDNESDAY: generateRandomTime(11, 21), 
  THURSDAY: generateRandomTime(11, 21), 
  FRIDAY: generateRandomTime(11, 22), 
  SATURDAY: generateRandomTime(10, 22), 
  SUNDAY: generateRandomTime(10, 21), 
};

//format open hours into string
function generateFormattedOpeningHours(hours) {
  return Object.entries(hours)
    .map(([day, time]) => `${day}: ${time}`)
    .join('\n');
}


// Function to generate placeholder restaurant data
function generateRestaurantData(numRecords) {
//simple autoincrementing id logic
let autoIncrementId = 1; 
const getAutoIncrementId = () => {
  return autoIncrementId++;
};
    const data = [];
    for (let i = 0; i < numRecords; i++) {
        const id = getAutoIncrementId();
        const cuisine = faker.helpers.arrayElement(cuisineTypes);
        const name = generateRestaurantName(cuisine);
        const cityState = faker.helpers.arrayElement(cityStatePairs);
        const city = cityState.city;
        const state = cityState.state;
        const stateAbbr = cityState.stateAbbr;
        const address = generateAddress(city, state);
        const dietaryOptions = faker.helpers.arrayElements(dietaryOptionsArray, faker.datatype.number({ min: 2, max: 6 }));
        const phone = faker.phone.number('(###) ###-####');
        const email = faker.internet.email();
        const website = faker.internet.url();
        const price = faker.helpers.arrayElement(priceRanges);
        const openingHours = generateFormattedOpeningHours(openingHoursrange);
        const rating = Math.round(Math.random() * 10) / 2;        
        const image = "https://placehold.co/800x400/jpg?text=Restaurant\nBanner\nImage"

        data.push({
            id,
            name,
            address,
            dietary: dietaryOptions,
            city,
            state,
            stateAbbr,
            phone,
            email,
            website,
            cuisineType: cuisine,
            priceRange: price,
            openingHours,
            rating,
            image
        });
    }
    return data;
}

// Generate data logic
const numRecords = 1000;
const restaurantData = generateRestaurantData(numRecords);

// Convert data to JSON and store
fs.writeFileSync('restaurants.json', JSON.stringify(restaurantData, null, 4));