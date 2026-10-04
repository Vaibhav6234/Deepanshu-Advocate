import { Gavel, Shield, FileText, BookOpen, Award } from "lucide-react";

const practiceAreas = [
  {
    icon: Gavel,
    title: "Civil Law",
    description:
      "Property disputes, contracts, torts, and civil rights matters with comprehensive legal strategy.",
  },
  {
    icon: Shield,
    title: "Criminal Law",
    description:
      "Defense and prosecution in criminal cases, bail applications, and appellate matters.",
  },
  {
    icon: FileText,
    title: "Constitutional Law",
    description:
      "Fundamental rights, writ petitions, and constitutional challenges before High Courts.",
  },
  {
    icon: BookOpen,
    title: "Corporate Law",
    description:
      "Business disputes, compliance, contracts, and commercial litigation services.",
  },
  {
    icon: Award,
    title: "Labour & Industrial Law",
    description:
      "Matrimonial disputes, custody matters, divorce, and succession planning.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice"
      className="fade-in-section bg-[#111111] py-24 px-4 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-[#d9c29c]/35 bg-[#1e1e1e] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9c29c]">
            Practice areas
          </span>
          <h2 className="section-title mt-5 text-white">
            Focused legal expertise, tailored to your matter.
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="practice-card group">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#d9c29c]/35 bg-[#d9c29c]/10 text-[#f0d7a5]">
                  <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-playfair text-3xl font-semibold text-white">
                  {area.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#c9c9c9]">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
