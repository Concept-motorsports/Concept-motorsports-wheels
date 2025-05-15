import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="text-center mb-16">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Concept Motorsports
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Custom Wheels & Tires for Imports and High-End Luxury Vehicles
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <input
            placeholder="Join our VIP list for offers"
            className="max-w-md mx-auto text-black p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Luxury Performance Wheels",
            desc: "Premium forged and cast wheels engineered for performance and style.",
          },
          {
            title: "Precision Tire Fitment",
            desc: "Top-tier tires perfectly matched for your vehicle’s needs and looks.",
          },
          {
            title: "Vehicle Customization",
            desc: "Full customization service for imports, exotics, and luxury brands.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-24 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Book a Consultation
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-xl mx-auto mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Need expert advice or a custom quote for your dream ride? Let's talk!
        </motion.p>
        <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded">
          Schedule Now
        </button>
      </section>
    </main>
  );
}

export default App;