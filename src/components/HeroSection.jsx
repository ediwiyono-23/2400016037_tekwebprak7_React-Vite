import foto1 from "../assets/foto2.jpg";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold leading-tight">
          <span className="text-blue-700">RUANG EKSPRESI :</span>{" "}
          <span className="text-black">Wadah</span> <br />
          <span className="text-black">kreatif & Kompetitif</span> <br />
          <span className="text-black">Mahasiswa</span>
        </h1>

        <div className="flex gap-4 mt-6 flex-wrap">
          <span className="px-4 py-2 rounded-full bg-yellow-300">Ideation</span>
          <span className="px-4 py-2 rounded-full bg-green-200">Creation</span>
          <span className="px-4 py-2 rounded-full bg-blue-200">
            Collaboration
          </span>
          <span className="px-4 py-2 rounded-full bg-pink-300">
            Guidance & Support
          </span>
        </div>
      </div>

      <div>
        <img src={foto1} alt="team" className="rounded-2xl shadow-lg" />
      </div>
    </section>
  );
}
