"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GrHomeRounded } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import "@fortawesome/fontawesome-free/css/all.min.css";

function PlaylistCard({ color, title, imageSrc, priority = false }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="min-w-48 min-h-48 flex-1 overflow-hidden relative rounded-lg p-4"
    >
      <span className="font-bold text-xl">{title}</span>
      <Image
        className="absolute bottom-0 -right-4 rotate-12"
        src={imageSrc}
        width={128}
        height={128}
        alt={title}
        priority={priority}
      />
    </div>
  );
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch artists data when component mounts
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/eduardomendes117/bfe3543b2ee4cb09dc3678f2583c09a5/raw/b65c40af421daecfbeb9c8e3d994f46069397134/artists.json"
        );
        const data = await response.json();
        setArtists(data.artists);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar artistas:", error);
        setError("Falha ao carregar os dados dos artistas");
        setIsLoading(false);
      }
    };

    fetchArtists();
  }, []);

  // Handle search input changes
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setSelectedArtist(null);
      return;
    }

    const filteredArtist = artists.find((artist) =>
      artist.name.toLowerCase().includes(term)
    );
    setSelectedArtist(filteredArtist || null);
  };

  const playlists = [
    { color: "#006450", title: "Boas festas", imageSrc: "/playlist/1.jpeg" },
    {
      color: "#8400E7",
      title: "Feitos para você",
      imageSrc: "/playlist/2.jpeg",
    },
    { color: "#1E3264", title: "Lançamentos", imageSrc: "/playlist/3.jpeg" },
    { color: "#8C1932", title: "Creators", imageSrc: "/playlist/4.jpeg" },
    { color: "#E8115B", title: "Para treinar", imageSrc: "/playlist/5.jpeg" },
    { color: "#537AA1", title: "Podcasts", imageSrc: "/playlist/6.jpeg" },
    { color: "#8E66AC", title: "Sertanejo", imageSrc: "/playlist/7.jpeg" },
    { color: "#148A08", title: "Samba e pagode", imageSrc: "/playlist/8.jpeg" },
    { color: "#1E3264", title: "Funk", imageSrc: "/playlist/9.jpeg" },
    { color: "#E8115B", title: "MPB", imageSrc: "/playlist/10.jpeg" },
    { color: "#503750", title: "Rock", imageSrc: "/playlist/11.jpeg" },
    { color: "#D84000", title: "Hip hop", imageSrc: "/playlist/12.jpeg" },
    { color: "#BA5D07", title: "Indie", imageSrc: "/playlist/13.jpeg" },
    { color: "#001E50", title: "Relax", imageSrc: "/playlist/14.jpeg" },
    { color: "#3C1E50", title: "Música latina", imageSrc: "/playlist/15.jpeg" },
    {
      color: "#8D67AB",
      title: "Eventos ao vivo",
      imageSrc: "/playlist/16.jpeg",
    },
  ];

  return (
    <div
      className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] h-[calc(100svh-16px)] gap-2 m-2"
      style={{
        gridTemplateAreas: `
          "header header"
          "sidebar main"
          "player player"
        `,
      }}
    >
      {/* Header */}
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
            style={{
              width: "auto",
              height: "auto",
            }}
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
              style={{
                width: "auto",
                height: "auto",
              }}
            />
            <input
              className="bg-transparent focus:outline-none w-full text-white"
              type="text"
              maxLength="800"
              placeholder="O que você quer ouvir?"
              value={searchTerm}
              onChange={handleSearch}
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

      {/* Sidebar */}
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

      {/* Main content */}
      <main
        className="bg-[#121212] rounded-lg px-6 pt-9 group overflow-hidden hover:overflow-y-auto transition-all duration-200"
        style={{
          gridArea: "main",
          scrollbarWidth: "thin",
          scrollbarGutter: "stable",
        }}
      >
        <style jsx global>{`
          .group::-webkit-scrollbar {
            width: 12px;
            background: transparent;
          }

          .group::-webkit-scrollbar-thumb {
            background: #ffffff4d;
            border-radius: 6px;
            border: 4px solid transparent;
            background-clip: padding-box;
          }

          .group::-webkit-scrollbar-thumb:hover {
            background: #ffffff66;
            border: 3px solid transparent;
            background-clip: padding-box;
          }

          .group {
            scrollbar-width: thin;
            scrollbar-color: #ffffff4d transparent;
          }
        `}</style>

        {isLoading ? (
          <div className="text-center py-4">Carregando conteúdo...</div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">{error}</div>
        ) : (
          <>
            {!searchTerm && (
              <div id="main">
                <h2 className="font-bold text-2xl py-4">
                  Navegar por todas as seções
                </h2>
                <div className="flex flex-wrap gap-4">
                  {playlists.map((playlist, index) => (
                    <PlaylistCard
                      key={index}
                      color={playlist.color}
                      title={playlist.title}
                      imageSrc={playlist.imageSrc}
                      priority
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {searchTerm && (
              <div className="grid-container">
                {selectedArtist ? (
                  <div className="group/card artist-card bg-[#181818] p-4 rounded-lg w-[200px] hover:bg-[#282828] transition-all duration-300 cursor-pointer relative">
                    <div className="card-img-container relative mb-4">
                      {/* Shadow overlay */}
                      <div className="absolute inset-0 rounded-lg bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10"></div>

                      {/* Artist Image */}
                      <div className="relative aspect-square shadow-lg">
                        <Image
                          src={selectedArtist.urlImg}
                          alt={selectedArtist.name}
                          width={200}
                          height={200}
                          className="rounded-lg object-cover"
                        />
                      </div>

                      {/* Play Button */}
                      <div className="group/play play absolute bottom-2 right-2 bg-[#1ed760] p-3.5 rounded-full cursor-pointer shadow-xl translate-y-3 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 hover:bg-[#1fdf64] z-20">
                        <span className="fa fa-solid fa-play w-6 h-5 text-center"></span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="card-text space-y-1">
                      <h3 className="font-bold text-base text-white truncate">
                        {selectedArtist.name}
                      </h3>
                      <span className="text-sm font-normal text-[#a7a7a7]">
                        Artista
                      </span>
                    </div>
                  </div>
                ) : (
                  searchTerm && (
                    <div className="text-center py-4">
                      Nenhum artista encontrado
                    </div>
                  )
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer/Player */}
      <footer
        className="bg-gradient-to-r from-[#ae2896] to-[#509bf5] flex items-center justify-between py-2 px-4"
        style={{ gridArea: "player" }}
      >
        <div>
          <p className="font-bold text-sm">Testar o Premium de graça</p>
          <p className="text-sm">
            Inscreva-se para curtir música ilimitada e podcasts só com alguns
            anúncios. Não precisa de cartão de crédito.
          </p>
        </div>

        <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-white/90 hover:scale-105 hover:text-base delay-100">
          Inscreva-se grátis
        </button>
      </footer>
    </div>
  );
}
