export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-800 flex justify-between items-center px-10 py-6">

        <div className="flex items-center gap-4">

          <img
            src="/images/logo.png"
            className="w-12 h-12 object-contain"
          />

          <h1 className="text-2xl font-bold text-green-400">
            EcoRVM
          </h1>

        </div>

        <div className="flex gap-6 text-gray-300">
          <a href="#home" className="hover:text-green-400 transition">Home</a>
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#features" className="hover:text-green-400 transition">Features</a>
          <a href="#team" className="hover:text-green-400 transition">Researchers</a>
          <a href="#gallery" className="hover:text-green-400 transition">Gallery</a>
          <a href="#progress" className="hover:text-green-400 transition">Progress</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-32"
      >

        <img
          src="/images/logo.jpg"
          className="w-40 h-40 object-contain mb-8"
        />

        <p className="text-green-400 uppercase tracking-[5px] mb-4">
          Sustainable Technology
        </p>

        <h1 className="text-6xl font-extrabold max-w-5xl leading-tight">
          Smart Reverse Vending Machine
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Bottle-to-Water Dispensing and Credit System
        </p>

        <p className="mt-6 max-w-3xl text-gray-400 leading-relaxed text-lg">
          An IoT-powered recycling solution that rewards users with
          purified water through PET bottle validation, facial recognition,
          and smart credit management.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="px-8 py-4 bg-green-500 rounded-2xl text-black font-bold hover:bg-green-400 transition">
            Explore Project
          </button>

          <button className="px-8 py-4 border border-gray-700 rounded-2xl hover:bg-gray-900 transition">
            View Research
          </button>

        </div>

      </section>

      {/* FEATURES */}
<section
  id="features"
  className="px-10 pb-32"
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-green-400 mb-12 text-center">
      System Features
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Facial Recognition */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300">

        <div className="text-5xl mb-6">
          🔍
        </div>

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Facial Recognition
        </h2>

        <p className="text-gray-400 leading-relaxed">
          AI-powered facial recognition for secure user authentication
          and automated account tracking.
        </p>

      </div>

      {/* Bottle Detection */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300">

        <div className="text-5xl mb-6">
          ♻️
        </div>

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          PET Bottle Detection
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Intelligent bottle validation system that identifies
          recyclable PET bottles before dispensing rewards.
        </p>

      </div>

      {/* Water Dispensing */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300">

        <div className="text-5xl mb-6">
          💧
        </div>

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Water Dispensing
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Automated clean water dispensing mechanism activated
          after successful bottle validation.
        </p>

      </div>

      {/* Credit System */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300">

        <div className="text-5xl mb-6">
          💳
        </div>

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Credit System
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Smart digital credit management system for monitoring
          earned recycling rewards and transactions.
        </p>

      </div>

      {/* IoT Monitoring */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300">

        <div className="text-5xl mb-6">
          📡
        </div>

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          IoT Monitoring
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Real-time monitoring of water level, bottle count,
          and system performance through IoT integration.
        </p>

      </div>

      {/* Sustainability */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300">

        <div className="text-5xl mb-6">
          🌱
        </div>

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Environmental Sustainability
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Encourages proper waste management and promotes
          environmental awareness through smart recycling technology.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* ABOUT */}
      <section id="about" className="px-10 pb-32">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-green-400 mb-10">
            About the Study
          </h2>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10">

            <p className="text-gray-300 leading-loose text-lg">
              The Smart Reverse Vending Machine is an IoT-powered
              sustainability system designed to encourage proper PET bottle
              disposal by rewarding users with purified drinking water.
            </p>

            <p className="text-gray-400 leading-loose text-lg mt-6">
              The system integrates facial recognition, machine learning-based
              bottle validation, smart credit management, and real-time IoT
              monitoring to provide an innovative recycling experience within
              university environments.
            </p>

            <p className="text-gray-400 leading-loose text-lg mt-6">
              This study aims to improve environmental sustainability,
              promote responsible waste management, and increase access
              to clean drinking water through intelligent automation.
            </p>

          </div>

        </div>

      </section>

      {/* RESEARCH TEAM */}
      <section id="team" className="px-10 pb-32">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-green-400 mb-12 text-center">
            Research Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

              <img
                src="/images/marianne.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-green-400"
              />

              <h3 className="text-2xl font-bold">
                Marianne Inuj E. Fajardo
              </h3>

              <p className="text-green-400 mt-2">
                Researcher
              </p>

            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

              <img
                src="/images/renz.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-green-400"
              />

              <h3 className="text-2xl font-bold">
                Renz Lei Ken M. Alderite
              </h3>

              <p className="text-green-400 mt-2">
                Researcher
              </p>

            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

              <img
                src="/images/bianca.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-green-400"
              />

              <h3 className="text-2xl font-bold">
                Bianca Isabelle S. Villaluz
              </h3>

              <p className="text-green-400 mt-2">
                Researcher
              </p>

            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

              <img
                src="/images/ana.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-green-400"
              />

              <h3 className="text-2xl font-bold">
                Ana Viatrice Lachica
              </h3>

              <p className="text-green-400 mt-2">
                Researcher
              </p>

            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

              <img
                src="/images/sean.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-green-400"
              />

              <h3 className="text-2xl font-bold">
                Sean Jabez L. Rejuso
              </h3>

              <p className="text-green-400 mt-2">
                Researcher
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-10 pb-32">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-green-400 mb-12">
            Project Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <img
              src="/images/prototype.jpg"
              className="rounded-3xl border border-gray-800 hover:scale-105 transition duration-300 h-[300px] w-full object-cover"
            />

            <img
              src="/images/testing.jpg"
              className="rounded-3xl border border-gray-800 hover:scale-105 transition duration-300 h-[300px] w-full object-cover"
            />

            <img
              src="/images/team.jpg"
              className="rounded-3xl border border-gray-800 hover:scale-105 transition duration-300 h-[300px] w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* WORK PROGRESS */}
      <section id="progress" className="px-10 pb-32">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-green-400 mb-12">
            Work Progress
          </h2>

          <div className="space-y-8">

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Prototype Development
              </h3>

              <img
                src="/images/prototype.jpg"
                className="rounded-2xl w-full h-[400px] object-cover mb-6"
              />

              <p className="text-gray-400">
                Initial development and fabrication of the Smart Reverse
                Vending Machine prototype.
              </p>

            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                System Testing
              </h3>

              <img
                src="/images/testing.jpg"
                className="rounded-2xl w-full h-[400px] object-cover mb-6"
              />

              <p className="text-gray-400">
                Testing of sensors, bottle recognition, and dispensing system.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 pb-32">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-green-400 mb-12">
            Contact Us
          </h2>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10">

            <p className="text-xl text-gray-300 mb-6">
              Smart Reverse Vending Machine Research Team
            </p>

            <div className="space-y-4 text-gray-400 text-lg">
              <p>Email: inujmarianne@gmail.com</p>
              <p>Rizal Technological University</p>
              <p>Boni Campus, Mandaluyong City</p>
              <p>College of Engineering</p>
              <p>Electronics Engineering</p>
            </div>

            <button className="mt-10 px-8 py-4 bg-green-500 rounded-2xl text-black font-bold hover:bg-green-400 transition">
              Send Message
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-10 px-10">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-green-400">
              EcoRVM
            </h2>

            <p className="text-gray-500 mt-2">
              Smart Reverse Vending Machine Research Project
            </p>
          </div>

          <p className="text-gray-600 mt-6 md:mt-0">
            Rizal Technological University • 2026
          </p>

        </div>

      </footer>

{/* SYSTEM TESTING VIDEO */}
<div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

  <h3 className="text-2xl font-bold mb-4">
    System Testing
  </h3>

  <video
    controls
    autoPlay
    muted
    loop
    className="rounded-2xl w-full h-[400px] object-cover mb-6"
  >
    <source src="/videos/testing.mp4" type="video/mp4" />
  </video>

  <p className="text-gray-400">
    Testing of sensors, bottle recognition, facial recognition,
    and water dispensing system.
  </p>

</div>

    </main>
  );
}