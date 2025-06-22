import Link from 'next/link';

const CTA = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Take Charge of Your Health?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Schedule an appointment today and experience personalized, compassionate healthcare from a physician who truly cares about your well-being.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#appointment"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition duration-150 ease-in-out"
            >
              Book an Appointment
            </Link>
            <Link
              href="tel:+16175551234"
              className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg shadow-sm transition duration-150 ease-in-out flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: (617) 555-1234
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA;
