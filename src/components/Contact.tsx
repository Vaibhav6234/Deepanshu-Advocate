import { useState } from "react";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Legal Inquiry from ${name}`;
    const mailtoLink = `mailto:singhal.lawoffice@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;

    alert(
      "Opening your email app to send the message. Please click 'Send' in your email client.",
    );
  };

  return (
    <section id="contact" className="fade-in-section bg-[#f6f1ea] py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="section-kicker">Get in touch</span>
          <h2 className="section-title">Schedule a consultation.</h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#e5d8c0] bg-white/80 p-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b6b6b]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b6b6b]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b6b6b]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="input-field resize-none"
                  placeholder="Briefly describe your legal matter..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#e5d8c0] bg-[#111111] p-7 text-white shadow-[0_24px_70px_rgba(17,17,17,0.18)] md:p-8">
              <h3 className="font-playfair text-4xl text-[#f3e3bd]">
                Contact Information
              </h3>
              <div className="mt-7 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9c29c]/15 text-[#f0d7a5]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d9c29c]">
                      Phone
                    </p>
                    <p className="mt-1 text-[#ebebeb]">+91 9354759261</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9c29c]/15 text-[#f0d7a5]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d9c29c]">
                      Email
                    </p>
                    <p className="mt-1 text-[#ebebeb]">
                      singhal.lawoffice@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9c29c]/15 text-[#f0d7a5]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d9c29c]">
                      Delhi High Court
                    </p>
                    <p className="mt-1 text-[#ebebeb]">
                      Chamber No. 260, Lawyer's Chamber Block 1
                      <br />
                      New Delhi - 110003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9c29c]/15 text-[#f0d7a5]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d9c29c]">
                      Tis Hazari Court
                    </p>
                    <p className="mt-1 text-[#ebebeb]">
                      K-128A, KL Sharma Block
                      <br />
                      Tis Hazari Court, Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#e5d8c0] bg-white/80 p-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2e5c3] text-[#5b4320]">
                  <Clock3 className="h-5 w-5" />
                </div>
                <h3 className="font-playfair text-3xl text-[#111111]">
                  Office Hours
                </h3>
              </div>
              <div className="mt-5 space-y-2 text-[#4b4b4b]">
                <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                <p>Saturday: By appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
