import { useEffect, useState } from "react";
import { Butterfly } from "lucide-react";

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

      {/* Static Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Background Image with enhanced sharpness */}
      <img
        src="/lovable-uploads/ca6df372-ffc4-4377-abb8-728cfedbf0b5.png"
        alt="Space Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 contrast-125 saturate-150"
      />

      {/* Flying Butterfly */}
      <div className="absolute w-full h-full">
        <div 
          className="absolute animate-butterfly"
          style={{
            animation: "butterfly 15s infinite linear",
          }}
        >
          <Butterfly 
            size={48} 
            className="text-space-purple animate-pulse"
            style={{
              filter: "drop-shadow(0 0 10px rgba(155,135,245,0.6))",
            }}
          />
        </div>
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-space-blue blur-2xl opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className={`text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-[14rem] font-black tracking-[0.3em] bg-gradient-to-br from-space-purple via-white to-space-blue bg-clip-text text-transparent pb-4 px-8 drop-shadow-[0_0_45px_rgba(155,135,245,0.5)] hover:scale-105 transition-transform duration-300">
            CHRYSALIS
          </h1>
          <div className="text-9xl font-thin tracking-[1em] bg-gradient-to-r from-white via-space-blue to-white bg-clip-text text-transparent mt-4 drop-shadow-[0_0_35px_rgba(97,218,251,0.5)]">2025</div>
        </div>
      </div>

      {/* Floating Element */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
        <img
          src="/lovable-uploads/54c01219-d881-4941-9535-4955e00322e8.png"
          alt="Floating Element"
          className="w-96 animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;