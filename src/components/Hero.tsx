import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Scale, ShieldCheck } from "lucide-react";

interface HeroProps {
  onBookConsultation: () => void;
  onScrollDown: () => void;
}

const backgroundImages = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1920&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=1920&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1920&auto=format&fit=crop&q=80",
];

export default function Hero({ onBookConsultation, onScrollDown }: HeroProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % backgroundImages.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleImageError = (index: number) => {
    console.warn("Image failed to load:", index);
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="hero-shell relative min-h-screen pt-28 text-white">
      <div className="absolute inset-0 overflow-hidden z-0">
        {backgroundImages.map((image, index) => (
          <img
            key={image}
            src={failedImages[index] ? backgroundImages[0] : image}
            alt=""
            onError={() => handleImageError(index)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === activeImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,_rgba(184,146,79,0.22),transparent_35%),linear-gradient(135deg,rgba(17,17,17,0.75)_0%,rgba(27,27,27,0.65)_35%,rgba(15,15,15,0.8)_100%)]" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_40%,rgba(184,146,79,0.08))]" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 pb-20 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:pt-14">
          <div>
            <span className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9c29c]/40 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f1e4c8]">
              <ShieldCheck className="h-4 w-4 text-[#d9c29c]" />
              Legal counsel for complex disputes
            </span>

            <h1 className="hero-title text-5xl leading-[0.9] sm:text-6xl md:text-7xl lg:text-[7rem]">
              <span className="block">Singhal</span>
              <span className="block text-[#d9c29c]">&amp; Associates</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-[#e8e8e8] sm:text-lg md:text-xl">
              High Court &amp; Supreme Court of India • Strategic advocacy
              rooted in integrity, precision, and results-driven representation.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onBookConsultation}
                className="btn-primary cursor-pointer"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onScrollDown}
                className="btn-secondary cursor-pointer"
              >
                Explore Practice
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-[#d9d9d9]">
              <div className="metric-badge">
                <span className="block font-playfair text-3xl text-[#f0d7a5]">
                  15+
                </span>
                Years of experience
              </div>
              <div className="metric-badge">
                <span className="block font-playfair text-3xl text-[#f0d7a5]">
                  500+
                </span>
                Matters handled
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="info-panel relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-5 backdrop-blur-md">
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#b8924f]/25 blur-3xl" />
              <div className="relative flex items-center gap-4 border-b border-white/10 pb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d9c29c]/15 text-[#f0d7a5]">
                  <Scale className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d9c29c]">
                    Advocate
                  </p>
                  <p className="font-playfair text-3xl leading-none text-white">
                    Deepanshu Singhal
                  </p>
                </div>
              </div>

              <div className="relative mt-5 space-y-4 text-sm text-[#ebebeb]">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  <span>Practice focus</span>
                  <span className="text-[#f0d7a5]"> Labour • Industrial</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  <span>Court expertise</span>
                  <span className="text-[#f0d7a5]">Delhi Courts</span>
                </div>
                <div className="rounded-2xl border border-[#d9c29c]/30 bg-[#d9c29c]/10 p-4 text-[#f4e5c4]">
                  “Clear legal strategy, disciplined advocacy, and client-first
                  counsel.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer rounded-full border border-white/20 bg-white/5 p-2 backdrop-blur-sm"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-7 w-7 text-white" />
      </button>
    </section>
  );
}
