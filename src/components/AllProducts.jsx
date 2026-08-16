import { useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/groceries"
        );
        setProducts(res.data.products);
      } catch (err) {
        console.log("خطا در دریافت اطلاعات:", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Menu />
      <div className="px-25 py-4">
        <Link to="/">
          <button className="flex flex-row items-center justify-center gap-1 border border-accent bg-four rounded-[8px] px-3 py-1 cursor-pointer mb-4 hover:bg-accent transition-colors duration-300">
            <FaArrowLeft />
            back
          </button>
        </Link>
        <h1 className="font-bold text-primary text-4xl mb-6">All Products</h1>

        {loading ? (
          <p>loading...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-400">No product found.</p>
        ) : (
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-5">
            {products.map((p) => {
              return (
                <div key={p.id} className="bg-white rounded-lg p-3 shadow">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded hover:scale-120 transition-transform duration-300"
                  />
                  <p className="font-semibold mt-2">{p.title}</p>
                  <p className="text-green-700">${p.price}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
