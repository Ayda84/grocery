import { FaTruck } from "react-icons/fa";
import { IoHeartCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import heroImg from "../image/hero-groceries.jpg";

export default function Information() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row justify-center items-center gap-2 shadow shadow-gray-400 p-1 rounded-[20px]">
          <FaTruck />
          <p>Free delivery on orders over $50</p>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center w-full px-30 mt-10 gap-20">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col md:mt-7 md:text-[45px] text-2xl font-bold">
              <p className="text-primary">Healthy and delicious</p>
              <p className="text-secondary">fruits and vegetables</p>
            </div>
            <p className="mt-2 text-accent">
              Discover seasonal produce, organic pantry staples, and locally
              sourced goods from trusted growers in your community.
            </p>
            <div className="flex flex-row justify-start items-start gap-3 mt-6">
              <Link to="/AllProducts">
                <button class="bg-[#90b800] text-[#0a0e27] rounded-[11px] md:px-[35px] md:py-[12px] px-[20px] py-[8px] font-bold  hover:bg-[#e1e100] transition-all duration-300 cursor-pointer md:text-[16px] text-[12px]">
                  products
                </button>
              </Link>

              <Link to="/login">
                <button class="bg-[#90b800] text-[#0a0e27] rounded-[11px] md:px-[25px] md:py-[12px] px-[25px] py-[8px]  font-bold  hover:bg-[#e1e100] transition-all duration-300 cursor-pointer md:text-[16px] text-[12px]">
                  login/sign up
                </button>
              </Link>
            </div>
            <div className="flex md:flex-row flex-col md:items-center md:justify-center items-start justify-start gap-5 mt-7">
              <div className="flex flex-row items-center justify-center gap-1">
                <IoHeartCircleSharp className="text-red-500" />
                <p className="text-secondary md:text-[16px] text-[12px]">Locally sourced</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <IoHeartCircleSharp className="text-red-500" />
                <p className="text-secondary md:text-[16px] text-[12px]">Organic options</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <IoHeartCircleSharp className="text-red-500" />
                <p className="text-secondary md:text-[16px] text-[12px]">Same-day delivery</p>
              </div>
            </div>
          </div>
          <img
            src={heroImg}
            alt="all"
            className="md:w-[500px] md:h-[300px] w-full rounded-[10px]"
          />
        </div>
      </div>
    </>
  );
}
