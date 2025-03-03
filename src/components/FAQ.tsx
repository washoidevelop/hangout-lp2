import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "遺伝子検査は痛みがありますか？",
      answer: "いいえ、まったく痛みはありません。専用の綿棒で頬の内側の粘膜を軽く擦るだけの簡単な検査です。お子様でも安心して受けられます。検査時間もわずか5分程度です。"
    },
    {
      question: "遺伝子検査の結果はどのくらいで分かりますか？",
      answer: "検査キットをポストに投函していただいてから、約3週間で詳細な遺伝子解析レポートをお届けします。レポートには、あなたの体質タイプや、それに合わせた食事・運動のアドバイスが記載されています。"
    },
    {
      question: "遺伝子検査で分かることは何ですか？",
      answer: "ダイエットやボディメイクに関連する3つの遺伝子（β3AR、β2AR、UCP1）を解析し、糖質代謝、タンパク質代謝、脂質代謝に関するリスクを評価します。これにより、あなたの体質に合った効率的なダイエット方法を提案できます。"
    },
    {
      question: "コースの内容は具体的にどのようなものですか？",
      answer: "2ヶ月間で合計16回、1回75分のトレーニングと食事指導を行います。遺伝子検査の結果に基づいて、あなたの体質に最適なトレーニングメニューと食事プランをご提案します。専門トレーナーが一人ひとりに合わせた指導を行いますので、効率的に理想の体型に近づけます。"
    },
    {
      question: "体質に合わないダイエットをするとどうなりますか？",
      answer: "体質に合わないダイエット方法は効果が出にくいだけでなく、健康を害する可能性もあります。例えば、基礎代謝が高いバナナ型の人が糖質制限ダイエットをすると、低血糖になるリスクがあります。遺伝子検査で自分の体質を知ることで、効率的かつ健康的にダイエットを進めることができます。"
    },
    {
      question: "遺伝子検査の精度はどのくらいですか？",
      answer: "当社の遺伝子検査は、日本国内最大手の解析機関と連携し、限りなく100％に近い高解析精度を実現しています。五輪メダリスト、トップアスリート、モデルの活用実績も多数あり、信頼性の高い検査です。"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">不安や疑問はここで解消</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full flex justify-between items-center p-5 rounded-lg text-left font-medium focus:outline-none transition-colors duration-300 ${
                  openIndex === index ? 'bg-green-50' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="bg-white p-5 rounded-b-lg border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">他にご質問がございましたら、お気軽にお問い合わせください</p>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-300">
            お問い合わせはこちら
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
