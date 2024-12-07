"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tilmeldt med email:", email);
    alert("Tak for din tilmelding!");
    setEmail("");
  };

  return (
    <section className="bg-slate-800 py-12">
      <div className="container mx-auto px-4 text-center text-white">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">Tilmeld dig vores nyhedsbrev</h3>
        <p className="mb-6">Få 15% rabat på din næste ordre, når du tilmelder dig!</p>
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Din email"
            className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-slate-900 hover:bg-slate-700 text-white font-bold rounded-md shadow-md transition"
          >
            Tilmeld
          </button>
        </form>
      </div>
    </section>
  );
}
