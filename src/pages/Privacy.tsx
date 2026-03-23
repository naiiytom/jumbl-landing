export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-piled-charcoal mb-8 border-b pb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-12">Last updated: March 2026</p>
      <div className="prose prose-stone max-w-none text-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information dynamically when you register via Google or email, manage your profile, and engage in reading sessions. This includes your reading habits, session duration, quotes, bookshelf catalogs, and interaction metadata (like streak calculations).
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Use of Information</h2>
          <p className="mb-4">
            Your data is utilized solely to provide the core functionality of Piled: curating your books, projecting analytics like total pages read and heatmaps, and sending timezone-aware scheduled local notifications. We NEVER sell your data.
          </p>
        </section>
      </div>
    </div>
  );
}
