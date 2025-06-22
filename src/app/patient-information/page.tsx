import { FileText, Clock, CreditCard, ClipboardList, Download } from 'lucide-react';
import Link from 'next/link';

export default function PatientInformationPage() {
  const forms = [
    { name: 'New Patient Registration', href: '#' },
    { name: 'Medical History Form', href: '#' },
    { name: 'HIPAA Authorization', href: '#' },
    { name: 'Consent for Treatment', href: '#' },
  ];

  const insurances = [
    'Aetna',
    'Blue Cross Blue Shield',
    'Cigna',
    'UnitedHealthcare',
    'Medicare',
    'Medicaid',
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Patient Information</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know before your visit to our clinic.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* First Visit Information */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <div className="flex items-center gap-x-4">
                <div className="rounded-full bg-blue-600 p-2">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Your First Visit</h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-700">
                  We want your first visit to be as smooth as possible. Please arrive 15 minutes early to complete any remaining paperwork.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">What to bring:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Photo ID</li>
                    <li>Insurance card</li>
                    <li>List of current medications</li>
                    <li>Medical records (if transferring from another provider)</li>
                    <li>Completed new patient forms</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Insurance & Billing */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <div className="flex items-center gap-x-4">
                <div className="rounded-full bg-blue-600 p-2">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Insurance & Billing</h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-700">
                  We accept most major insurance plans. Please contact your insurance provider to confirm coverage.
                </p>
                <div>
                  <h4 className="font-medium text-gray-900">Accepted Insurance:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {insurances.map((insurance) => (
                      <span key={insurance} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {insurance}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  *Please verify with your insurance provider as participation may vary by provider.
                </p>
              </div>
            </div>

            {/* Patient Forms */}
            <div className="rounded-2xl bg-gray-50 p-8 lg:col-span-2">
              <div className="flex items-center gap-x-4">
                <div className="rounded-full bg-blue-600 p-2">
                  <ClipboardList className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Patient Forms</h3>
              </div>
              <div className="mt-6">
                <p className="text-gray-700">
                  Download and complete these forms before your appointment to save time:
                </p>
                <ul role="list" className="mt-4 divide-y divide-gray-200 border-t border-gray-200">
                  {forms.map((form) => (
                    <li key={form.name} className="flex items-center justify-between py-4">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <p className="ml-4 text-sm font-medium text-gray-900">{form.name}</p>
                      </div>
                      <a
                        href={form.href}
                        className="ml-6 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex items-center"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Appointment Information */}
            <div className="rounded-2xl bg-gray-50 p-8 lg:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900">Appointment Information</h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-medium text-gray-900">Office Hours</h4>
                  <dl className="mt-2 space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Monday - Friday</dt>
                      <dd className="font-medium text-gray-900">8:00 AM - 6:00 PM</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Saturday</dt>
                      <dd className="font-medium text-gray-900">9:00 AM - 2:00 PM</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Sunday</dt>
                      <dd className="font-medium text-gray-900">Closed</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">After-Hours Care</h4>
                  <p className="mt-2 text-gray-700">
                    For urgent medical issues outside of office hours, please call our after-hours service at:
                  </p>
                  <p className="mt-2 text-lg font-semibold text-blue-600">(555) 123-4567</p>
                  <p className="mt-2 text-sm text-gray-600">
                    For life-threatening emergencies, please call 911 or go to the nearest emergency room.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/appointment"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Schedule an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
