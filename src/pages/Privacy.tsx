export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-jumbl-charcoal mb-8 border-b pb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-12">Effective Date: March 21, 2026</p>
      <div className="prose prose-stone max-w-none text-gray-700 space-y-8">
        <section>
          <p className="mb-6 text-lg">
            Welcome to <strong>JUMBL</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our book-tracking application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">1.1 Personal Information</h3>
              <p>When you create an account, we may collect:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Your name or display name.</li>
                <li>Your email address.</li>
                <li>Your profile picture (if uploaded).</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">1.2 Book and Reading Data</h3>
              <p>We collect information about the books you track and your reading sessions, including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Book titles, authors, and ISBNs.</li>
                <li>Reading progress (page numbers, percentages).</li>
                <li>Reading session durations and timestamps.</li>
                <li>Quotes you save.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">1.3 Device Information</h3>
              <p>We may collect information about the device you use to access the app, such as device model, operating system version, and unique device identifiers.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide and maintain the app's features.</li>
            <li>Personalize your experience.</li>
            <li>Synchronize your data across devices via Firebase.</li>
            <li>Improve our services and develop new features.</li>
            <li>Communicate with you about app updates and features.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Data Storage and Security</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">3.1 Firebase</h3>
              <p>JUMBL uses Firebase (Google Cloud) for data storage, authentication, and analytics. Your data is stored securely on Google's servers.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">3.2 Local Storage</h3>
              <p>Some data may be stored locally on your device for offline access and performance optimization.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Sharing</h2>
          <p>We do not sell your personal information to third parties. We may share information with:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Service providers who assist us in operating the app (e.g., Google/Firebase).</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Access and update your personal information.</li>
            <li>Delete your account and associated data.</li>
            <li>Opt-out of certain data collection features (where applicable).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@unjumbl.ing" className="text-jumbl-gold hover:underline">support@unjumbl.ing</a>.</p>
        </section>
      </div>
    </div>
  );
}
