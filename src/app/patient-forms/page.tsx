import { Download, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const forms = [
  {
    id: 1,
    title: 'New Patient Registration Form',
    description: 'Complete this form for your first visit to our clinic.',
    fileSize: '120 KB',
    fileType: 'PDF',
    downloadLink: '/forms/new-patient-registration.pdf',
  },
  {
    id: 2,
    title: 'Medical History Form',
    description: 'Please fill out your complete medical history before your appointment.',
    fileSize: '95 KB',
    fileType: 'PDF',
    downloadLink: '/forms/medical-history.pdf',
  },
  {
    id: 3,
    title: 'Consent for Treatment',
    description: 'Required consent form for all patients receiving treatment.',
    fileSize: '85 KB',
    fileType: 'PDF',
    downloadLink: '/forms/consent-for-treatment.pdf',
  },
  {
    id: 4,
    title: 'HIPAA Privacy Notice',
    description: 'Information about how we protect your health information.',
    fileSize: '150 KB',
    fileType: 'PDF',
    downloadLink: '/forms/hipaa-privacy-notice.pdf',
  },
  {
    id: 5,
    title: 'Insurance Information Form',
    description: 'Please provide your insurance details for billing purposes.',
    fileSize: '110 KB',
    fileType: 'PDF',
    downloadLink: '/forms/insurance-information.pdf',
  },
  {
    id: 6,
    title: 'Medical Records Release Form',
    description: 'Authorize the release of your medical records to/from other providers.',
    fileSize: '100 KB',
    fileType: 'PDF',
    downloadLink: '/forms/medical-records-release.pdf',
  },
];

export default function PatientForms() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Patient Forms
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Download and complete these forms before your appointment to save time.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {forms.map((form) => (
            <div
              key={form.id}
              className="flex flex-col rounded-2xl border border-gray-200 p-6 hover:border-blue-200 hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <FileText className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {form.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{form.description}</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>{form.fileType}</span>
                    <span className="mx-2">•</span>
                    <span>{form.fileSize}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={form.downloadLink}
                  download
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Download Form
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Need help with forms?</h3>
          <p className="mt-2 text-gray-600">
            If you have any questions about the forms or need assistance, please contact our office.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
