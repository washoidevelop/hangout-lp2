import React from 'react';

const Empathy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="女性が鏡を見て笑顔" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">理想の自分になると、<br />毎日が楽しくなる</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              もう自分に自信が持てない日々とはさよなら。<br />
              好きな服を自信を持って着こなし、<br />
              鏡を見るたびに笑顔になれる自分に変わりませんか？
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empathy;