import Setembro from "@/public/portfolio/7-de-setembro.jpeg";
import BlackFriday from "@/public/portfolio/black-friday.jpeg";
import Mr4 from "@/public/portfolio/mr4.jpeg";
import NinhoDoSabor from "@/public/portfolio/ninho-do-sabor.jpeg";
import Panetones from "@/public/portfolio/panetones-recheados.jpeg";
import Roval from "@/public/portfolio/roval.jpeg";
import Sarau from "@/public/portfolio/sarau-toth.jpeg";
import Terumi from "@/public/portfolio/terumi.jpeg";
import Toth from "@/public/portfolio/toth.jpeg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

const products = [
  {
    id: 1,
    /* name: "Earthen Bottle",
    href: "#",
    price: "$48", */
    imageSrc: Setembro,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    /*  name: "Nomad Tumbler",
    href: "#",
    price: "$35", */
    imageSrc: BlackFriday,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    /*  name: "Focus Paper Refill",
    href: "#",
    price: "$89", */
    imageSrc: Mr4,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    /*  name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35", */
    imageSrc: NinhoDoSabor,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    /*  name: "Earthen Bottle",
    href: "#",
    price: "$48", */
    imageSrc: Panetones,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    /*  name: "Nomad Tumbler",
    href: "#",
    price: "$35", */
    imageSrc: Roval,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    /*  name: "Focus Paper Refill",
    href: "#",
    price: "$89", */
    imageSrc: Sarau,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    /*  name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35", */
    imageSrc: Terumi,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    /*  name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35", */
    imageSrc: Toth,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="lg:px-44">
      <h1 className="text-6xl font-bold tracking-tight text-gradient sm:text-6xl text-center">
        Nosso Porfólio
      </h1>
      <div className="p-10 lg:px-40 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className=" rounded-md shadow-2xl">
              <a /* href={product.href} */ className="group">
                <div className="">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className=" w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p> */}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" flex items-center justify-center">
        <a
          href="#"
          className="slide-bck-center lg:w-5/12 btn rounded-md  mt-12 text-sm font-semibold text-white m-auto "
        >
          Entre em Contato via WhatsApp Agora!
        </a>
      </div>
    </div>
  );
}
