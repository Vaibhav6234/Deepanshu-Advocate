import { useState, useEffect } from 'react';
import { Scale, Gavel, FileText, Shield, BookOpen, Award, ChevronDown, Youtube, Linkedin, Mail, Phone, MapPin, Menu, X, Instagram } from 'lucide-react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Legal Inquiry from ${name}`;
    const mailtoLink = `mailto:singhal.lawoffice@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Provide feedback so the user knows it's working
    alert("Opening your email app to send the message. Please click 'Send' in your email client.");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-white text-black">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Scale className="w-8 h-8" />
              <span className="font-playfair text-xl font-bold tracking-tight">SINGHAL & ASSOCIATES </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('practice')} className="nav-link">Practice Areas</button>
              <button onClick={() => scrollToSection('youtube')} className="nav-link">Beyond the Courtroom</button>
              <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-gray-600">About</button>
              <button onClick={() => scrollToSection('practice')} className="block w-full text-left py-2 hover:text-gray-600">Practice Areas</button>
              <button onClick={() => scrollToSection('youtube')} className="block w-full text-left py-2 hover:text-gray-00">Beyond the Courtroom</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 hover:text-gray-600">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-gray-600">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold mb-6 tracking-tight leading-none flex flex-col items-center">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">SINGHAL</span>
            <span className="text-6xl sm:text-4xl md:text-5xl font-light tracking-widest my-1 ml-8 sm:ml-12 md:ml-16">&amp;</span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">ASSOCIATES</span>
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-4 tracking-wide">
            High Court & Supreme Court of India
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 tracking-widest uppercase">
            Justice. Precision. Integrity.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary  border-2 border-white "
          >
            Book a Consultation
          </button>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </section>

      <section id="about" className="py-24 px-4 bg-white fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="section-title">About</h2>
              <div className="w-16 h-px bg-black"></div>
              <p className="text-lg leading-relaxed text-gray-700">
                I am <strong>Deepanshu Singhal</strong> dedicated to providing reliable legal information and guidance through this platform. This website aims to simplify complex laws, help people understand their legal rights, and provide useful resources related to legal matters. My goal is to make legal knowledge more accessible, clear, and helpful for everyone.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Throughout my career, I have successfully handled complex cases across multiple domains, earning the trust and respect of clients from diverse backgrounds. My practice is built on the pillars of integrity, diligence, and a relentless pursuit of justice.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border border-gray-200 p-6">
                  <p className="font-playfair text-4xl font-bold mb-2">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="border border-gray-200 p-6">
                  <p className="font-playfair text-4xl font-bold mb-2">500+</p>
                  <p className="text-gray-600">Cases Handled</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                <img src="/IMG_3580.jpg" alt="Advocate Deepanshu Singhal" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-32"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-black -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="py-24 px-4 bg-black text-white fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">Practice Areas</h2>
            <div className="w-16 h-px bg-white mx-auto mt-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Gavel, title: 'Civil Law', description: 'Property disputes, contracts, torts, and civil rights matters with comprehensive legal strategy.' },
              { icon: Shield, title: 'Criminal Law', description: 'Defense and prosecution in criminal cases, bail applications, and appellate matters.' },
              { icon: FileText, title: 'Constitutional Law', description: 'Fundamental rights, writ petitions, and constitutional challenges before High Courts.' },
              { icon: BookOpen, title: 'Corporate Law', description: 'Business disputes, compliance, contracts, and commercial litigation services.' },
              { icon: Award, title: 'Labour & Industrial Law', description: 'Matrimonial disputes, custody matters, divorce, and succession planning.' },
              // { icon: Scale, title: 'Appellate Practice', description: 'Expert representation in appeals and revisions before higher courts.' }
            ].map((area, index) => (
              <div key={index} className="practice-card group">
                <area.icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-playfair text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-400 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="youtube" className="py-24 px-4 bg-white fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Beyond the Courtroom</h2>
            <div className="w-16 h-px bg-black mx-auto mt-6 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              When not practicing law, I explore my passion for automobiles through detailed car reviews and owner experiences on my YouTube channel.
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
                  Automotive Reviews & Experiences
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Join me on my journey through the world of automobiles. From in-depth reviews to real owner experiences, I share honest insights and perspectives on cars that matter.
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
      </section> */}

      <section id="testimonials" className="py-24 px-4 bg-gray-50 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Testimonials</h2>
            <div className="w-16 h-px bg-black mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Advocate Singhal's expertise and dedication were instrumental in winning our complex property dispute. His attention to detail and strategic approach made all the difference.",
                author: "Rajesh Kumar",
                role: "Business Owner"
              },
              {
                quote: "Professional, knowledgeable, and compassionate. He handled our family matter with great sensitivity while ensuring our legal rights were fully protected.",
                author: "Priya Sharma",
                role: "Private Client"
              },
              {
                quote: "Outstanding representation in our corporate litigation. His deep understanding of law and clear communication gave us confidence throughout the process.",
                author: "Amit Verma",
                role: "CEO, Tech Startup"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="text-6xl text-gray-300 font-serif leading-none mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-white fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Get in Touch</h2>
            <div className="w-16 h-px bg-black mx-auto mt-6 mb-8"></div>
            <p className="text-xl text-gray-600">
              Schedule a consultation to discuss your legal needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Name</label>
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
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Email</label>
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
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Message</label>
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
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="border border-gray-200 p-8">
                <h3 className="font-playfair text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-gray-600">+91 9354759261</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-gray-600">singhal.lawoffice@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Office Address 1</p>
                      <p className="text-gray-600">
                        Chamber No. 260<br />
                        Lawyer's Chamber Block 1, Delhi High Court<br />
                        New Delhi - 110003
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Office Address 2</p>
                      <p className="text-gray-600">
                        K-128A, KL Sharma Block<br />
                        Tis Hazari Court, Delhi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200">
                <h3 className="font-playfair text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Scale className="w-8 h-8" />
              <span className="font-playfair text-xl font-bold">Advocate Deepanshu Singhal</span>
            </div>

            <div className="flex space-x-6">
              <a href="https://www.youtube.com/@deepanshusinghal9126" target="_blank" rel="noopener noreferrer" className="social-link">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:singhal.lawoffice@gmail.com" className="social-link">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Advocate Deepanshu Singhal. All rights reserved.</p>
            <p className="mt-2">High Court of Delhi | Advocate & Legal Consultant</p>
          </div>
          <div className="mt-4 flex flex-col items-center gap-3 border-t border-gray-800 pt-6 text-center">
            <p className="text-sm text-gray-400">
              Made  by Vaibhav
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/vaibhav-kumar1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link rounded-full border border-gray-700 p-2 transition-colors duration-300 hover:border-white hover:text-white"
                aria-label="Vaibhav on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/_.vaibhav____?igsh=MWJhdDJ5ZHN2b2c5NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-link rounded-full border border-gray-700 p-2 transition-colors duration-300 hover:border-white hover:text-white"
                aria-label="Vaibhav on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
