import Image from "next/image";
import Header from "/components/Layout/Header";
import { Layout, Section } from "/components";

const foodMenu = [
  {
    id: 1,
    name: "Sheiyah Lahem - BBQ Beef & Chicken",
    image: "/images/HeartsofTheNile-MeatPlate.png",
    description: "Cheese, tomato sauce, oregano",
    price: "$9.99",
  },
  {
    id: 2,
    name: "Salad",
    image: "/images/Salad.png",
    description: "Beef patty, lettuce, tomato",
    price: "$7.99",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    image: "/images/bbqchicken.png",
    description: "Spaghetti, meatballs, parmesan",
    price: "$11.99",
  },
  {
    id: 4,
    name: "Akou",
    image: "/images/akou.JPG",
    description: "Spinach, meat with white corn flour",
    price: "$9.99",
  },
  {
    id: 5,
    name: "Salata Aswad",
    image: "/images/aswad.JPG",
    description: "Eggplant, Peppers & Peanut Butter",
    price: "$7.99",
  },
  {
    id: 6,
    name: "Gheema Bathathis",
    image: "/images/bathathis.JPG",
    description: "Fried Potatoes, Carrots & Peppers",
    price: "$11.99",
  },
  {
    id: 7,
    name: "BBQ Chicken Wings",
    image: "/images/bbqwings.JPG",
    description: "Spaghetti, meatballs, parmesan",
    price: "$11.99",
  },
  {
    id: 8,
    name: "Samak Mashwei",
    image: "/images/friedfish.JPG",
    description: "Fried Fish",
    price: "$9.99",
  },
  {
    id: 9,
    name: "Garden Salad",
    image: "/images/gardensalad.JPG",
    description: "Beef patty, lettuce, tomato",
    price: "$7.99",
  },
  {
    id: 10,
    name: "Mullah Tagalia",
    image: "/images/tagalia.JPG",
    description: "be Asida (Ground Beef with dry Okara)",
    price: "$11.99",
  },
  {
    id: 11,
    name: "Salata Khadar",
    image: "/images/khadar.JPG",
    description: "Vegetable Salad",
    price: "$9.99",
  },
  {
    id: 12,
    name: "Mulalh Combo",
    image: "/images/mulalh.JPG",
    description: "Spinach with Okara",
    price: "$7.99",
  },
  {
    id: 13,
    name: "Samboksah",
    image: "/images/samboksah.JPG",
    description: "Wrap Vegas",
    price: "$11.99",
  },
  {
    id: 13,
    name: "Foul Medames",
    image: "/images/medames.JPG",
    description: "Egyptian beans, Salad with Bread",
    price: "$11.99",
  },
];

const MenuCard = ({ item }) => (
  <div className="bg-white p-10 rounded-lg shadow-md w-1/4 m-60 flex flex-col items-center">
    <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
      <Image
        src={item.image || "/images/logo.png"}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <div className="w-full flex flex-col items-start mt-4">
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p className="text-sm text-gray-500">{item.description}</p>
      <br/>
      <span className="text-lg font-bold ">{item.price}</span>
    </div>
  </div>
);


const RestaurantMenu = () => (
  <div className="flex flex-wrap p-8 bg-gray-200">
    {foodMenu.map((item) => (
      <MenuCard key={item.id} item={item} />
    ))}
  </div>
);


export default function Menu() {
  return (
    <Layout currentPage="Menu">
      <RestaurantMenu />
    </Layout>
  );
}
