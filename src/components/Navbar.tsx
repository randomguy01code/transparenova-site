import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = ["Home", "Events", "Members", "Chrysalis '24"];

  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm bg-opacity-10 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        
        <div className="flex items-center space-x-12">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to="/"
                  className="text-white relative group px-1"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-space-purple transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-space-purple transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;