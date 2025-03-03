import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6">あなたの体質に合わせた<br />効率的なダイエットを</h2>
            <p className="text-xl mb-8 opacity-90">
              遺伝子検査で自分の体質を知り、<br />
              あなたに最適な食事と運動で<br />
              理想のカラダを手に入れましょう。
            </p>
            <button className="bg-white text-green-600 hover:bg-green-100 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg shadow-lg flex items-center">
              遺伝子検査付きコースを申し込む
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="理想の体型を手に入れた女性" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
