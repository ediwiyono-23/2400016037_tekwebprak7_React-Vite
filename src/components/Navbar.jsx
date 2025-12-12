import ReactLogo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-blue-700 flex items-center gap-2">
          <img src={ReactLogo} alt="React Logo" className="w-7 h-7" />
          Ruang Ekspresi
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Program</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>

      </div>
    </nav>
  );
}
