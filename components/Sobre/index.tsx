import Img1 from "@/public/sobre/3d-rendering-mouth-melting.jpg";
import Img2 from "@/public/sobre/beautiful-sunset-scenery-forest.jpg";
import Img3 from "@/public/sobre/fairytale-collage-concept.jpg";
import Img4 from "@/public/sobre/golden-greek-goddess-with-halo(2).jpg";
import Img5 from "@/public/sobre/realistic-house-with-melting-effect.jpg";
import Img6 from "@/public/sobre/red-greek-god-head-with-grapes.jpg";
import Img7 from "@/public/sobre/eclipse-from-futuristic-city.jpg";
import Image from "next/image";

export default function Sobre() {
  return (
    <div id="sobre" className="relative overflow-hidden">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gradient sm:text-6xl">
              A paradiso
            </h1>
            <p className="mt-4 text-lg text-left text-white">
              Queremos{" "}
              <strong className="text-green-500">
                idealizar com você o desenvolvimento de identidades
              </strong>{" "}
              que transformem a vida de usuários. Além de inspirar e criar toda
              essência e a paixâo da sua marca.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src={Img1}
                          alt=""
                          className="h-full w-full object-cover object-center "
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={Img2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={Img3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={Img4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={Img5}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={Img6}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={Img7}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:visible">
                <a
                  href="#"
                  className="slide-bck-center lg:w-4/12  btn rounded-md px-3.5 py-2.5 text-sm font-semibold text-white  "
                >
                  Entre em Contato via WhatsApp Agora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
