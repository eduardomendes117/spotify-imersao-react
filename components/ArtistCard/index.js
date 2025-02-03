import Image from "next/image";

export default function ArtistCard({ artist }) {
  return (
    <div className="group/card artist-card bg-[#181818] p-4 rounded-lg w-[200px] hover:bg-[#282828] transition-all duration-300 cursor-pointer relative">
      <div className="card-img-container relative mb-4">
        {/* Shadow overlay */}
        <div className="absolute inset-0 rounded-lg bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10"></div>

        {/* Artist Image */}
        <div className="relative aspect-square shadow-lg">
          <Image
            src={artist.urlImg}
            alt={artist.name}
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Play Button */}
        <div className="group/play play absolute bottom-2 right-2 bg-[#1ed760] p-3.5 rounded-full cursor-pointer shadow-xl translate-y-3 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 hover:bg-[#1fdf64] z-20">
          <svg
            className="w-5 h-5 text-black ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="card-text space-y-1">
        <h3 className="font-bold text-base text-white truncate">
          {artist.name}
        </h3>
        <span className="text-sm font-normal text-[#a7a7a7]">Artista</span>
      </div>
    </div>
  );
}
