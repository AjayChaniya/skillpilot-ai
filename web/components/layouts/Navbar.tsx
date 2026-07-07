export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
      <h1 className="text-2xl font-bold text-blue-600">
        SkillPilot AI
      </h1>

      <div className="hidden md:flex items-center gap-8">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
        Login
      </button>
    </nav>
  );
}