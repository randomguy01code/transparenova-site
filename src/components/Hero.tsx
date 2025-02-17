import { useEffect, useState } from "react";
import { Bird } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-space-dark overflow-hidden">
      {/* Shooting Star Dots */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: "4px",
              height: "4px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `shooting-star 3s linear infinite`,
              animationDelay: `${i * 1.5}s`,
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Static Stars with enhanced glow */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              backgroundColor: "white",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.6)",
            }}
          />
        ))}
      </div>

      {/* Background Image with enhanced sharpness */}
      <img
        src="/lovable-uploads/ca6df372-ffc4-4377-abb8-728cfedbf0b5.png"
        alt="Space Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 contrast-125 saturate-150 filter brightness-75"
      />

      {/* Flying Bird with enhanced trail effect */}
      <div className="absolute w-full h-full">
        <div 
          className="absolute"
          style={{
            animation: "butterfly 15s infinite linear",
          }}
        >
          <Bird 
            size={48} 
            className="text-space-purple animate-pulse"
            style={{
              filter: "drop-shadow(0 0 15px rgba(155,135,245,0.8))",
              transform: "rotate(-15deg)",
            }}
          />
        </div>
      </div>

      {/* Enhanced glowing orbs */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-space-blue blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-space-purple blur-2xl opacity-15 animate-pulse" />

      {/* Content with enhanced typography */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <div className={`text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-[10rem] md:text-[12rem] font-black tracking-[0.2em] bg-gradient-to-br from-space-purple via-white to-space-blue bg-clip-text text-transparent pb-4 px-4 drop-shadow-[0_0_60px_rgba(155,135,245,0.6)] hover:scale-105 transition-transform duration-300">
            CHRYSALIS
          </h1>
          <div className="text-7xl md:text-9xl font-thin tracking-[0.8em] bg-gradient-to-r from-white via-space-blue to-white bg-clip-text text-transparent mt-4 drop-shadow-[0_0_45px_rgba(97,218,251,0.6)]">2025</div>
        </div>
      </div>

      {/* Floating Element with enhanced glow */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
        <img
          src="/lovable-uploads/54c01219-d881-4941-9535-4955e00322e8.png"
          alt="Floating Element"
          className="w-96 animate-float"
          style={{
            filter: "drop-shadow(0 0 20px rgba(97,218,251,0.4))",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
