export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-jumbl-charcoal mb-8 border-b pb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-12">Effective Date: March 21, 2026</p>
      <div className="prose prose-stone max-w-none text-gray-700 space-y-8">
        <section>
          <p className="mb-6 text-lg font-medium">
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
              <h3 className="text-xl font-medium mb-2">1.3 Device and Advertising Identifiers</h3>
              <p>We may collect information about the device you use, such as model, OS version, and unique identifiers (e.g., IDFA for iOS or AAID for Android) used for advertising and analytics.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide and maintain the app's features.</li>
            <li>Personalize your experience and reading insights.</li>
            <li>Synchronize your data across devices via Firebase.</li>
            <li>Serve personalized or non-personalized advertisements via Google AdMob.</li>
            <li>Improve our services and develop new features.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Advertising and Analytics</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">3.1 Google AdMob</h3>
              <p>We use Google AdMob to serve ads in the free version of the App. Google and its partners may use cookies or mobile identifiers to serve ads based on your visits to this or other apps. Users in the EEA and UK will be presented with a consent dialog to manage their preferences.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">3.2 Firebase Analytics</h3>
              <p>We use Firebase Analytics to understand app usage and improve user experience. This data is aggregated and does not identify individual users directly.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Storage and Security</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">4.1 Firebase</h3>
              <p>JUMBL uses Firebase (Google Cloud) for data storage, authentication, and analytics. Your data is stored securely on Google's global infrastructure.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">4.2 Local Storage</h3>
              <p>Some data is stored locally on your device for offline access and performance optimization.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Sharing</h2>
          <p>We do not sell your personal information. We share data only with:</p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Google Services:</strong> Firebase (Storage/Auth) and AdMob (Advertising).</li>
            <li><strong>Legal Compliance:</strong> If required by law or to protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights (GDPR & Global)</h2>
          <p className="mb-4 text-gray-700">
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). JUMBL aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>The right to access, update or delete</strong> the information we have on you. Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section.</li>
            <li><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
            <li><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</li>
            <li><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</li>
            <li><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li>
            <li><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where JUMBL relied on your consent to process your personal information.</li>
          </ul>
          <p className="mt-4 text-gray-700 text-sm italic">
            Please note that we may ask you to verify your identity before responding to such requests. If you are in the EEA, you have the right to complain to a Data Protection Authority about our collection and use of your Personal Data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@unjumbl.ing" className="text-jumbl-gold hover:underline">support@unjumbl.ing</a>.</p>
        </section>

        {/* Thai Translation */}
        <div className="border-t border-jumbl-divider pt-16 mt-16 font-sarabun">
          <h1 className="text-4xl md:text-5xl font-mitr font-bold text-jumbl-charcoal mb-8 border-b pb-4">นโยบายความเป็นส่วนตัว</h1>
          <p className="text-gray-500 mb-12">มีผลบังคับใช้เมื่อ: 21 มีนาคม 2026</p>
          
          <div className="space-y-8">
            <section>
              <p className="mb-6 text-lg font-medium">
                ยินดีต้อนรับสู่ <strong>JUMBL</strong> ความเป็นส่วนตัวของคุณเป็นสิ่งสำคัญสำหรับเรา นโยบายความเป็นส่วนตัวนี้จะอธิบายถึงวิธีการที่เรารวบรวม ใช้ และปกป้องข้อมูลของคุณเมื่อคุณใช้แอปพลิเคชันติดตามการอ่านหนังสือของเรา
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">1. ข้อมูลที่เราเก็บรวบรวม</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-mitr font-medium mb-2 text-jumbl-charcoal">1.1 ข้อมูลส่วนบุคคล</h3>
                  <p>เมื่อคุณสร้างบัญชี เราอาจเก็บรวบรวม:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>ชื่อหรือชื่อที่แสดงของคุณ</li>
                    <li>ที่อยู่อีเมลของคุณ</li>
                    <li>รูปโปรไฟล์ของคุณ (หากมีการอัปโหลด)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-mitr font-medium mb-2 text-jumbl-charcoal">1.2 ข้อมูลหนังสือและการอ่าน</h3>
                  <p>เรารวบรวมข้อมูลเกี่ยวกับหนังสือที่คุณติดตามและเซสชันการอ่านของคุณ รวมถึง:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>ชื่อหนังสือ ชื่อผู้แต่ง และ ISBN</li>
                    <li>ความคืบหน้าการอ่าน (เลขหน้า, เปอร์เซ็นต์)</li>
                    <li>ระยะเวลาและเวลาที่เริ่ม/จบเซสชันการอ่าน</li>
                    <li>คำคมที่คุณบันทึก</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-mitr font-medium mb-2 text-jumbl-charcoal">1.3 ข้อมูลอุปกรณ์และตัวระบุโฆษณา</h3>
                  <p>เราอาจเก็บรวบรวมข้อมูลเกี่ยวกับอุปกรณ์ที่คุณใช้ เช่น รุ่นอุปกรณ์, เวอร์ชันของระบบปฏิบัติการ และตัวระบุเฉพาะ (เช่น IDFA สำหรับ iOS หรือ AAID สำหรับ Android) เพื่อใช้ในการวิเคราะห์และโฆษณา</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">2. วิธีที่เราใช้ข้อมูลของคุณ</h2>
              <p>เราใช้ข้อมูลที่รวบรวมมาเพื่อ:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>ให้บริการและดูแลรักษาฟีเจอร์ต่างๆ ของแอป</li>
                <li>ปรับแต่งประสบการณ์และข้อมูลเชิงลึกการอ่านของคุณ</li>
                <li>ซิงค์ข้อมูลของคุณระหว่างอุปกรณ์ผ่าน Firebase</li>
                <li>แสดงโฆษณาที่ปรับให้เหมาะกับคุณหรือไม่ปรับแต่งผ่าน Google AdMob</li>
                <li>ปรับปรุงบริการและพัฒนาฟีเจอร์ใหม่ๆ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">3. การโฆษณาและการวิเคราะห์</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-mitr font-medium mb-2 text-jumbl-charcoal">3.1 Google AdMob</h3>
                  <p>เราใช้ Google AdMob เพื่อแสดงโฆษณาในเวอร์ชันฟรีของแอป Google และพันธมิตรอาจใช้คุกกี้หรือตัวระบุบนมือถือเพื่อแสดงโฆษณาตามการใช้งานแอปนี้หรือแอปอื่นๆ สำหรับผู้ใช้ใน EEA และสหราชอาณาจักร จะมีการแสดงกล่องข้อความขอความยินยอมเพื่อจัดการการตั้งค่าของคุณ</p>
                </div>
                <div>
                  <h3 className="text-xl font-mitr font-medium mb-2 text-jumbl-charcoal">3.2 Firebase Analytics</h3>
                  <p>เราใช้ Firebase Analytics เพื่อทำความเข้าใจการใช้งานแอปและปรับปรุงประสบการณ์ผู้ใช้ ข้อมูลนี้เป็นข้อมูลแบบสรุปรวมและไม่ระบุตัวตนผู้ใช้แต่ละรายโดยตรง</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">4. การจัดเก็บข้อมูลและความปลอดภัย</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-mitr font-medium mb-2 text-jumbl-charcoal">4.1 Firebase</h3>
                  <p>JUMBL ใช้ Firebase (Google Cloud) สำหรับการจัดเก็บข้อมูล, การยืนยันตัวตน และการวิเคราะห์ ข้อมูลของคุณจะถูกจัดเก็บอย่างปลอดภัยบนโครงสร้างพื้นฐานระดับโลกของ Google</p>
                </div>
                <div>
                  <h3 className="text-xl font-mitr font-medium mb-2 text-jumbl-charcoal">4.2 การจัดเก็บข้อมูลในตัวเครื่อง</h3>
                  <p>ข้อมูลบางส่วนจะถูกจัดเก็บไว้ในอุปกรณ์ของคุณเพื่อให้สามารถใช้งานแบบออฟไลน์และเพิ่มประสิทธิภาพการทำงานได้</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">5. การแบ่งปันข้อมูล</h2>
              <p>เราไม่ขายข้อมูลส่วนบุคคลของคุณ เราจะแบ่งปันข้อมูลกับ:</p>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>บริการของ Google:</strong> Firebase (การจัดเก็บ/การยืนยันตัวตน) และ AdMob (การโฆษณา)</li>
                <li><strong>การปฏิบัติตามกฎหมาย:</strong> หากมีความจำเป็นตามกฎหมายหรือเพื่อปกป้องสิทธิ์ของเรา</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">6. สิทธิ์ของคุณ</h2>
              <p>คุณมีสิทธิ์ที่จะ:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>เข้าถึงและอัปเดตข้อมูลส่วนบุคคลของคุณผ่านการตั้งค่าในแอป</li>
                <li>ลบบัญชีและข้อมูลที่เกี่ยวข้องทั้งหมดอย่างถาวร</li>
                <li>จัดการการตั้งค่าความยินยอมเกี่ยวกับโฆษณา (สำหรับผู้ใช้ใน EEA/สหราชอาณาจักร)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-mitr font-semibold mb-3 text-jumbl-charcoal">7. ติดต่อเรา</h2>
              <p>หากคุณมีคำถามใดๆ เกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเราที่ <a href="mailto:support@unjumbl.ing" className="text-jumbl-gold hover:underline">support@unjumbl.ing</a></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
