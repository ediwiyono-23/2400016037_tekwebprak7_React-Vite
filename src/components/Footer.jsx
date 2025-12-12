import logo from "../assets/react.svg";

export default function Footer() {
  return (
    <footer className="bg-[#0A6EB4] text-white pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ruang Ekspresi Logo"
              className="w-10 h-10 object-contain"
            />
            <h3 className="text-2xl font-bold">ruang ekspresi</h3>
          </div>

          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
            mengembangkan potensi melalui ideation, creation, collaboration, dan
            guidance.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-start gap-2">
              📍
              <span>
                Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan,
                Bantul, Daerah Istimewa Yogyakarta 55191
              </span>
            </p>

            <p className="flex items-center gap-2">
              ✉️ ruang_ekspresi@webmail.uad.ac.id
            </p>

            <p className="flex items-center gap-2">📞 (0274) 511830</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Program</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li>Career Talks</li>
            <li>Extra Classes</li>
            <li>Project Work</li>
            <li>Mentoring</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm border-t border-white/40 mt-12 pt-4">
        © 2025 Ruang Ekspresi | All Rights Reserved
      </p>
    </footer>
  );
}
