const posts = [
  {
    id: 1,
    title: "VENDAS EM TEMPO RECORDE!",
    href: "#",
    description:
      "Venho aqui agradecer e recomendar Beatriz Christinny pelos seus serviços de Design e Web Desi para a MR4 Incorporadora e Confeitaria Bordeli. Ela foi uma das grandes responsáveis pelo o Sucesso nas vendas do nosso Residencial em jempo recorde. Isso combrova a ericacia de criativos e sites que convertem vendas. Foram mais de 15 milhoes em vGv em temos recorde Obrigado mais uma vez Beatriz!",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Bordeli",
      role: "MR4 INCORPORADORA, BORDELI CONFEITARIA",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "TRABALHO NOTA 100",
    href: "#",
    description:
      "Olá Beatriz tudo bem? Então gostei muito do seu trabalho e achei você super profissional, o que me surpreendeu foi que você me deu bastante atenção em coisas que eu não sabia coca ale outras pessoas que eu procurei nao tizeram. mas o a 10 eu te dou nota 108 aliás estou recomendando seu trabalho para outros empresarios que eu conneco, e pelo serviço que voce me otereceu eu achei que teve um preço bem acessive sem contar que voce facilitou bastante a forma de pagamento, então parabéns pelo trabalho obrigado",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Matheus",
      role: "TROCAMAIS CELULARES E TABLETS",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "SUPORTE À TODO MOMENTO",
    href: "#",
    description:
      "Mas eu particularmente gostei muito do seu trabalho, a parte de designer ficou excelente, eu gostei muito E você deu um suporte muito bom. ficou bem atenta a tudo Aquele dia ficou até um pouco mais tarde tentando resolver e tals Então eu gostei muito Recomendaria tranquilo",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Victor Coelho",
      role: "ALFO PIZZARIA",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Feedbacks() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gradient sm:text-6xl">
            Feedbacks
          </h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Aqui estão algumas opiniões de clientes que depositaram sua
            confiança em nosso trabalho:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-white">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-black hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6  text-black">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-black ">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className=" flex items-center justify-center mt-12">
          <a
            href="#"
            className="slide-bck-center lg:w-5/12 btn rounded-md text-sm font-semibold text-white m-auto "
          >
            Entre em Contato via WhatsApp Agora!
          </a>
        </div>
      </div>
    </div>
  );
}
