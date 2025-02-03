"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PlaylistCard from "@/components/PlaylistCard";
import ArtistCard from "@/components/ArtistCard";
import { playlists } from "@/utils/constants";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.error("Error fetching artists:", error);
        setError("Failed to load artists data");
        setIsLoading(false);
      }
    };

    fetchArtists();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setSearchResults([]);
      return;
    }

    const filteredArtists = artists.filter((artist) =>
      artist.name.toLowerCase().includes(term)
    );
    setSearchResults(filteredArtists);
  };

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
      <Header searchTerm={searchTerm} onSearch={handleSearch} />
      <Sidebar />

      <main
        className="bg-[#121212] rounded-lg px-6 pt-9 group overflow-hidden hover:overflow-y-auto transition-all duration-200"
        style={{
          gridArea: "main",
          scrollbarWidth: "thin",
          scrollbarGutter: "stable",
        }}
      >
        {isLoading ? (
          <div className="text-center py-4">Carregando conteúdo...</div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">{error}</div>
        ) : (
          <>
            {!searchTerm ? (
              <div id="main">
                <h2 className="font-bold text-2xl py-4">
                  Navegar por todas as seções
                </h2>
                <div className="flex flex-wrap gap-4">
                  {playlists.map((playlist, index) => (
                    <PlaylistCard key={index} {...playlist} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {searchResults.map((artist) => (
                    <ArtistCard key={artist.name} artist={artist} />
                  ))}
                </div>
                {searchResults.length === 0 && (
                  <div className="text-center py-4">
                    Nenhum artista encontrado
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
