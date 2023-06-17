import Image from "next/image";
import WhatsApp from "@/public/whatsapp_3.png";

export const ButtonWhats = () => {
  return (
    <div className="whatsapp ">
      <a href="#" target="_blank">
        <button className="button-wpp jumping">
          <Image src={WhatsApp} alt=""></Image>
        </button>
      </a>
    </div>
  );
};
