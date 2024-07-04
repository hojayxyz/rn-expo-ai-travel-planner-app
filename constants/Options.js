export const SelectTravelerList = [
  {
    id: 1,
    title: 'Just Me',
    desc: 'A sole traveler in exploration',
    icon: '✈',
    people: '1',
  },
  {
    id: 2,
    title: 'Couple',
    desc: 'Two travelers in tandem',
    icon: '👫',
    people: '2',
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A group of travelers in exploration',
    icon: '🏡',
    people: '3 to 5',
  },
  {
    id: 4,
    title: 'Friends',
    desc: 'A group of friends in exploration',
    icon: '⛵️',
    people: '5 to 10',
  },
  {
    id: 5,
    title: 'Group',
    desc: 'A large group in exploration',
    icon: '🚀',
    people: '10+',
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of the budget',
    icon: '🫗',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Balanced budget for the trip',
    icon: '🍔',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'Splurge on the trip',
    icon: '🍾',
  },
];

export const AI_PROMPT =
  'Generate travel plan for location : {location}, from {startDate} to {endDate} for {totalDays} day and {totalNights} night for {traveler} with a {budget} budget with a flight details, flight price with booking url, hotels options list with hotelName, Hotel address, price, hotel image url, geo coordinates, rating, descriptions and places to visit nearby with placeName, place details, place image url, geo coordinates, ticket pricing, time to travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON format.';
