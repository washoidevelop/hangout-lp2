const Proof = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">ダイエットやボディメイクに関する<br />3つの遺伝子を徹底解析</h2>
        <p className="text-xl text-center text-gray-600 mb-16">検査結果を独自のアルゴリズムで8つのタイプに分類し、あなたに最適な食事・運動をレポーティング</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 遺伝子タイプ1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <div className="bg-green-500 text-white text-center py-3">
              <h3 className="font-bold text-xl">β3AR</h3>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2 text-green-700">糖質代謝に関わる遺伝子</h4>
              <p className="text-gray-600">
                ノルアドレナリンというホルモンの受容によって生じる脂肪の分解・燃焼に関与しています。糖分を筋肉に取り込むインスリンの働きが弱く余った糖が内臓脂肪として蓄積され、ウエスト周りから太る傾向があります。
              </p>
              <div className="mt-4 bg-green-50 p-3 rounded-lg">
                <p className="text-green-800 font-medium">遺伝子に変異があると、基礎代謝で200kcal/日低くなると言われています。</p>
              </div>
            </div>
          </div>

          {/* 遺伝子タイプ2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <div className="bg-blue-500 text-white text-center py-3">
              <h3 className="font-bold text-xl">β2AR</h3>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2 text-blue-700">タンパク質に関わる遺伝子</h4>
              <p className="text-gray-600">
                アドレナリンというホルモンの受容によって生じる脂肪の分解・燃焼に関与しています。タンパク質をエネルギーとして早く消費して血や筋肉を作る前に枯渇状態になります。筋肉が落ちて不足する傾向があります。
              </p>
              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-800 font-medium">遺伝子に変異があると基礎代謝で300kcal/日高くなると言われています。</p>
              </div>
            </div>
          </div>

          {/* 遺伝子タイプ3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <div className="bg-purple-500 text-white text-center py-3">
              <h3 className="font-bold text-xl">UCP1</h3>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2 text-purple-700">脂質代謝リスクに関わる遺伝子</h4>
              <p className="text-gray-600">
                褐色脂肪細胞における熱生産に関与しています。低体温で皮下脂肪を燃焼させる効率が悪化して脂の摂取で太りやすくなります。体脂肪の蓄積やＢＭＩ増加に繋がります。
              </p>
              <div className="mt-4 bg-purple-50 p-3 rounded-lg">
                <p className="text-purple-800 font-medium">遺伝子に変異があると、基礎代謝で100kcal/日低くなると言われています。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
