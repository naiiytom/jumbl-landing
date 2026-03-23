export default function DataProtection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-piled-charcoal mb-8 border-b pb-4">Data Protection</h1>
      <p className="text-gray-500 mb-12">Last updated: March 2026</p>
      <div className="prose prose-stone max-w-none text-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Legal Basis For Processing</h2>
          <p className="mb-4">
            In compliance with domestic and international data regulations (such as GDPR and PDPA), we rely on your consent to process personal data, notably your Firebase Auth credentials and user-generated data.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Data Retention & Deletion</h2>
          <p className="mb-4">
            We retain your aggregated reading sessions and library configuration as long as your account remains active. Through our built-in configuration, you retain the full right to invoke complete account deletion ("hardened security flow"), which entirely wipes your Firestore documents (`/users/{"{uid}"}`) immediately.
          </p>
        </section>
      </div>
    </div>
  );
}
