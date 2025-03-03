import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Bloom Fitness</h3>
            <p className="mb-4 text-sm">女性専用パーソナルジムで、あなたの理想の体型を実現します。プロのトレーナーが一人ひとりに合わせたプログラムで、無理なく続けられるダイエット・ボディメイクをサポートします。</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-pink-400" />
                <span>〒106-0032 東京都港区六本木1-1-1 ミッドタウンタワー 5F</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-pink-400" />
                <span>03-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-pink-400" />
                <span>info@bloom-fitness.jp</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-1 text-pink-400" />
                <div>
                  <p>平日: 7:00 - 22:00</p>
                  <p>土日祝: 9:00 - 20:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">ホーム</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">サービス内容</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">料金プラン</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">トレーナー紹介</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">よくある質問</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">お問い合わせ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">メールマガジン登録</h3>
            <p className="mb-4 text-sm">最新のキャンペーン情報やダイエットのコツをお届けします。</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="メールアドレス" 
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 rounded transition-colors duration-300">
                登録する
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; 2025 Bloom Fitness. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-pink-400 transition-colors duration-300">プライバシーポリシー</a>
            <a href="#" className="text-sm hover:text-pink-400 transition-colors duration-300">利用規約</a>
            <a href="#" className="text-sm hover:text-pink-400 transition-colors duration-300">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;