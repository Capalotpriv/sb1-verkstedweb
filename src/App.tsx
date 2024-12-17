import React from 'react';
import { Monitor, Code, Zap, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hjem" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            VerkstedWeb
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Kom i gang med din nettside
          </p>
          <a 
            href="#kontakt"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all inline-block"
          >
            Kom i gang
          </a>
        </div>
      </section>

      {/* Tjenester Section */}
      <section id="tjenester" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Våre Tjenester</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all">
              <Monitor className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Webdesign</h3>
              <p className="text-gray-400">
                Moderne og brukervennlige nettsider som engasjerer dine besøkende
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all">
              <Code className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Utvikling</h3>
              <p className="text-gray-400">
                Skreddersydde løsninger med fokus på ytelse og sikkerhet
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Optimalisering</h3>
              <p className="text-gray-400">
                Forbedring av hastighet og søkemotorsynlighet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Om Oss Section */}
      <section id="om-oss" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Om Oss</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6">
              VerkstedWeb er et fremtidsrettet webutviklingsbyrå som spesialiserer seg på å skape innovative digitale løsninger. Vi kombinerer kreativ design med teknisk ekspertise for å levere enestående resultater.
            </p>
            <p className="text-lg text-gray-300">
              Med fokus på kvalitet, brukervennlighet og moderne teknologi, hjelper vi bedrifter med å styrke sin digitale tilstedeværelse og nå sine mål.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Kontakt Oss</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">La oss snakke om ditt prosjekt</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>kamash02@outlook.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+47 409 91 963</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>Sarpsborg, Norge</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;