// Edit items and prices here (prices in Indian rupees). Sample prices.
export type Item = { name: string; note: string; price: number; popular?: boolean };
export type Category = { id: string; label: string; items: Item[] };

export const menu: Category[] = [
  {
    id: "rolls",
    label: "Rolls & Momos",
    items: [
      { name: "Chicken Momo", note: "8 pieces, red chilli chutney", price: 80, popular: true },
      { name: "Veg Momo", note: "8 pieces, steamed", price: 60 },
      { name: "Egg Roll", note: "Double egg, onion, lemon", price: 40, popular: true },
      { name: "Chicken Roll", note: "Smoky filling, paratha wrap", price: 70 },
      { name: "Egg Chicken Roll", note: "The full one", price: 90 },
    ],
  },
  {
    id: "noodles",
    label: "Noodles & Rice",
    items: [
      { name: "Veg Chowmein", note: "Wok tossed, crunchy veg", price: 60 },
      { name: "Egg Chowmein", note: "Egg scramble, soy, pepper", price: 70 },
      { name: "Chicken Chowmein", note: "Our most ordered plate", price: 90, popular: true },
      { name: "Egg Fried Rice", note: "Long grain, spring onion", price: 80 },
      { name: "Chicken Fried Rice", note: "With chilli sauce on the side", price: 110 },
      { name: "Chilli Chicken", note: "Dry, spicy, 6 pieces", price: 120 },
    ],
  },
  {
    id: "fried",
    label: "Fried Bites",
    items: [
      { name: "Singara", note: "2 pieces, potato and peas", price: 20, popular: true },
      { name: "Aloo Chop", note: "2 pieces, crisp outside", price: 20 },
      { name: "Fish Fry", note: "Crumb coated, with kasundi", price: 50 },
      { name: "Chicken Pakora", note: "6 pieces, hot from the oil", price: 80 },
      { name: "French Fries", note: "Peri peri salt", price: 60 },
    ],
  },
  {
    id: "drinks",
    label: "Chai & Drinks",
    items: [
      { name: "Cutting Chai", note: "Small glass, strong", price: 10, popular: true },
      { name: "Masala Chai", note: "Ginger and cardamom", price: 15 },
      { name: "Lemon Soda", note: "Sweet, salt or mixed", price: 25 },
      { name: "Sweet Lassi", note: "Thick, chilled", price: 40 },
      { name: "Cold Coffee", note: "With a scoop of ice cream", price: 50 },
    ],
  },
];
