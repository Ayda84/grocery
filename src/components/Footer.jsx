import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="border-t border-accent mt-20 mb-4 flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 px-35 md:gap-20 border-b border-accent pb-10">
          <div className="flex flex-col items-start justify-start gap-1">
            <Link to="/">
              <div className="flex flex-row justify-center items-center gap-2 mt-15">
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
                <p className="font-bold text-primary md:text-xl text-[14px]">Health Basket</p>
              </div>
            </Link>
            <p>
              Fresh, organic, and locally sourced groceries delivered to your
              door. We partner with local growers to bring the best seasonal
              produce to your table.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start mt-16 gap-1">
            <p className="mb-1 font-bold text-primary">Shop</p>
            <p className="cursor-pointer hover:font-bold hover:text-accent">
              Produce
            </p>
            <p className="cursor-pointer hover:font-bold hover:text-accent">
              Dairy & Eggs
            </p>
            <p className="cursor-pointer hover:font-bold hover:text-accent">
              Bakery
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-4 text-[10px]">
            <p>2026 Health Basket. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
