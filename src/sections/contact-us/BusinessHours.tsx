"use client";

export default function BusinessHours() {
  return (
    <section className="max-w-sm mx-auto py-12 px-6 bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] rounded-3xl shadow-lg text-white text-center">
      <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
      <ul className="space-y-3 text-lg">
        <li>Monday - Friday: 9:00 AM – 6:00 PM</li>
        <li>Saturday: 10:00 AM – 3:00 PM</li>
        <li>Sunday: Closed</li>
      </ul>
      <p className="mt-6 text-sm text-white/70">
        We’re here to help during these hours. Feel free to reach out anytime!
      </p>
    </section>
  );
}
