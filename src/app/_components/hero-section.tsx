import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 py-2.5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 h-8 w-8 animate-bounce rounded-full bg-green-300 opacity-60"></div>
      <div className="absolute top-40 right-20 h-6 w-6 animate-bounce rounded-full bg-green-400 opacity-40 delay-1000"></div>
      <div className="absolute bottom-20 left-20 h-4 w-4 animate-bounce rounded-full bg-green-500 opacity-50 delay-2000"></div>

      {/* Farm Silhouette */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-green-200/20 to-transparent">
        <div className="absolute bottom-0 left-1/4 h-16 w-8 rounded-t-lg bg-green-300/30"></div>
        <div className="absolute bottom-0 left-1/2 h-20 w-12 -translate-x-1/2 rounded-t-lg bg-green-400/30"></div>
        <div className="absolute right-1/4 bottom-0 h-14 w-6 rounded-t-lg bg-green-300/30"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
              <span className="mr-2">🌱</span>
              প্রাকৃতিক ও হালাল
            </div>

            <h1 className="font-bengali mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              খাঁটি হালাল দুধ,
              <br />
              <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                তাওয়াক্কুলের সাথে
              </span>
            </h1>

            <p className="font-bengali mb-8 text-lg leading-relaxed text-gray-700 md:text-xl">
              ফার্ম থেকে সরাসরি আপনার দরজায় পৌঁছে দেওয়া খাঁটি হালাল দুধ। প্রাকৃতিক, পুষ্টিকর এবং
              সম্পূর্ণ হালাল প্রক্রিয়ায় উৎপাদিত।
            </p>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-bengali text-2xl font-bold text-green-600">১০০%</div>
                <div className="font-bengali text-sm text-gray-600">খাঁটি দুধ</div>
              </div>
              <div className="text-center">
                <div className="font-bengali text-2xl font-bold text-green-600">২৪ ঘণ্টা</div>
                <div className="font-bengali text-sm text-gray-600">ফ্রেশ</div>
              </div>
              <div className="text-center">
                <div className="font-bengali text-2xl font-bold text-green-600">হালাল</div>
                <div className="font-bengali text-sm text-gray-600">প্রক্রিয়া</div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/order"
                className="group font-bengali flex justify-center rounded-md bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-green-700 hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  অর্ডার করুন
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/products"
                className="font-bengali rounded-md border-2 border-green-600 px-8 py-4 text-lg font-semibold text-green-600 transition-all duration-200 hover:scale-105 hover:bg-green-600 hover:text-white"
              >
                পণ্য দেখুন
              </Link>
            </div>
          </div>

          {/* Enhanced Product Card */}
          <div className="relative">
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 h-8 w-8 animate-bounce rounded-full bg-yellow-400 opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 h-6 w-6 animate-pulse rounded-full bg-green-400 opacity-60"></div>

            <div className="relative rounded-xl bg-white p-3 shadow-2xl">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white">
                সর্বাধিক বিক্রিত
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-8 text-center">
                {/* Professional milk bottle image */}
                <div className="relative mx-auto mb-6 flex h-64 w-48 items-center justify-center">
                  {/* Professional milk bottle with realistic design */}
                  <div className="relative h-48 w-44 rounded-lg border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-2xl">
                    {/* Main bottle body with realistic proportions */}
                    <div className="absolute inset-x-2 top-4 bottom-8 rounded-t-xl rounded-b-lg">
                      {/* Glass highlights */}
                      <div className="absolute top-4 left-2 h-40 w-1 rounded-full bg-gradient-to-b from-white/80 via-white/40 to-transparent"></div>
                      <div className="absolute top-6 right-3 h-32 w-0.5 rounded-full bg-white/60"></div>

                      <div className="absolute top-12 right-2 left-2 h-24 rounded-lg border border-slate-200 bg-white shadow-lg">
                        <div className="flex h-full flex-col items-center justify-center p-2">
                          <div className="text-center">
                            <div className="text-xs font-bold text-slate-800">
                              তাওয়াক্কুল এগ্রো
                            </div>
                            <div className="text-xs text-slate-600">খাঁটি দুধ</div>
                            <div className="mt-1 text-xs font-semibold text-green-600">১ লিটার</div>
                            <div className="mt-1 flex items-center justify-center gap-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Image
                      className="absolute left-1/2 -translate-x-1/2 rounded-full"
                      src="/ml.png"
                      height={60}
                      width={60}
                      alt=""
                    />

                    {/* Quality indicators */}
                    <div className="absolute top-16 right-2 flex flex-col gap-1">
                      <div className="h-1 w-1 animate-pulse rounded-full bg-green-400"></div>
                      <div className="h-0.5 w-0.5 animate-pulse rounded-full bg-green-500 delay-100"></div>
                    </div>

                    {/* Freshness indicator */}
                    <div className="absolute top-20 left-2 h-2 w-2 rounded-full border border-green-300 bg-green-100">
                      <div className="absolute inset-0.5 animate-pulse rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  {/* Professional lighting effects */}
                  <div className="absolute inset-0 overflow-hidden rounded-t-2xl rounded-b-xl">
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>

                  {/* Subtle shadow for depth */}
                  <div className="absolute -bottom-2 left-1/2 h-2 w-32 -translate-x-1/2 rounded-full bg-slate-200/50 blur-sm"></div>
                </div>

                <h3 className="font-bengali mb-2 text-2xl font-bold text-gray-800">
                  ১ লিটার কাঁচা দুধ
                </h3>
                <div className="mb-4 flex items-center justify-center gap-2">
                  <span className="font-bengali text-3xl font-bold text-green-600">৮০৳</span>
                  <span className="text-sm text-gray-500 line-through">১০০৳</span>
                </div>
                <div className="mb-4 flex items-center justify-center gap-1">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="font-bengali text-sm text-gray-600">(৫০+ রিভিউ)</span>
                </div>
                <p className="font-bengali mb-4 text-sm text-gray-600">
                  ফার্ম ফ্রেশ • হালাল • পুষ্টিকর
                </p>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="text-green-500">✓</span>
                    ফ্রি ডেলিভারি
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-500">✓</span>
                    সকাল ৮টায়
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
