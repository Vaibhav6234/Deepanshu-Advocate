export default function About() {
  return (
    <section id="about" className="section-shell fade-in-section py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="section-kicker">About the firm</span>
            <h2 className="section-title">
              Purpose-driven advocacy for modern legal challenges.
            </h2>
            <div className="gold-divider" />

            <p className="text-lg leading-relaxed text-[#3d3d3d]">
              I am{" "}
              <strong className="font-semibold text-[#111111]">
                Deepanshu Singhal
              </strong>
              , committed to making legal guidance accessible, practical, and
              transparent. This platform helps individuals, families, and
              businesses better understand their rights, legal options, and the
              steps needed to move forward with confidence.
            </p>
            <p className="text-lg leading-relaxed text-[#3d3d3d]">
              With a litigation-focused practice across civil, criminal, and
              commercial matters, I work closely with clients to build
              disciplined strategies, protect interests, and pursue meaningful
              outcomes with clarity and integrity.
            </p>

            <div className="grid grid-cols-2 gap-5 pt-4">
              <div className="rounded-[1.5rem] border border-[#e4d8c5] bg-white/80 p-6 shadow-[0_20px_50px_rgba(17,17,17,0.04)]">
                <p className="font-playfair text-5xl font-bold leading-none text-[#111111]">
                  15+
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#666666]">
                  Years
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[#e4d8c5] bg-white/80 p-6 shadow-[0_20px_50px_rgba(17,17,17,0.04)]">
                <p className="font-playfair text-5xl font-bold leading-none text-[#111111]">
                  500+
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#666666]">
                  Matters
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#e5d8c0] bg-[#f7f2eb] p-3 shadow-[0_30px_80px_rgba(17,17,17,0.10)]">
              <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                <img
                  src="/IMG_3580.jpg"
                  alt="Advocate Deepanshu Singhal"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 w-44 rounded-[1.5rem] border border-[#b8924f]/50 bg-[#f8f3ed] p-5 shadow-[0_20px_60px_rgba(17,17,17,0.08)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#866932]">
                Approach
              </p>
              <p className="mt-2 font-playfair text-3xl leading-none text-[#111111]">
                Client-first
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
