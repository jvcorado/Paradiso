import Banner from "@/components/Banner";
import Chamar from "@/components/Chamar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Planos } from "@/components/Planos";
import { ButtonWhats } from "@/components/ButtonWhats";
import Portfolio from "@/components/Portfolio";
import Sobre from "@/components/Sobre";
import Feedbacks from "@/components/Feedbacks";
import Parcerias from "@/components/Parcerias";
import { Footer } from "@/components/Footer";
import Servicos from "@/components/Servicos";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <ButtonWhats />
      <Sobre></Sobre>
      <Servicos></Servicos>
      <Portfolio></Portfolio>
      <Feedbacks></Feedbacks>
      <Parcerias></Parcerias>
      <Footer></Footer>
      {/*       <Planos /> */}
    </main>
  );
}
