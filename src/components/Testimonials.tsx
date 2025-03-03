import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">実際の利用者の声をご覧ください</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="利用者" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">田中さん (34歳)</h3>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              「女性専用で個室なので、人目を気にせずトレーニングできるのが良かったです。トレーナーさんも女性なので、体の悩みも相談しやすく、的確なアドバイスをもらえました。」
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="利用者" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">佐藤さん (29歳)</h3>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              「食事指導が特に良かったです。無理な食事制限ではなく、日常生活に取り入れやすい食事法を教えてもらえたので、ストレスなく続けられています。」
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="利用者" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">鈴木さん (42歳)</h3>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                  <Star size={16} fill="#FACC15" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              「年齢的に諦めていた体型改善ですが、専門的な知識を持ったトレーナーさんのおかげで、無理なく理想の体型に近づけています。専用アプリでのサポートも心強いです。」
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;