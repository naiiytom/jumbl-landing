export default function DataProtection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-jumbl-charcoal mb-8 border-b pb-4">Data Protection</h1>
      <p className="text-gray-500 mb-12">At JUMBL, we are committed to protecting your data and ensuring its integrity.</p>
      <div className="prose prose-stone max-w-none text-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Data Encryption</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>In Transit:</strong> All data transmitted between your device and our servers is encrypted using Industry-standard SSL/TLS protocols.</li>
            <li><strong>At Rest:</strong> Data stored in our database (Firebase Firestore) is encrypted at rest by Google Cloud.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Authentication</h2>
          <p>We use <strong>Firebase Auth</strong> for secure user authentication. We do not store your passwords on our servers; they are managed securely by Google.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Data Integrity</h2>
          <p>We implement a composite foreign key system (e.g., <code>isbn</code> and <code>uid</code>) to ensure data integrity and prevent cross-user data leakage.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Backup and Recovery</h2>
          <p>Firebase provides automatic backups and point-in-time recovery options, ensuring that your reading history and collections are safe even in the event of a system failure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. User Control</h2>
          <p>You have full control over your data. You can export your reading data or delete your account at any time through the Settings menu.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Vulnerability Reporting</h2>
          <p>If you discover a security vulnerability, please report it to us immediately at <a href="mailto:support@unjumbl.ing" className="text-jumbl-gold hover:underline">support@unjumbl.ing</a>.</p>
        </section>
      </div>
    </div>
  );
}
