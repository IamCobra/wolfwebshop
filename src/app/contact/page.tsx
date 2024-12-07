"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <section className="container mx-auto py-24 px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">Kontakt Os</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Har du spørgsmål, brug for hjælp, eller ønsker du at komme i kontakt med os? Udfyld formularen nedenfor, eller kontakt os via vores oplysninger.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontakt Oplysninger */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Vores Kontaktoplysninger</h3>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-500 mr-4" />
              <p className="text-gray-300">support@berzloy.dk</p>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-blue-500 mr-4" />
              <p className="text-gray-300">+45 12 34 56 78</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-500 mr-4" />
              <p className="text-gray-300">Berzloy, København, Danmark</p>
            </div>
          </div>

          {/* Kontakt Formular */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Send os en besked</h3>
            <form action="#" method="POST" className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-1">
                  Dit Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Indtast dit navn"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-1">
                  Din Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Indtast din email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-1">
                  Din Besked
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Skriv din besked her"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition"
              >
                Send Besked
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
