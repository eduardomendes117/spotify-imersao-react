export default function Footer() {
  return (
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
  );
}
