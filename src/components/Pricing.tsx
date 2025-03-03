import React from 'react';
import { CheckCircle, X } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">明朗な料金設定で安心</h2>
        <p className="text-xl text-center text-gray-600 mb-16">入会金・初期費用0円、月額料金のみでご利用いただけます</p>
        
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Standard Plan */}
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex-1 max-w-md transform transition duration-300 hover:scale-105">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">スタンダードプラン</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-800">¥19,800</span>
                <span className="text-gray-600 ml-2">/月（税込）</span>
              </div>
              <p className="text-gray-600 mb-6">月4回のパーソナルトレーニング</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">完全個室での60分トレーニング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">専用アプリでのサポート</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">食事指導</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-500">ウェア・シューズ無料レンタル</span>
                </li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                無料カウンセリングを予約
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg overflow-hidden flex-1 max-w-md transform transition duration-300 hover:scale-105 border-2 border-pink-400">
            <div className="bg-pink-500 text-white text-center py-2">
              <span className="font-bold">人気プラン</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">プレミアムプラン</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-800">¥29,800</span>
                <span className="text-gray-600 ml-2">/月（税込）</span>
              </div>
              <p className="text-gray-600 mb-6">月8回のパーソナルトレーニング</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">完全個室での60分トレーニング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">専用アプリでのサポート</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">詳細な食事指導と栄養サポート</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">ウェア・シューズ無料レンタル</span>
                </li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                無料カウンセリングを予約
              </button>
            </div>
          </div>

          {/* VIP Plan */}
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex-1 max-w-md transform transition duration-300 hover:scale-105">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">VIPプラン</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-800">¥49,800</span>
                <span className="text-gray-600 ml-2">/月（税込）</span>
              </div>
              <p className="text-gray-600 mb-6">月12回のパーソナルトレーニング</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">完全個室での60分トレーニング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">24時間専用アプリでのサポート</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">管理栄養士による食事プラン作成</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">ウェア・シューズ無料レンタル</span>
                </li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                無料カウンセリングを予約
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-pink-50 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">期間限定キャンペーン</h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <p className="text-xl text-gray-700 mb-2">
                <span className="font-bold">今月末まで</span>の入会で
              </p>
              <div className="text-3xl font-bold text-pink-600">入会金 ¥20,000 → ¥0</div>
              <p className="text-gray-600 mt-2">さらに初月の月会費が50%オフ！</p>
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md">
              今すぐ予約する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;