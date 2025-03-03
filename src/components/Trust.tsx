import React from 'react';

const Trust = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="個室でトレーニングする女性" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">安心して通える<br />女性専用空間</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              女性専用の完全個室、女性トレーナー完備で安心。<br />
              他の人の目を気にせず、リラックスした環境で<br />
              あなただけのトレーニングに集中できます。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <div className="flex items-center mb-4 sm:mb-0 sm:mr-8">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">完全個室</span>
              </div>
              <div className="flex items-center">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">女性トレーナー</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;