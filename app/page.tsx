"use client";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-2xl font-bold text-green-400">
            DROP
          </h1>

          <div className="flex gap-6 text-gray-300 text-sm md:text-base">
            <a href="#home" className="hover:text-green-400">Home</a>
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#team" className="hover:text-green-400">Researchers</a>
            <a href="#progress" className="hover:text-green-400">Work Progress</a>
            <a href="#gathering" className="hover:text-green-400">Data Gathering</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </div>

        </div>
      </nav>

      {/* HOME */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >

        <img
          src="/images/logo.jpg"
          className="w-40 h-40 object-contain mb-8"
        />

        <h1 className="text-7xl font-extrabold text-green-400">
          Smart Reverse
        </h1>

        <h1 className="text-7xl font-extrabold">
          Vending Machine
        </h1>

        <p className="text-gray-300 text-2xl mt-8">
          Bottle-to-Water Dispensing and Credit System
        </p>

        <p className="text-gray-500 text-lg mt-8 max-w-4xl leading-loose">
          An IoT-powered PET bottle recycling machine integrated with
          facial recognition, machine learning, and automated water
          dispensing technology for sustainable waste management.
        </p>

        <div className="flex gap-5 mt-10">

          <a
            href="#about"
            className="px-8 py-4 bg-green-500 text-black rounded-2xl font-bold hover:bg-green-400 transition"
          >
            Explore Study
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-gray-700 rounded-2xl hover:bg-gray-900 transition"
          >
            Contact
          </a>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 px-8"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-green-400 mb-14 text-center">
            About the Study
          </h2>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10">

            <p className="text-gray-300 text-lg leading-loose">
              The study focuses on the development of a Smart Reverse
              Vending Machine (RVM) that promotes proper PET bottle
              disposal through a credit-based water reward system.
            </p>

            <p className="text-gray-400 text-lg leading-loose mt-6">
              The system integrates facial recognition, machine learning,
              IoT monitoring, automated bottle validation, and water
              dispensing technologies to support sustainable waste
              management and environmental awareness.
            </p>

            <p className="text-gray-400 text-lg leading-loose mt-6">
              The project was developed using the V-Model Development
              Framework and mixed-method research design for
              comprehensive system evaluation and testing.
            </p>

          </div>

        </div>

      </section>

      {/* RESEARCHERS */}
      <section
        id="team"
        className="py-32 px-8"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-green-400 text-center mb-16">
            Research Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Marianne */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">

              <img
                src="/images/marianne.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-green-400 mb-6"
              />

              <h3 className="text-2xl font-bold">
                Marianne Inuj E. Fajardo
              </h3>

              <p className="text-green-400 mt-3">
                Electronics Engineering Student
              </p>

              <p className="text-gray-500 mt-4">
                inujmarianne@email.com
              </p>

            </div>

            {/* Renz */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">

              <img
                src="/images/renz.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-green-400 mb-6"
              />

              <h3 className="text-2xl font-bold">
                Renz Lei Ken M. Alderite
              </h3>

              <p className="text-green-400 mt-3">
                Electronics Engineering Student
              </p>

              <p className="text-gray-500 mt-4">
                lei.alderite@email.com
              </p>

            </div>

            {/* Bianca */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">

              <img
                src="/images/bianca.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-green-400 mb-6"
              />

              <h3 className="text-2xl font-bold">
                Bianca Isabelle S. Villaluz
              </h3>

              <p className="text-green-400 mt-3">
                Electronics Engineering Student
              </p>

              <p className="text-gray-500 mt-4">
                vbiancaisabelle@email.com
              </p>

            </div>

            {/* Ana */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">

              <img
                src="/images/ana.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-green-400 mb-6"
              />

              <h3 className="text-2xl font-bold">
                Ana Viatrice Lachica
              </h3>

              <p className="text-green-400 mt-3">
                Electronics Engineering Student
              </p>

              <p className="text-gray-500 mt-4">
                aviatricelachica@email.com
              </p>

            </div>

            {/* Sean */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">

              <img
                src="/images/sean.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-green-400 mb-6"
              />

              <h3 className="text-2xl font-bold">
                Sean Jabez L. Rejuso
              </h3>

              <p className="text-green-400 mt-3">
                Electronics Engineering Student
              </p>

              <p className="text-gray-500 mt-4">
                siyanjeybs@email.com
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WORK PROGRESS */}
      <section
        id="progress"
        className="py-32 px-8"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-green-400 text-center mb-20">
            Work Progress
          </h2>

          <div className="space-y-16">

            {/* Phase 1 */}
            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-10">

              <h3 className="text-4xl font-bold text-green-400 mb-6">
                Phase 1 — Research & Planning
              </h3>

              <img
                src="/images/phase1.jpg"
                className="w-full h-[400px] object-cover rounded-2xl mb-8"
              />

              <p className="text-gray-400 text-lg leading-loose">
                Conducted literature review, conceptual framework creation,
                system architecture planning, and sustainability analysis
                for the Smart Reverse Vending Machine.
              </p>

            </div>

            {/* Phase 2 */}
            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-10">

              <h3 className="text-4xl font-bold text-green-400 mb-6">
                Phase 2 — Hardware Development
              </h3>

              <img
                src="/images/phase2.jpg"
                className="w-full h-[400px] object-cover rounded-2xl mb-8"
              />

              <p className="text-gray-400 text-lg leading-loose">
                Integration of Raspberry Pi, Arduino, sensors, cameras,
                servo motors, pumps, and touchscreen modules.
              </p>

            </div>

            {/* Phase 3 */}
            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-10">

              <h3 className="text-4xl font-bold text-green-400 mb-6">
                Phase 3 — Software & Machine Learning
              </h3>

              <img
                src="/images/phase3.jpg"
                className="w-full h-[400px] object-cover rounded-2xl mb-8"
              />

              <p className="text-gray-400 text-lg leading-loose">
                Development of facial recognition system, PET bottle
                validation model, IoT monitoring dashboard, and GUI
                interface.
              </p>

            </div>

            {/* Phase 4 */}
            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-10">

              <h3 className="text-4xl font-bold text-green-400 mb-6">
                Phase 4 — System Testing & Evaluation
              </h3>

              <video
                controls
                autoPlay
                muted
                loop
                className="w-full h-[450px] object-cover rounded-2xl mb-8"
              >
                <source
                  src="/videos/testing.mp4"
                  type="video/mp4"
                />
              </video>

              <p className="text-gray-400 text-lg leading-loose">
                Performed system testing for bottle validation, facial
                recognition accuracy, credit management reliability,
                dispensing compliance, and IoT logging consistency.
              </p>

            </div>

            {/* Phase 5 */}
            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-10">

              <h3 className="text-4xl font-bold text-green-400 mb-6">
                Phase 5 — Deployment & Documentation
              </h3>

              <img
                src="/images/phase5.jpg"
                className="w-full h-[400px] object-cover rounded-2xl mb-8"
              />

              <p className="text-gray-400 text-lg leading-loose">
                Final deployment, user manual preparation, documentation,
                statistical analysis, and presentation of findings.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* DATA GATHERING */}
      <section
        id="gathering"
        className="py-32 px-8"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-green-400 text-center mb-16">
            Data Gathering Procedure
          </h2>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12">

            <div className="space-y-8 text-gray-300 text-lg leading-loose">

              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-3">
                  Step 1 — System Testing
                </h3>

                <p>
                  The developed prototype underwent repeated controlled
                  testing to measure system performance and operational
                  reliability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-3">
                  Step 2 — Performance Evaluation
                </h3>

                <p>
                  Facial recognition, PET bottle validation, credit
                  management, IoT monitoring, and water dispensing
                  accuracy were evaluated using trial-based testing.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-3">
                  Step 3 — User Evaluation
                </h3>

                <p>
                  Participants evaluated the usability, responsiveness,
                  effectiveness, and user experience of the Smart Reverse
                  Vending Machine.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-3">
                  Step 4 — Statistical Analysis
                </h3>

                <p>
                  Gathered data were analyzed using descriptive statistics,
                  mean analysis, and benchmark comparisons for system
                  validation.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-8"
      >

        <div className="max-w-4xl mx-auto">

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12 text-center">

            <h2 className="text-5xl font-bold text-green-400 mb-10">
              Contact Us
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Smart Reverse Vending Machine Research Team
            </p>

            <div className="space-y-4 text-gray-400 text-lg">

              <p>Email: inujmarianne@gmail.com</p>

              <p>Rizal Technological University</p>

              <p>College of Engineering</p>

              <p>Mandaluyong City, Philippines</p>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500">
        EcoRVM • Smart Reverse Vending Machine • 2026
      </footer>

    </main>
  );
}