import { BiLibrary } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside
      className="bg-[#121212] rounded-lg p-4 max-w-md flex flex-col h-full"
      style={{ gridArea: "sidebar" }}
    >
      <div className="flex-grow">
        <div className="flex justify-between px-3 pt-0 pb-6">
          <button className="flex items-center font-bold gap-3">
            <span className="text-3xl">
              <BiLibrary />
            </span>
            <span>Sua biblioteca</span>
          </button>
          <span className="text-2xl hover:bg-[#1E1E1E] cursor-pointer p-1 rounded-full">
            <IoAddSharp />
          </span>
        </div>

        <div className="group relative flex-grow overflow-hidden">
          <div className="max-h-[calc(100vh-300px)] overflow-y-hidden group-hover:overflow-y-auto scrollbar flex flex-col gap-4">
            <section className="bg-[#1F1F1F] rounded-lg px-5 py-4">
              <div className="flex flex-col gap-2">
                <span className="font-bold">Crie sua primeira playlist</span>
                <span className="text-xs font-bold mb-3">
                  É fácil, vamos te ajudar.
                </span>
                <button className="bg-white w-max px-5 py-2 rounded-full font-bold text-sm text-black">
                  <span>Criar playlist</span>
                </button>
              </div>
            </section>
            <section className="bg-[#1F1F1F] rounded-lg px-5 py-4">
              <div className="flex flex-col gap-2">
                <span className="font-bold">
                  Que tal seguir um podcast novo?
                </span>
                <span className="text-xs font-bold mb-3">
                  Avisaremos você sobre novos episódios.
                </span>
                <button className="bg-white w-max px-5 py-2 rounded-full font-bold text-sm text-black">
                  <span>Explore podcasts</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Links e botão fixados no final */}
      <div className="mt-auto">
        <div className="px-1 pt-10">
          <div className="flex flex-wrap gap-3 text-xs mb-2 text-white/70">
            <a href="">Legal</a>
            <a href="">Segurança e Centro de privacidade</a>
            <a href="">Política de privacidade</a>
            <a href="">Cookies</a>
            <a href="">Sobre anúncios</a>
            <a href="">Acessibilidade</a>
          </div>
          <a href="" className="text-xs text-white hover:underline">
            Cookies
          </a>
        </div>

        <div className="mt-4">
          <button className="flex gap-3 items-center border border-white/50 hover:border-white hover:scale-105 delay-100 w-max px-3 py-2 rounded-full text-xs font-bold">
            <span>
              <FaGlobe />
            </span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
