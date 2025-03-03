import React from 'react';
import { CheckCircle, Smartphone, Utensils, ShoppingBag } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">無理なく続けられる仕組みがあります</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <div className="inline-block p-4 bg-pink-100 rounded-full mb-6">
              <Utensils className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">専門的な食事指導</h3>
            <p className="text-gray-600">
              管理栄養士監修の食事プランで、無理なく健康的に体重を減らせます。あなたの生活習慣に合わせた食事アドバイスで、リバウンドしにくい体づくりをサポートします。
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <div className="inline-block p-4 bg-pink-100 rounded-full mb-6">
              <Smartphone className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">専用アプリでサポート</h3>
            <p className="text-gray-600">
              トレーニング記録や食事管理が簡単にできる専用アプリを提供。トレーナーとのコミュニケーションもアプリ上で行えるので、ジムに来ていない日もしっかりサポートします。
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <div className="inline-block p-4 bg-pink-100 rounded-full mb-6">
              <ShoppingBag className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">手ぶらで通える設備</h3>
            <p className="text-gray-600">
              ウェアやシューズの無料レンタル、シャワールーム、パウダールーム完備。仕事帰りでも手ぶらで気軽に通えるので、忙しい女性でも続けやすい環境です。
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="健康的な食事" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">あなたに合わせたカスタマイズプログラム</h3>
              <p className="text-gray-600 mb-6">
                一人ひとりの体質や目標、生活習慣に合わせたオーダーメイドのトレーニングと食事プログラムを提供します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">初回カウンセリングで詳細な体質分析</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">あなたの目標に合わせたプログラム設計</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">定期的な進捗確認と計画の調整</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">無理なく続けられるペース設定</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;