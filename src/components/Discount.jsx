import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdOutlineWatchLater } from "react-icons/md";
import applesImg from "../image/Discounts/p-apples.jpg";
import honeyImg from "../image/Discounts/p-honey.jpg";
import milkImg from "../image/Discounts/p-milk.jpg";
import oliveoilImg from "../image/Discounts/p-oliveoil.jpg";

export default function Discount() {
  const discountProducts = [
    {
      name: "Organic Red Apples (1kg)",
      description:
        "Crisp, juicy organic apples picked at peak ripeness from local orchards.",
      price: 4.5,
      oldPrice: 6.0,
      percent: "−25%",
      image: applesImg,
    },
    {
      name: "Raw Organic Honey (500g)",
      description:
        "Unfiltered wildflower honey from small family apiaries. Rich, floral and pure.",
      price: 9.9,
      oldPrice: 13.5,
      percent: "−27%",
      image: honeyImg,
    },
    {
      name: "Fresh Whole Milk (1L)",
      description:
        "Creamy grass-fed whole milk in returnable glass bottles, delivered daily.",
      price: 2.8,
      oldPrice: 3.6,
      percent: "−22%",
      image: milkImg,
    },
    {
      name: "Extra Virgin Olive Oil (750ml)",
      description:
        "Cold-pressed single-origin olive oil with a peppery, fruity finish.",
      price: 14.9,
      oldPrice: 19.9,
      percent: "−25%",
      image: oliveoilImg,
    },
  ];

  return (
    <>
      <div className="w-full bg-dis py-2 mt-18 mb-4 pb-12">
        <div className="flex flex-row items-center justify-start gap-1 ml-20 mt-8">
          <MdOutlineWatchLater className="text-primary font-bold" />
          <h2 className="text-primary font-bold text-[18px]">Weekly deals</h2>
        </div>
        <p className="ml-20 font-bold text-white text-2xl">
          This week's savings
        </p>
        <div className="max-w-7xl mx-auto mb-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            className="mt-6"
          >
            {discountProducts.map((dis) => (
              <SwiperSlide key={dis.name}>
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl p-8 ">
                  <div className="relative">
                    <img
                      src={dis.image}
                      alt={dis.name}
                      className="md:w-full md:h-96 w-[350px] object-contain rounded-2xl"
                    />
                    <span className="absolute top-4 left-4 bg-green-700 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {dis.percent}
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h2 className="text-primary font-bold text-2xl">
                      {dis.name}
                    </h2>
                    <p className="mt-1">{dis.description}</p>
                    <div className="flex flex-row items-center justify-center gap-10 mt-4">
                      <span className="font-bold text-3xl">${dis.price}</span>
                      <span className="text-2xl font-bold line-through text-secondary">
                        ${dis.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
