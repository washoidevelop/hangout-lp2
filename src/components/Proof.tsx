import React from 'react';

const Proof = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">実績多数、あなたも結果が出せます</h2>
        <p className="text-xl text-center text-gray-600 mb-16">多くの方が2ヶ月間で理想の体型を実現しています</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Before/After Case 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <div className="relative">
              <div className="flex">
                <div className="w-1/2 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="ビフォー" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-gray-800 text-white px-3 py-1 text-sm">Before</div>
                </div>
                <div className="w-1/2 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="アフター" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 text-sm">After</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Aさん (32歳)</h3>
              <p className="text-gray-700">2ヶ月で-8kg達成！</p>
              <p className="text-gray-600 mt-2">「産後太りで悩んでいましたが、無理なく続けられるプログラムのおかげで理想の体型を取り戻せました。」</p>
            </div>
          </div>

          {/* Before/After Case 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <div className="relative">
              <div className="flex">
                <div className="w-1/2 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="ビフォー" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-gray-800 text-white px-3 py-1 text-sm">Before</div>
                </div>
                <div className="w-1/2 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="アフター" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 text-sm">After</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Bさん (28歳)</h3>
              <p className="text-gray-700">2ヶ月で体脂肪率-7%達成！</p>
              <p className="text-gray-600 mt-2">「ダイエットに何度も失敗してきましたが、専門的なサポートで初めて成功しました。今では自信を持って水着も着られます。」</p>
            </div>
          </div>

          {/* Before/After Case 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <div className="relative">
              <div className="flex">
                <div className="w-1/2 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="ビフォー" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-gray-800 text-white px-3 py-1 text-sm">Before</div>
                </div>
                <div className="w-1/2 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="アフター" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 text-sm">After</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Cさん (45歳)</h3>
              <p className="text-gray-700">2ヶ月でサイズダウン成功！</p>
              <p className="text-gray-600 mt-2">「年齢とともに痩せにくくなっていましたが、年齢に合わせたプログラムで無理なく体型改善できました。」</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;