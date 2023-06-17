import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "SOMOS CRIATIVOS",
    description: "A criatividade está em nosso DNA e a gente sabe disso.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SOMOS PARCEIROS",
    description:
      "Entendemos a importância da humanização no relacionamento cliente - agência.",
    icon: LockClosedIcon,
  },
  {
    name: "SOMOS PONTUAIS",
    description: "Agilidade e comprometimento em cada caso que participamos.",
    icon: ArrowPathIcon,
  },
  {
    name: "SOMOS RESPONSIVOS",
    description:
      "A melhor experiência oferecida para todos os tamanhos de dispositivos.",
    icon: FingerPrintIcon,
  },
];

export default function Servicos() {
  return (
    <div className=" py-24 sm:py-32">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8  flex  flex-col lg:gap-20 lg:flex-row-reverse items-center justify-center">
        <div className="mx-auto max-w-2xl lg:text-right">
          <h1 className="text-4xl font-bold tracking-tight text-gradient sm:text-6xl">
            Transmita confiança e destaque-se conosco!
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Vamos juntos alcançar seus objetibos com os melhores resultados.{" "}
            <strong className="text-green-600">
              Aqui você não será mais um cliente, mas um parceiro{" "}
            </strong>
            para desenvolver experiências marcantes aos seus clientes.
          </p>
          <div className=" flex  justify-end">
            <a
              href="#"
              className="slide-bck-center btn rounded-md   text-sm font-semibold text-white  "
            >
              Entre em Contato via WhatsApp Agora!
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-green-600">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-300">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
