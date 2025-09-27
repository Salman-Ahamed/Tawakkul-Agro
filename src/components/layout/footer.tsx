import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                <span className="text-sm font-bold text-white">ত</span>
              </div>
              <span className="font-bengali text-xl font-bold">তাওয়াক্কুল এগ্রো</span>
            </div>
            <p className="font-bengali mb-4 text-gray-300">
              খাঁটি হালাল দুধের জন্য আপনার বিশ্বস্ত পছন্দ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bengali mb-4 text-lg font-semibold">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="font-bengali text-gray-300 transition-colors hover:text-green-400"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="font-bengali text-gray-300 transition-colors hover:text-green-400"
                >
                  পণ্য
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="font-bengali text-gray-300 transition-colors hover:text-green-400"
                >
                  অর্ডার
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-bengali text-gray-300 transition-colors hover:text-green-400"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bengali mb-4 text-lg font-semibold">যোগাযোগ</h3>
            <div className="space-y-2">
              <p className="font-bengali text-gray-300">ঢাকা, বাংলাদেশ</p>
              <p className="text-gray-300">+৮৮০ ১৭০০ ০০০০০০</p>
              <p className="text-gray-300">info@tawakkulagro.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="font-bengali text-gray-400">
            © ২০২৪ তাওয়াক্কুল এগ্রো। সকল অধিকার সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
