export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-jumbl-charcoal mb-8 border-b pb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-12">Last Updated: March 21, 2026</p>
      <div className="prose prose-stone max-w-none text-gray-700 space-y-8">
        <section>
          <p className="mb-6 text-lg">
            By using the <strong>JUMBL</strong> application ("the App"), you agree to the following Terms of Service. Please read them carefully.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using JUMBL, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you may not use the App.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Description of Service</h2>
          <p>JUMBL is a book-tracking application designed to help users manage their reading lists, track progress, and save quotes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You are responsible for all activities that occur under your account.</li>
            <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. User Content</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You retain ownership of any content you provide (e.g., book data, quotes).</li>
            <li>By using the App, you grant us a license to use, store, and display your content for the purpose of providing the service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the App for any illegal purpose.</li>
            <li>Attempt to interfere with the App's security or functionality.</li>
            <li>Reverse engineer or attempt to extract the source code of the App.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Disclaimer of Warranties</h2>
          <p>The App is provided "as is" and "as available" without any warranties, express or implied. We do not guarantee that the App will be error-free or uninterrupted.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
          <p>In no event shall JUMBL be liable for any indirect, incidental, or consequential damages arising out of your use of the App.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify users of any significant changes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@unjumbl.ing" className="text-jumbl-gold hover:underline">support@unjumbl.ing</a>.</p>
        </section>
      </div>
    </div>
  );
}
