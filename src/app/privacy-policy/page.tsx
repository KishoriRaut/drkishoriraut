import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Dr. Kishori Raut ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="mb-4">
            Please read this Privacy Policy carefully. By accessing or using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We collect several types of information from and about users of our website, including:</p>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Personal Information</h3>
          <p className="mb-4">This includes information that can be used to identify you, such as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Full name, date of birth, and contact details (email, phone number, address)</li>
            <li>Demographic information (age, gender, etc.)</li>
            <li>Health information and medical history</li>
            <li>Insurance information</li>
            <li>Payment and billing information</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Non-Personal Information</h3>
          <p className="mb-4">We may also collect non-personal information about your visit to our website, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Browser type and version</li>
            <li>Pages you visit on our website</li>
            <li>Time and date of your visit</li>
            <li>Time spent on those pages</li>
            <li>Other diagnostic data</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Cookies and Tracking Technologies</h3>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Schedule and manage appointments</li>
            <li>Provide medical services and treatment</li>
            <li>Process payments and insurance claims</li>
            <li>Send appointment reminders and healthcare information</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Notify you about changes to our services</li>
            <li>Monitor the usage of our website</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Information Sharing and Disclosure</h2>
          <p className="mb-4">
            We may share your personal information in the following situations:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>With Healthcare Providers:</strong> We may share your health information with other healthcare providers involved in your treatment.</li>
            <li><strong>With Insurance Companies:</strong> We may share necessary information with your insurance provider for payment processing.</li>
            <li><strong>With Service Providers:</strong> We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used.</li>
            <li><strong>For Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
            <li><strong>For Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred.</li>
            <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
          <p className="mb-4">
            The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
          <p className="mb-4">
            However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Retention</h2>
          <p className="mb-4">
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Data Protection Rights</h2>
          <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
            <li><strong>Right to Rectification:</strong> You have the right to request correction of any information you believe is inaccurate or incomplete.</li>
            <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
          <p className="mb-4">
            To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
          <p className="mb-4">
            Our website is not intended for individuals under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> of every site you visit.
          </p>
          <p className="mb-4">
            We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to This Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>
          <p className="mb-4">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
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
            This Privacy Policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
          </p>
        </section>
      </div>
    </div>
  );
}
