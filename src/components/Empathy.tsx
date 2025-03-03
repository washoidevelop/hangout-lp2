import React from 'react';

const Empathy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="悩む女性" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">体型維持が難しいと<br />感じていませんか？</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              健康維持のために手作りの食事やサプリメントを利用しているけど、効果が不明瞭...<br />
              周囲と比較して自分の努力の成果を感じられず焦りを感じている...<br />
              初心者でも簡単に健康維持や体型維持を行えるトレーニングや食事の提案が欲しい...<br />
              <span className="font-bold text-green-600">そんなあなたに、遺伝子検査付きダイエットコースがおすすめです。</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empathy;
