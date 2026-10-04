import { Youtube } from "lucide-react";

export default function BeyondCourtroom() {
  return (
    <section id="youtube" className="py-24 px-4 bg-white fade-in-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Beyond the Courtroom</h2>
          <div className="w-16 h-px bg-black mx-auto mt-6 mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When not practicing law, I explore my passion for automobiles
            through detailed car reviews and owner experiences on my YouTube
            channel.
          </p>
        </div>

        <div className="bg-black text-white p-8 md:p-12 rounded-none border border-gray-900">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gray-900 flex items-center justify-center border border-gray-700">
                <Youtube color="#cc0000" className="w-24 h-24 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Automotive Reviews &amp; Experiences
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Join me on my journey through the world of automobiles. From
                in-depth reviews to real owner experiences, I share honest
                insights and perspectives on cars that matter.
              </p>
              <a
                href="https://www.youtube.com/@deepanshusinghal9126"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 font-medium hover:bg-gray-200 transition-colors"
              >
                <Youtube color="#cc0000" className="w-5 h-5" />
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
