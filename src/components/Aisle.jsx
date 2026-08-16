import { Link } from "react-router-dom";
import produceImg from "../image/Aisle/grocery-produce.jpg";
import meatImg from "../image/Aisle/grocery-meat-rice-eggs.jpg";
import dairyImg from "../image/Aisle/grocery-dairy.jpg";

export default function Aisle() {
  const threeCard = [
    {
      name: "Fruit & Veg",
      slug: "fruitVeg",
      tagline: "Picked daily",
      image: produceImg,
    },
    {
      name: "Meat & Pantry",
      slug: "main",
      tagline: "main needs",
      image: meatImg,
    },
    {
      name: "Dairy & Breakfast",
      slug: "Dairy",
      tagline: "Grass-fed farms",
      image: dairyImg,
    },
  ];

  return (
    <>
      <div className=" mt-17 px-25">
        <h1 className="font-bold text-primary text-4xl mb-1">Shop by aisle</h1>
        <h3 className="text-accent">Everything you need for the week</h3>

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {threeCard.map((card) => (
            <Link key={card.name} to={`/category/${card.slug}`}>
              <div className="relative group rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 p-4">
                  <p className="font-bold text-white">{card.name}</p>
                  <p className="text-four">{card.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
