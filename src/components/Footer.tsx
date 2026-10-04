import { Scale, Youtube, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9c29c]/35 bg-[#d9c29c]/10 text-[#f0d7a5]">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <div className="font-playfair text-2xl leading-none">
                Advocate Deepanshu Singhal
              </div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d9c29c]">
                High Court of Delhi
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@deepanshusinghal9126"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:singhal.lawoffice@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[#2a2a2a] pt-8 text-center text-sm text-[#c7c7c7]">
          <p>
            &copy; {new Date().getFullYear()} Advocate Deepanshu Singhal. All
            rights reserved.
          </p>
          <p className="mt-2 text-[#a7a7a7]">Advocate &amp; Legal Consultant</p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 border-t border-[#2a2a2a] pt-6 text-center">
          <p className="text-sm text-[#bdbdbd]">Made by Vaibhav</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vaibhav-kumar1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Vaibhav on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/_.vaibhav____?igsh=MWJhdDJ5ZHN2b2c5NA=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Vaibhav on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
