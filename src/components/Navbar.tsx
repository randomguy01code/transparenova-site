import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = ["Home", "Events", "Members", "Chrysalis '24"];

  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm bg-opacity-10 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/48d1a5cd-e2bc-4e45-a2e3-1fc7fa847ce9.png" 
            alt="Chrysalis Logo" 
            className="h-12 w-auto" 
          />
        </div>
        
        <div className="flex items-center space-x-16">
          <ul className="flex space-x-12">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to="/"
                  className="text-white text-xl relative group px-1 py-2 transition-colors duration-300 hover:text-space-purple"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-space-purple transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 origin-left" />
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
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;