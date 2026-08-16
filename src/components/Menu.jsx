import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="flex flex-row md:justify-between justify-evenly items-center w-full h-14 border-b border-accent mb-10 md:px-40">
        <Link to="/">
          <div className="flex flex-row justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-leaf h-10 w-10"
              aria-hidden="true"
              data-tsd-source="/src/components/Header.tsx:11:13"
              className="bg-green-700 rounded-[10px] text-white p-1"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
            <p className="font-bold text-primary md:text-2xl text-[14px]">Health Basket</p>
          </div>
        </Link>

        <div className="flex flex-row justify-center items-center gap-10 font-bold">
          <Link to="/">
            <p className="cursor-pointer text-secondary md:text-[17px] text-[15px] hover:text-accent transition-colors duration-300">
              Home
            </p>
          </Link>
          <Link to="/profile">
            <p className="cursor-pointer text-secondary md:text-[17px] text-[15px] hover:text-accent transition-colors duration-300">
              profile
            </p>
          </Link>

          <div className="text-2xl cursor-pointer rounded-[10px] p-1 shadow shadow-gray-500 md:ml-12">
            <IoCartOutline />
          </div>
        </div>
      </div>
    </>
  );
}
