export default function Barriers() {
  const items = [
    "Make AI benefits tangible in governance models",
    "Balance efficiency with inclusion in service delivery",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {items.map((text, index) => (
          <div
            key={index}
            className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition hover:scale-105"
          >
            <h3 className="text-4xl font-bold text-white mb-4">
              0{index + 1}
            </h3>
            <p className="text-gray-400 text-lg">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
