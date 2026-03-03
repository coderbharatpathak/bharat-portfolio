function Navbar() {
  return (
    <nav className="bg-slate-800 text-white py-3 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex flex-col items-center leading-tight cursor-pointer hover:scale-105 transition-transform duration-300">
          <h1 className="text-xl md:text-2xl font-bold tracking-[6px] text-blue-500">
            BHARAT
          </h1>
          <div className="w-14 h-[2px] bg-blue-500 my-1 rounded-full"></div>
          <span className="text-xs text-gray-300 tracking-widest">
            PORTFOLIO
          </span>
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 text-base">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-400 transition">Education</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;