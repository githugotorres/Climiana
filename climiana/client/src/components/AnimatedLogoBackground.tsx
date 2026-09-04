/*
 * Fundo animado partilhado: logótipo Climiana com efeito de água (SVG +
 * feTurbulence) e ondas decorativas por baixo. Usado no cabeçalho das
 * páginas internas (Assistência, Serviços, Sobre, Contactos), que antes
 * tinham este bloco duplicado com pequenas variações de tamanho/opacidade.
 */

interface AnimatedLogoBackgroundProps {
  /** "md" é o tamanho usado por Assistência, Serviços e Contactos; "lg" é o usado por Sobre. */
  size?: "md" | "lg";
}

export default function AnimatedLogoBackground({ size = "md" }: AnimatedLogoBackgroundProps) {
  const isLarge = size === "lg";

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F2F7FA] via-[#F2F7FA]/80 to-[#F2F7FA]" />

      <div
        className={
          isLarge
            ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-[0.08]"
            : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] opacity-[0.06]"
        }
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-float-water"
          style={
            isLarge
              ? ({
                  filter: "url(#waterRipple)",
                  "--float-water-shadow-1": "rgba(0,114,194,0.2)",
                  "--float-water-shadow-2": "rgba(0,114,194,0.3)",
                } as React.CSSProperties)
              : { filter: "url(#waterRipple)" }
          }
        >
          <defs>
            <filter id="waterRipple">
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0072C2" />
              <stop offset="100%" stopColor="#15ABE6" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="96" fill="url(#logoGrad)" stroke="#0072C2" strokeWidth="2" />
          <path d="M 50 70 L 50 130 L 70 130 L 70 100 L 90 100 L 90 130 L 110 130 L 110 70 L 90 70 L 90 90 L 70 90 L 70 70 Z" fill="white" opacity="0.95" />
          <path d="M 120 70 L 120 130 L 160 130 L 160 110 L 140 110 L 140 105 L 160 105 L 160 85 L 140 85 L 140 80 L 160 80 L 160 70 Z" fill="white" opacity="0.95" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="4" opacity="0.3" />
          <circle cx="100" cy="100" r="16" fill="white" opacity="0.2" />
          <path d="M 100 70 L 100 50 M 100 130 L 100 150 M 70 100 L 50 100 M 130 100 L 150 100" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
        </svg>
      </div>

      {isLarge && <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F2F7FA] to-transparent" />}

      {isLarge ? (
        <svg className="absolute bottom-0 left-0 w-full h-20 text-[#F2F7FA]" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ fill: "currentColor" }}>
          <path d="M0,40 C360,120 720,0 1080,60 C1260,90 1380,60 1440,40 L1440,120 L0,120 Z" />
        </svg>
      ) : (
        <svg className="absolute bottom-0 left-0 w-full h-16 text-[#F2F7FA]" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ fill: "currentColor" }}>
          <path d="M0,20 C360,60 720,0 1080,30 C1260,45 1380,30 1440,20 L1440,60 L0,60 Z" />
        </svg>
      )}

      <style>{`
        @keyframes float-water {
          0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            filter: drop-shadow(0 10px 30px var(--float-water-shadow-1, rgba(0,114,194,0.1)));
          }
          25% {
            transform: translate(-48%, -53%) scale(1.02) rotate(1deg);
            filter: drop-shadow(0 20px 50px var(--float-water-shadow-2, rgba(0,114,194,0.15)));
          }
          50% {
            transform: translate(-52%, -48%) scale(0.98) rotate(-1deg);
            filter: drop-shadow(0 15px 40px var(--float-water-shadow-1, rgba(0,114,194,0.1)));
          }
          75% {
            transform: translate(-47%, -52%) scale(1.01) rotate(0.5deg);
            filter: drop-shadow(0 25px 60px var(--float-water-shadow-2, rgba(0,114,194,0.15)));
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            filter: drop-shadow(0 10px 30px var(--float-water-shadow-1, rgba(0,114,194,0.1)));
          }
        }
        .animate-float-water {
          animation: float-water 8s ease-in-out infinite;
          transform-origin: center center;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float-water {
            animation-duration: 0.01ms;
            animation-iteration-count: 1;
          }
        }
      `}</style>
    </div>
  );
}
