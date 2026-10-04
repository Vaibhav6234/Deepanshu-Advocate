const testimonials = [
  {
    quote:
      "Advocate Singhal's expertise and dedication were instrumental in winning our complex property dispute. His attention to detail and strategic approach made all the difference.",
    author: "Rajesh Kumar",
    role: "Business Owner",
  },
  {
    quote:
      "Professional, knowledgeable, and compassionate. He handled our family matter with great sensitivity while ensuring our legal rights were fully protected.",
    author: "Priya Sharma",
    role: "Private Client",
  },
  {
    quote:
      "Outstanding representation in our corporate litigation. His deep understanding of law and clear communication gave us confidence throughout the process.",
    author: "Amit Verma",
    role: "CEO, Tech Startup",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-shell fade-in-section py-24 px-4"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="section-kicker">Client feedback</span>
          <h2 className="section-title">Trusted counsel, proven results.</h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="mb-5 text-6xl leading-none text-[#d9c29c]">“</div>
              <p className="mb-6 text-lg leading-relaxed text-[#3d3d3d]">
                {testimonial.quote}
              </p>
              <div className="border-t border-[#e5d9c9] pt-4">
                <p className="font-semibold text-[#111111]">
                  {testimonial.author}
                </p>
                <p className="text-sm uppercase tracking-[0.14em] text-[#747474]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
