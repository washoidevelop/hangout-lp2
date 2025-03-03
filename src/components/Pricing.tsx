import React from 'react';
import { CheckCircle, X } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">遺伝子検査付ダイエットコース</h2>
        <p className="text-xl text-center text-gray-600 mb-16">あなたの体質に合わせた効率的なダイエットを実現</p>
        
        <div className="max-w-3xl mx-auto">
          {/* Main Plan */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-2 border-green-400">
            <div className="bg-green-500 text-white text-center py-2">
              <span className="font-bold">2ヶ月間の集中コース</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">遺伝子検査付ダイエットコース</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-800">¥189,200</span>
                <span className="text-gray-600 ml-2">（税込）</span>
              </div>
              <p className="text-gray-600 mb-6">2ヶ月間、16回×75分、遺伝子検査キット付</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">高精度な遺伝子検査キット</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">あなたの体質に合わせた食事指導</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">効率的なトレーニングプログラム</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">詳細な遺伝子解析レポート</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">専門トレーナーによる個別指導</span>
                </li>
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                お申し込みはこちら
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-green-50 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">遺伝子検査の流れ</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-green-500">1</span>
              </div>
              <p className="text-gray-700">取扱い店舗にてお申込み</p>
            </div>
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-green-500">2</span>
              </div>
              <p className="text-gray-700">専用の綿棒で頬の粘膜を採取</p>
            </div>
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-green-500">3</span>
              </div>
              <p className="text-gray-700">返送用封筒に入れて、ポスト投函</p>
            </div>
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-green-500">4</span>
              </div>
              <p className="text-gray-700">3週間ほどで遺伝子検査の結果レポート提出</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
