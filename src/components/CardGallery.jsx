import foto2 from "../assets/foto2.jpg";

export default function CardGallery() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-2">
        Showcase <span className="text-blue-600">Student Projects</span>
      </h2>
      <p className="text-center text-gray-600 mb-10">
       Karya-karya inovatif yang telah dihasilkan oleh mahasiswa <br />
       dalam program Ruang Ekspresi
      </p>

      <div className="bg-pink-50 rounded-2xl p-10 flex flex-col md:flex-row gap-10 shadow-xl">
        <div className="flex-1">
          <span className="px-4 py-2 bg-blue-200 rounded-full text-sm">
            UI/UX Design
          </span>

          <h3 className="text-3xl font-bold mt-4">
            Creative Portfolio Platform
          </h3>

          <p className="mt-2 text-gray-600 leading-relaxed">
            Platform showcase karya mahasiswa dengan sistem rating dan <br />
            feedback komunitas
          </p>

          <h4 className="mt-6 font-bold">Tim Pembuat:</h4>

          <ul className="mt-4 space-y-3">
            {["Budi Santoso", "Budi Santoso", "Budi Santoso"].map((name) => (
              <li key={name} className="flex items-center gap-3">
                <img src={foto2} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-gray-600">Frontend Developer</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
            Live Demo
          </button>
        </div>

        <div className="flex-1">
          <img src={foto2} className="rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
