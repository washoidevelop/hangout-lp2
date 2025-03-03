import { CheckCircle, Dna, Utensils, Activity } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">体質に合わせた食事と運動で効率的なダイエット</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
              <Dna className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">遺伝子検査キット</h3>
            <p className="text-gray-600">
              専用の綿棒で頬の粘膜を採取するだけの簡単検査。痛みも全くなく、わずか5分で検査完了。日本国内最大手の解析機関との連携で高精度な解析を実現します。
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
              <Utensils className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">体質別食事指導</h3>
            <p className="text-gray-600">
              あなたの遺伝子タイプに合わせた食事法をご提案。糖質OFF、タンパク質重視、低脂質など、あなたの体質に最適な食事法で効率的に理想の体型へ導きます。
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
              <Activity className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">体質別トレーニング</h3>
            <p className="text-gray-600">
              スロートレーニング、有酸素運動、ストレッチなど、あなたの遺伝子タイプに最適なトレーニング方法をご提案。効率的に脂肪燃焼や筋肉増強を実現します。
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
              <h3 className="text-2xl font-bold mb-6">2ヶ月間の充実したプログラム</h3>
              <p className="text-gray-600 mb-6">
                遺伝子検査付ダイエットコースでは、2ヶ月間で16回、1回75分の充実したトレーニングと食事指導を提供します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">遺伝子検査による体質分析</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">あなたの体質に合わせた食事プラン</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">効率的なトレーニングプログラム</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">定期的な進捗確認と計画の調整</span>
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
