import Image from "next/image";
import { GrHomeRounded } from "react-icons/gr";

export default function Header({ searchTerm, onSearch }) {
  return (
    <header
      className="flex justify-between items-center"
      style={{ gridArea: "header" }}
    >
      <a className="ml-5" href="">
        <Image
          src="/icons/logo-spotify-002.png"
          width={35}
          height={3}
          alt="Logo"
        />
      </a>

      <div className="flex gap-3">
        <div className="bg-[#1F1F1F] h-max p-[14px] text-xl rounded-full hover:scale-105 delay-100 cursor-pointer">
          <GrHomeRounded />
        </div>

        <div className="flex gap-4 bg-[#1F1F1F] hover:bg-[#2A2A2A] px-3 py-2 rounded-full w-96 h-full border border-transparent focus-within:border-white">
          <Image
            className="my-1"
            src="/icons/search.png"
            width={24}
            height={24}
            alt=""
          />
          <input
            className="bg-transparent focus:outline-none w-full text-white"
            type="text"
            maxLength="800"
            placeholder="O que você quer ouvir?"
            value={searchTerm}
            onChange={onSearch}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button className="text-[#B3B3B3] font-bold text-sm hover:text-white hover:scale-105 delay-100">
          Inscrever-se
        </button>
        <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-white/90 hover:scale-105 delay-100">
          Entrar
        </button>
      </div>
    </header>
  );
}
