import Image from "next/image";

export default function PlaylistCard({ color, title, imageSrc }) {
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
      />
    </div>
  );
}
