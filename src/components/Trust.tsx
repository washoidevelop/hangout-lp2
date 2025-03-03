const Trust = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="遺伝子検査キット" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">一生変化しない遺伝子で<br />あなたの体質を解析</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              私たちは、両親からほぼ同じ遺伝子を１セットずつ受け継ぎます。<br />
              この生まれ持った遺伝子の並び方によって、あなたの一生変わらない体質は決まっています。<br />
              自分の生まれ持った遺伝子を知って、自分に合った環境要因を変化させることで効率的なカラダづくりに繋がります。
            </p>
            {/* <div className="mt-8 flex flex-col sm:flex-row">
              <div className="flex items-center mb-4 sm:mb-0 sm:mr-8">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">高精度な解析</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">詳細なレポート</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
