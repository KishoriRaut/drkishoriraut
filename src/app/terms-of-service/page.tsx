import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using the website of Dr. Kishori Raut ("we," "our," or "us"), you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Medical Disclaimer</h2>
          <p className="mb-4">
            The content on this website is for informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p className="mb-4">
            No doctor-patient relationship is created by using this website or by contacting us through it. For medical emergencies, please call emergency services immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Use of Website</h2>
          <p className="mb-4">You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.</p>
          <p className="mb-4 font-semibold">Prohibited behavior includes but is not limited to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Harassing, threatening, or causing distress to other users</li>
            <li>Uploading or transmitting malicious code, viruses, or harmful components</li>
            <li>Attempting to gain unauthorized access to our systems or user accounts</li>
            <li>Using the website to send unsolicited communications (spam)</li>
            <li>Impersonating any person or entity or misrepresenting your affiliation</li>
            <li>Collecting or storing personal information about other users</li>
            <li>Interfering with or disrupting the website or servers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Accounts</h2>
          <p className="mb-4">
            Certain features of the website may require you to create an account. You are responsible for maintaining the confidentiality of your account information and password and for restricting access to your computer.
          </p>
          <p className="mb-4">
            You agree to accept responsibility for all activities that occur under your account. We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            All content on this website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Dr. Kishori Raut or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p className="mb-4">
            You may access, download, and print materials from this website for your personal and non-commercial use. Any other use, including but not limited to the reproduction, distribution, display, or transmission of the content of this site, is strictly prohibited without prior written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Privacy Policy</h2>
          <p className="mb-4">
            Your use of our website is also governed by our Privacy Policy, which is incorporated into these Terms of Service by this reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by applicable law, Dr. Kishori Raut shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The use or inability to use the website</li>
            <li>Unauthorized access to or alteration of your transmissions or data</li>
            <li>Statements or conduct of any third party on the website</li>
            <li>Any other matter relating to the website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless Dr. Kishori Raut, her practice, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable attorney's fees and costs, arising out of or in any way connected with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your access to or use of the website</li>
            <li>Your violation of these Terms of Service</li>
            <li>Your violation of any third-party right, including without limitation any intellectual property or privacy right</li>
            <li>Any claim that your content caused damage to a third party</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Links to Third-Party Websites</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites or services that are not owned or controlled by Dr. Kishori Raut. We have no control over, and assume no responsibility for, the content, <Link href="/privacy-policy" className="text-blue-600 hover:underline">privacy policies</Link>, or practices of any third-party websites or services. You further acknowledge and agree that Dr. Kishori Raut shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
          </p>
          <p className="mb-4">
            All provisions of these Terms of Service which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Governing Law</h2>
          <p className="mb-4">
            These Terms of Service shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located within [Your Country/State] for the purpose of litigating all such claims or disputes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. We will provide notice of any changes by posting the new Terms of Service on this page and updating the "Last updated" date at the top of these Terms of Service.
          </p>
          <p className="mb-4">
            Your continued use of the website after any such changes constitutes your acceptance of the new Terms of Service. If you do not agree to the new terms, you must stop using the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <address className="not-italic space-y-2">
            <div>Dr. Kishori Raut</div>
            <div>Talachhikhel, Satdobato, Lalitpur, Nepal</div>
            <div>
              <a href="tel:+97711234567" className="text-blue-600 hover:underline">+977 1-1234567</a> / 
              <a href="tel:+9779876543210" className="text-blue-600 hover:underline ml-1">+977 9876543210</a>
            </div>
            <div>
              <a href="mailto:info@drkishoriaut.com.np" className="text-blue-600 hover:underline">info@drkishoriaut.com.np</a>
            </div>
            <div>
              <a href="mailto:appointment@drkishoriaut.com.np" className="text-blue-600 hover:underline">appointment@drkishoriaut.com.np</a>
            </div>
          </address>
          <p className="text-sm text-gray-600">
            By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
