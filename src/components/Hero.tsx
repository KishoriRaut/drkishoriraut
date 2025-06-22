import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Stethoscope, Clock3 as Clock, Award, Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  const stats = [
    { 
      icon: <Stethoscope className="h-8 w-8" />, 
      value: '15+', 
      label: 'Years Experience' 
    },
    { 
      icon: <Clock className="h-8 w-8" />, 
      value: '24/7', 
      label: 'Emergency Care' 
    },
    { 
      icon: <Award className="h-8 w-8" />, 
      value: '98%', 
      label: 'Success Rate' 
    },
    { 
      icon: <Shield className="h-8 w-8" />, 
      value: '5k+', 
      label: 'Happy Patients' 
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background with gradient and shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMEgxMDBWMTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAsMFYxMDBIMTAwVjB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        {/* Animated shine overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-y-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-shine" />
        </div>
      </div>
      
      <div className="relative z-10 w-full min-h-[60vh] sm:min-h-[75vh] pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto pt-16 sm:pt-20">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-100 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              Welcome to Our Practice
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Health, <span className="text-blue-100">Our Commitment</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-300 to-blue-100 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto relative px-4 sm:px-0">
              <span className="relative z-10">Experience personalized healthcare with Dr. Kishori Raut. We provide comprehensive medical services tailored to your unique needs in a warm and welcoming environment.</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-y-12 -rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </p>
            <div className="flex justify-center mt-4 sm:mt-6">
              <Link 
                href="#appointment" 
                className="relative overflow-hidden group btn-lg text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-full px-10 sm:px-12 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 border-0"
                style={{
                  boxShadow: '0 15px 30px -5px rgba(37, 99, 235, 0.4), 0 10px 10px -5px rgba(37, 99, 235, 0.2)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Book Appointment</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative z-10 px-4 mt-12 sm:mt-16 mb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative overflow-hidden group bg-white rounded-2xl shadow-2xl hover:shadow-2xl/50 transition-all duration-500 hover:-translate-y-2 border-0"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div className="p-6 sm:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(stat.icon, { className: 'w-8 h-8' })}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </h3>
                  <p className="text-base font-semibold text-gray-700">
                    {stat.label}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
