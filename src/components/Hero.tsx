import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/70 to-blue-500/50 z-10"></div>
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">話題沸騰中！自分の体質が判明！</h1>
          <p className="text-xl md:text-2xl mb-8">遺伝子検査で現状のカラダを知って、体質に合わせた食事や運動を行うことで理想的で健康的なカラダの実現へ</p>
          <button className="bg-white text-green-600 hover:bg-green-100 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105">
            コース詳細を見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
