import Link from 'next/link';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Medical Advice</h2>
          <p className="mb-4">
            The information provided on this website, including text, graphics, images, and other material, is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or treatment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Doctor-Patient Relationship</h2>
          <p className="mb-4">
            Use of this website does not establish a doctor-patient relationship between you and Dr. Kishori Raut or any of our healthcare providers. No doctor-patient relationship is created by:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Contacting us through this website</li>
            <li>Sending us an email or other electronic communication</li>
            <li>Using interactive features of this website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Medical Emergencies</h2>
          <p className="mb-4">
            If you think you may have a medical emergency, call your doctor or emergency services immediately. Do not rely on electronic communications or this website for assistance in case of a medical emergency.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Endorsements</h2>
          <p className="mb-4">
            References to any entity, product, service, or source of information on this website should not be considered an endorsement, either direct or implied. We do not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accuracy of Information</h2>
          <p className="mb-4">
            While we strive to provide accurate and up-to-date information, we make no warranties or representations concerning the accuracy, completeness, or usefulness of any information on this website. We are not responsible for any errors or omissions or for the results obtained from the use of this information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall Dr. Kishori Raut, her practice, or any of her associates be liable for any direct, indirect, consequential, special, exemplary, or other damages arising from the use of this website or any linked websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Disclaimer</h2>
          <p className="mb-4">
            We reserve the right to modify this disclaimer at any time. Any changes will be effective immediately upon posting on this website. Your continued use of the website after any changes constitutes your acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about this disclaimer, please contact us at:
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
        </section>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}
