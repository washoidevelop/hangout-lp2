import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">8つの体質タイプに分類</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* タイプ1 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1589217157232-464b505b197f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="リンゴ型" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-center text-green-700 mb-2">リンゴ型</h3>
            <p className="text-gray-600 text-center">
              糖質の代謝が苦手で内臓脂肪が蓄積。お腹ぽっこりタイプ。
            </p>
          </div>

          {/* タイプ2 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="洋ナシ型" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-center text-purple-700 mb-2">洋ナシ型</h3>
            <p className="text-gray-600 text-center">
              脂質の代謝が苦手で皮下脂肪が蓄積。下半身太りタイプ。
            </p>
          </div>

          {/* タイプ3 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="オレンジ型" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-center text-orange-700 mb-2">オレンジ型</h3>
            <p className="text-gray-600 text-center">
              糖質の代謝が苦手、タンパク質の吸収が少なく筋肉がつきづらいタイプ。
            </p>
          </div>

          {/* タイプ4 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="いちご型" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-center text-red-700 mb-2">いちご型</h3>
            <p className="text-gray-600 text-center">
              脂質の代謝が苦手、タンパク質の吸収が少なく筋肉がつきづらいタイプ。
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* タイプ5 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="バナナ型" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-center text-yellow-700 mb-2">バナナ型</h3>
            <p className="text-gray-600 text-center">
              糖質と脂質の代謝◎、タンパク質の吸収が少なく筋肉がつきづらいタイプ。
            </p>
          </div>

          {/* タイプ6 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="パイン型" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-center text-yellow-800 mb-2">パイン型</h3>
            <p className="text-gray-600 text-center">
              糖質と脂質の代謝が苦手、タンパク質の吸収が良く筋肉がつきやすいタイプ。
            </p>
          </div>

          {/* タイプ7 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1595743825637-cdafc8ad4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="桃型" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-center text-pink-700 mb-2">桃型</h3>
            <p className="text-gray-600 text-center">
              糖質と脂質の代謝が苦手、タンパク質の吸収が少なく筋肉がつきづらいタイプ。
            </p>
          </div>

          {/* タイプ8 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="マスカット型" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-center text-green-600 mb-2">マスカット型</h3>
            <p className="text-gray-600 text-center">
              糖質、脂質、タンパク質の全てにおいてリスクがないタイプ。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
