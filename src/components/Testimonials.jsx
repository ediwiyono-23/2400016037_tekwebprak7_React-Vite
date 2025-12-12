import foto3 from "../assets/foto3.jpg";

export default function Testimonials() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={foto3}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-lg">Budi Santoso</p>
                <p className="text-blue-600 text-sm">
                  Mahasiswa Sistem Informasi
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar
              banyak hal dari teman-teman jurusan lain.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
