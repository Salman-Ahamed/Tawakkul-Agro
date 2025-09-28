import { Footer, Navigation } from "@/components/layout";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-bengali mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            যোগাযোগ
          </h1>
          <p className="font-bengali mx-auto max-w-3xl text-lg text-gray-700">
            আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার সেবায় প্রস্তুত।
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="font-bengali mb-6 text-2xl font-bold text-gray-900">
                  আমাদের ঠিকানা
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <span className="text-green-600">📍</span>
                    </div>
                    <div>
                      <p className="font-bengali text-gray-700">
                        তাওয়াক্কুল এগ্রো
                        <br />
                        ঢাকা, বাংলাদেশ
                        <br />
                        পোস্ট কোড: ১২৩০
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="font-bengali mb-6 text-2xl font-bold text-gray-900">
                  যোগাযোগের মাধ্যম
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xl text-green-600">📞</span>
                    </div>
                    <div>
                      <h3 className="font-bengali text-lg font-semibold text-gray-900">ফোন</h3>
                      <p className="font-bengali font-semibold text-green-600">+৮৮০ ১৭০০ ০০০০০০</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xl text-green-600">💬</span>
                    </div>
                    <div>
                      <h3 className="font-bengali text-lg font-semibold text-gray-900">WhatsApp</h3>
                      <a
                        href="https://wa.me/8801700000000"
                        className="font-bengali font-semibold text-green-600 hover:underline"
                      >
                        WhatsApp এ মেসেজ করুন
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xl text-green-600">📧</span>
                    </div>
                    <div>
                      <h3 className="font-bengali text-lg font-semibold text-gray-900">ইমেইল</h3>
                      <p className="font-bengali font-semibold text-green-600">
                        info@tawakkulagro.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours & Info */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="font-bengali mb-6 text-2xl font-bold text-gray-900">
                  ব্যবসায়িক সময়
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 py-2">
                    <span className="font-bengali text-gray-700">সোমবার - শুক্রবার</span>
                    <span className="font-bengali font-semibold text-gray-900">
                      সকাল ৮টা - সন্ধ্যা ৬টা
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 py-2">
                    <span className="font-bengali text-gray-700">শনিবার</span>
                    <span className="font-bengali font-semibold text-gray-900">
                      সকাল ৮টা - দুপুর ২টা
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-bengali text-gray-700">রবিবার</span>
                    <span className="font-bengali font-semibold text-gray-900">বন্ধ</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-8">
                <h2 className="font-bengali mb-4 text-2xl font-bold text-gray-900">
                  আমাদের সম্পর্কে
                </h2>
                <p className="font-bengali mb-6 leading-relaxed text-gray-700">
                  তাওয়াক্কুল এগ্রো একটি বিশ্বস্ত কোম্পানি যারা খাঁটি হালাল দুধ সরবরাহ করে। আমরা
                  আমাদের গ্রাহকদের জন্য সর্বোচ্চ মানের সেবা নিশ্চিত করি।
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="font-bengali text-gray-700">খাঁটি দুধ</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="font-bengali text-gray-700">হালাল প্রক্রিয়া</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="font-bengali text-gray-700">ফার্ম ফ্রেশ</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="font-bengali text-gray-700">বাড়ি পৌঁছে দেওয়া</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-bengali mb-4 text-3xl font-bold text-white md:text-4xl">
            আজই অর্ডার করুন
          </h2>
          <p className="font-bengali mx-auto mb-8 max-w-2xl text-lg text-green-100">
            খাঁটি হালাল দুধের জন্য এখনই আমাদের সাথে যোগাযোগ করুন
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+8801700000000"
              className="font-bengali inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-green-600 shadow-lg transition-colors duration-200 hover:bg-gray-100 hover:shadow-xl"
            >
              ফোন করুন
            </a>
            <a
              href="https://wa.me/8801700000000"
              className="font-bengali inline-block rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-green-800 hover:shadow-xl"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
