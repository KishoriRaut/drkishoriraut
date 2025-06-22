'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 py-16 sm:py-20 lg:py-28">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Test Page
              </h1>
              <p className="mt-3 text-xl text-blue-100">
                This is a test page to check if Next.js is working correctly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
