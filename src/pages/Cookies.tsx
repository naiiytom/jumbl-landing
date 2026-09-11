export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-jumbl-charcoal mb-8 border-b pb-4">Cookie Policy</h1>
      <p className="text-gray-500 mb-12">Last updated: March 2026</p>
      <div className="prose prose-stone max-w-none text-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Understanding Cookies</h2>
          <p className="mb-4">
            Cookies and similar technologies are small pieces of data used to store information on web browsers or mobile devices. They help provide a better, faster, and safer experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Essential Cookies</h2>
          <p className="mb-4">
            Jumbl's web operations and mobile platform use essential cookies and tokens for necessary authentication (Firebase session management). These are required for the app to function correctly and securely.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Managing Your Preferences</h2>
          <p className="mb-4">
            You can manage your cookie preferences through your browser settings or your mobile device's privacy settings.
          </p>
        </section>

        {/* Thai Translation */}
        <div className="border-t border-jumbl-divider pt-16 mt-16 font-sarabun">
          <h1 className="text-4xl md:text-5xl font-mitr font-bold text-jumbl-charcoal mb-8 border-b pb-4">นโยบายคุกกี้</h1>
          <p className="text-gray-500 mb-12">อัปเดตล่าสุด: มีนาคม 2026</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">1. ความเข้าใจเกี่ยวกับคุกกี้</h2>
              <p className="mb-4 text-jumbl-charcoal">
                คุกกี้และเทคโนโลยีที่คล้ายคลึงกัน คือข้อมูลขนาดเล็กที่ใช้เพื่อจัดเก็บข้อมูลบนเว็บเบราว์เซอร์หรืออุปกรณ์มือถือ สิ่งเหล่านี้ช่วยให้ได้รับประสบการณ์การใช้งานที่ดีขึ้น รวดเร็วขึ้น และปลอดภัยขึ้น
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">2. คุกกี้ที่จำเป็น</h2>
              <p className="mb-4 text-jumbl-charcoal">
                แพลตฟอร์มเว็บและโมบายล์ของ Jumbl ใช้คุกกี้และโทเค็นที่จำเป็นสำหรับการยืนยันตัวตน (การจัดการเซสชัน Firebase) สิ่งเหล่านี้จำเป็นเพื่อให้แอปทำงานได้อย่างถูกต้องและปลอดภัย
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">3. การจัดการความต้องการของคุณ</h2>
              <p className="mb-4 text-jumbl-charcoal">
                คุณสามารถจัดการความต้องการเกี่ยวกับคุกกี้ของคุณได้ผ่านการตั้งค่าเบราว์เซอร์หรือการตั้งค่าความเป็นส่วนตัวของอุปกรณ์มือถือของคุณ
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
