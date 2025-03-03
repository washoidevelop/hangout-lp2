import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

const Booking = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">遺伝子検査で分かる8つの体質タイプ</h2>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <img 
              src="https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="遺伝子検査の様子" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {/* Type 1 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-green-700">リンゴ型・洋ナシ型</h3>
                  <p className="text-gray-600">
                    糖質や脂質の代謝が苦手なタイプ。お腹周りや下半身に脂肪がつきやすい傾向があります。
                  </p>
                </div>
              </div>
              
              {/* Type 2 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-green-700">バナナ型・いちご型</h3>
                  <p className="text-gray-600">
                    タンパク質の吸収が少なく筋肉がつきづらいタイプ。筋肉不足のぷよぷよとした体型になりやすい傾向があります。
                  </p>
                </div>
              </div>
              
              {/* Type 3 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-green-700">マスカット型</h3>
                  <p className="text-gray-600">
                    糖質、脂質、タンパク質の全てにおいてリスクがないタイプ。バランスの良い食事を心がけましょう。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105">
                遺伝子検査付きコースを申し込む
              </button>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center text-gray-600">
                <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>03-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>メールでのお問い合わせも可能</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
