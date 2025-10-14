import React, { useState } from "react";

export default function Appointment() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Pigmentation Solutions");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // PHONE VALIDATION: exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    // DATE VALIDATION: valid date + reasonable year
    const selectedDate = new Date(date);
    const currentYear = new Date().getFullYear();
    const year = selectedDate.getFullYear();
    if (!date || isNaN(selectedDate.getTime()) || year < 1900 || year > currentYear + 2) {
      setError("Please select a valid date.");
      return;
    }

    setError("");
    // ✅ Replace this alert with your API submission logic
    alert(`Appointment submitted for ${fullName} on ${date} for ${service}!`);

    // Reset form (optional)
    setFullName("");
    setPhone("");
    setEmail("");
    setDate("");
    setService("Pigmentation Solutions");
    setMessage("");
  };

  return (
    <section id="appointment" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#b37556]">
            Book an Appointment
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Tell us your needs and we'll get back to confirm your slot.
          </p>
        </div>

        {error && (
          <div className="text-red-600 mb-4 text-center font-medium">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur rounded-xl shadow-md p-6 sm:p-8 grid grid-cols-1 gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="(+91) 98xxxxx"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Email (optional)
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#c98963] focus:border-transparent"
            >
              <option>Pigmentation Solutions</option>
              <option>Skin Tightening</option>
              <option>Hair PRP</option>
              <option>HAIR GFC</option>
              <option>Hair Regrowth Laser</option>
              <option>Korean Skin Treatment</option>
              <option>Anti-aging Solutions</option>
              <option>Deep Peelings</option>
              <option>Facials</option>
              <option>Laser Hair Removal</option>
              <option>Laser Skin Therapy</option>
              <option>Mesotherapy</option>
              <option>Microdermabrasion</option>
              <option>Eczema</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Share any details or concerns"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] focus:border-transparent"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#c98963] hover:bg-[#be7f58] text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
