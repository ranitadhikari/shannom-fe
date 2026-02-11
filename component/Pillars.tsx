export default function Pillars() {
  const pillars = [
    {
      title: "Excellence in Decision Making",
      points: [
        "Data-driven problem identification",
        "Real-time adaptive SOP systems",
        "Six Sigma-level efficiency targets",
      ],
    },
    {
      title: "Scalability",
      points: [
        "Interoperable across sectors",
        "Low-cost replication models",
        "National-level deployment readiness",
      ],
    },
    {
      title: "Design for Impact",
      points: [
        "Citizen-centered architecture",
        "Rapid adoption cycles",
        "Intuitive, accessible interfaces",
      ],
    },
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {pillar.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
