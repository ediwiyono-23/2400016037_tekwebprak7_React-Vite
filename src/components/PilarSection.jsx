import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export default function PilarSection() {
  const pillars = [
    {
      title: "Ideation",
      desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop.",
      color: "bg-yellow-200",
      icon: <LightBulbIcon className="w-10 h-10 text-yellow-600" />,
    },
    {
      title: "Creation",
      desc: "Mewujudkan ide menjadi karya nyata dengan tools dan teknologi.",
      color: "bg-green-200",
      icon: <WrenchScrewdriverIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Collaboration",
      desc: "Bekerja sama dengan tim multidisiplin untuk menghasilkan solusi komprehensif.",
      color: "bg-blue-200",
      icon: <UsersIcon className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Guidance & Support",
      desc: "Mendapatkan bimbingan mentor dan akses resources pembelajaran.",
      color: "bg-pink-200",
      icon: <AcademicCapIcon className="w-10 h-10 text-pink-600" />,
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
      </h2>
      <p className="text-center text-gray-600 mb-10">
        komprehensif yang dirancang untuk mengembangkan potensi <br />
        kreatif mahasiswa melalui pendekatan holistik
      </p>

      <div className="grid md:grid-cols-4 gap-6 justify-center mx-auto max-w-5xl">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`${p.color} p-6 rounded-xl shadow flex flex-col`}
          >
            <div className="mb-4 flex justify-center">{p.icon}</div>

            <h3 className="font-bold text-lg text-center">{p.title}</h3>
            <p className="text-sm text-gray-700 mt-2 text-center">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
