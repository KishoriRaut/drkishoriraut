'use client';

export default function DaisyDemo() {
  return (
    <div className="w-full">
      {/* Hero Section with Overlay */}
      <div className="hero min-h-screen relative">
        {/* Background Image with Overlay */}
        <div className="hero-overlay bg-opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1505751172876-fa15e7b073c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Healthcare" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>

        {/* Hero Content */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold sm:text-6xl lg:text-7xl">
              Transform Your Health Journey
            </h1>
            <p className="mb-8 text-xl">
              Experience personalized healthcare with our expert team. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg">Book Appointment</button>
              <button className="btn btn-outline btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="stat bg-base-100 rounded-lg p-6 shadow-sm">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="stat-title">Happy Patients</div>
              <div className="stat-value text-primary">5,000+</div>
              <div className="stat-desc">Served with care and compassion</div>
            </div>

            {/* Stat 2 */}
            <div className="stat bg-base-100 rounded-lg p-6 shadow-sm">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="stat-title">Expert Doctors</div>
              <div className="stat-value text-secondary">50+</div>
              <div className="stat-desc">Qualified healthcare professionals</div>
            </div>

            {/* Stat 3 */}
            <div className="stat bg-base-100 rounded-lg p-6 shadow-sm">
              <div className="stat-figure text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="stat-title">Medical Services</div>
              <div className="stat-value text-accent">30+</div>
              <div className="stat-desc">Comprehensive healthcare solutions</div>
            </div>

            {/* Stat 4 */}
            <div className="stat bg-base-100 rounded-lg p-6 shadow-sm">
              <div className="stat-figure text-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="stat-title">Years Experience</div>
              <div className="stat-value text-info">15+</div>
              <div className="stat-desc">Of trusted medical service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Medical Services</h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* Head */}
              <thead>
                <tr>
                  <th className="bg-base-200">
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th className="bg-base-200">Service</th>
                  <th className="bg-base-200">Department</th>
                  <th className="bg-base-200">Duration</th>
                  <th className="bg-base-200">Price</th>
                  <th className="bg-base-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="hover">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Cardiology" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Cardiology Checkup</div>
                        <div className="text-sm opacity-50">Heart Health</div>
                      </div>
                    </div>
                  </td>
                  <td>Cardiology</td>
                  <td>30 min</td>
                  <td>$150</td>
                  <td><span className="badge badge-ghost badge-sm">Available</span></td>
                </tr>
                
                {/* Row 2 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Dentistry" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Dental Cleaning</div>
                        <div className="text-sm opacity-50">Oral Health</div>
                      </div>
                    </div>
                  </td>
                  <td>Dentistry</td>
                  <td>45 min</td>
                  <td>$120</td>
                  <td><span className="badge badge-success badge-sm">Popular</span></td>
                </tr>
                
                {/* Row 3 */}
                <tr className="hover">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Optometry" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Eye Examination</div>
                        <div className="text-sm opacity-50">Optometry</div>
                      </div>
                    </div>
                  </td>
                  <td>Ophthalmology</td>
                  <td>40 min</td>
                  <td>$90</td>
                  <td><span className="badge badge-warning badge-sm">Limited</span></td>
                </tr>
              </tbody>
              {/* Foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>Department</th>
                  <th>Duration</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </tfoot>
            </table>
          </div>
          
          {/* Table Actions */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-base-content/70">
              Showing 1 to 3 of 10 entries
            </div>
            <div className="join">
              <button className="join-item btn">«</button>
              <button className="join-item btn btn-active">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn">»</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}