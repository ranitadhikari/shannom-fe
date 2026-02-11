export default function CTA() {
  return (
    <section className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581090700227-1e8f7a8c5a4b?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Transform Public Services with AI
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          From strategy to deployment. We scale AI across departments to drive
          measurable citizen impact.
        </p>

        <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
          Quick Connect
        </button>
      </div>
    </section>
  );
}
