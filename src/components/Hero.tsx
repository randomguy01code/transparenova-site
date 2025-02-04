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

      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-space-blue blur-2xl opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className={`text-7xl font-bold mb-4 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          WELCOME
        </h1>
        <h2 className={`text-4xl font-light transition-all duration-1000 delay-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Chrysalis 2025
        </h2>
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