import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-space-dark overflow-hidden">
      {/* Stars */}
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

      {/* Background Image */}
      <img
        src="/lovable-uploads/ca6df372-ffc4-4377-abb8-728cfedbf0b5.png"
        alt="Space Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-space-blue blur-2xl opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <img
          src="/lovable-uploads/54c01219-d881-4941-9535-4955e00322e8.png"
          alt="Chrysalis 2025"
          className={`w-[600px] transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />
      </div>

      {/* Astronaut */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
        <img
          src="/lovable-uploads/354d12b5-bfc7-414e-aa0e-45725f6d0de8.png"
          alt="Astronaut"
          className="w-96 animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;