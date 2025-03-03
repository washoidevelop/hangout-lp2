import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "トレーニング経験がなくても大丈夫ですか？",
      answer: "はい、まったく問題ありません。当ジムでは初心者の方が多く、一人ひとりのレベルに合わせたプログラムをご用意しています。専属トレーナーが基本から丁寧に指導しますので、安心してお越しください。"
    },
    {
      question: "どのくらいの期間で効果が出ますか？",
      answer: "個人差はありますが、多くの方が2ヶ月程度で目に見える変化を実感されています。週2回のトレーニングと食事管理を継続することで、より効果的に理想の体型に近づけます。"
    },
    {
      question: "食事制限は厳しいですか？",
      answer: "極端な食事制限は行いません。あなたの生活習慣や好みに合わせた、続けやすい食事プランをご提案します。無理なく健康的に痩せることを重視しているため、ストレスを感じにくいプランになっています。"
    },
    {
      question: "予約のキャンセルはできますか？",
      answer: "はい、トレーニング予定日の24時間前までであれば、キャンセル料なしでキャンセルいただけます。急な体調不良などの場合も、できるだけ早めにご連絡ください。"
    },
    {
      question: "どんな服装で行けばいいですか？",
      answer: "動きやすい服装であれば問題ありません。また、ウェアやシューズの無料レンタルも行っていますので、手ぶらでお越しいただくことも可能です。"
    },
    {
      question: "途中で解約はできますか？",
      answer: "はい、可能です。最低契約期間などの縛りはありませんので、いつでも解約いただけます。ただし、月の途中での解約の場合、日割り返金はございませんのでご了承ください。"
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
                  openIndex === index ? 'bg-pink-50' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-pink-500" />
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