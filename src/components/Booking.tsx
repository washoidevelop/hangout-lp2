import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

const Booking = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">簡単3ステップで無料カウンセリングを予約</h2>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <img 
              src="https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="カウンセリングの様子" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Webフォームから予約</h3>
                  <p className="text-gray-600">
                    下記の「無料カウンセリングを予約する」ボタンをクリックし、希望日時と簡単な情報を入力するだけ。
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">カウンセリングで目標設定</h3>
                  <p className="text-gray-600">
                    女性トレーナーがあなたの目標や悩みをヒアリング。体組成測定も行い、最適なプランをご提案します。
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">トレーニングスタート</h3>
                  <p className="text-gray-600">
                    あなたに合ったプランでトレーニングを開始。専属トレーナーが理想の体へと導きます。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105">
                無料カウンセリングを予約する
              </button>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center text-gray-600">
                <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>03-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>LINEからも予約可能</span>
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