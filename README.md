# Getting Started

First, install all required dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

or

```bash
npx next dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Site Components

This simple web application consists of three main pages:

## Home page ("/")

Displays a search input form that takes in city and state strings with a submit button.

## Search Results page ("/"city"/"state"")

Displays a grid of restaurant profile cards filtered from my dummy data by dynamic url parameters. Infinitely scalable to support any city and state combination contained in the data.

## Restaurant Details page ("/restaurants/"id"")

Displays a formatted set of details for a specific restaurant by id url parameter.

# Dummy Data

restaurantsData.js is a script to generate dummy data with the "faker.js" library that I wrote for this assignment.

restaurants.json is the location of the generated dummy data (json object with 1000 entries)
