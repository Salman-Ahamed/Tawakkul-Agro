import Link from "next/link";

export const ProductPreview = () => {
  const products = [
    {
      id: 1,
      name: "১ লিটার কাঁচা দুধ",
      price: "৮০৳",
      originalPrice: "১০০৳",
      image: "🥛",
      description: "ফার্ম ফ্রেশ, খাঁটি গরুর দুধ",
      badge: "সর্বাধিক বিক্রিত",
      rating: 5,
      reviews: 50,
      features: ["খাঁটি দুধ", "ফার্ম ফ্রেশ", "হালাল"],
    },
    {
      id: 2,
      name: "৫০০ মিলি কাঁচা দুধ",
      price: "৪৫৳",
      originalPrice: "৬০৳",
      image: "🥛",
      description: "ছোট পরিবারের জন্য উপযুক্ত",
      badge: "নতুন",
      rating: 4.8,
      reviews: 25,
      features: ["খাঁটি দুধ", "ফার্ম ফ্রেশ", "হালাল"],
    },
    {
      id: 3,
      name: "২ লিটার কাঁচা দুধ",
      price: "১৫০৳",
      originalPrice: "২০০৳",
      image: "🥛",
      description: "বড় পরিবারের জন্য সাশ্রয়ী",
      badge: "সাশ্রয়ী",
      rating: 4.9,
      reviews: 35,
      features: ["খাঁটি দুধ", "ফার্ম ফ্রেশ", "হালাল"],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="h-full w-full bg-[radial-gradient(circle_at_2px_2px,rgba(34,197,94,0.1)_1px,transparent_0)] bg-[length:30px_30px]"></div>
      </div>

      {/* Floating milk elements */}
      <div className="absolute top-10 left-10 h-6 w-6 animate-bounce rounded-full bg-green-200 opacity-20"></div>
      <div className="absolute top-32 right-16 h-4 w-4 animate-bounce rounded-full bg-green-300 opacity-25 delay-1000"></div>
      <div className="absolute bottom-32 left-16 h-5 w-5 animate-bounce rounded-full bg-green-400 opacity-30 delay-2000"></div>
      <div className="absolute right-10 bottom-10 h-3 w-3 animate-bounce rounded-full bg-green-500 opacity-20 delay-3000"></div>

      {/* Milk splash effects */}
      <div className="absolute top-20 right-20 opacity-15">
        <div className="h-8 w-8 animate-pulse rounded-full bg-green-100"></div>
        <div className="absolute top-2 left-2 h-4 w-4 animate-pulse rounded-full bg-green-200 delay-500"></div>
        <div className="absolute top-4 left-4 h-2 w-2 animate-pulse rounded-full bg-green-300 delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
            <span className="mr-2">🛍️</span>
            আমাদের পণ্য
          </div>
          <h2 className="font-bengali mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            সর্বোচ্চ মানের হালাল দুধ
          </h2>
          <p className="font-bengali mx-auto max-w-3xl text-lg text-gray-600">
            ফার্ম থেকে সরাসরি আপনার দরজায় পৌঁছে দেওয়া খাঁটি হালাল দুধের পণ্য
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Badge */}
              <div className="absolute -top-2 -right-2 z-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                {product.badge}
              </div>

              {/* Professional Product Image */}
              <div className="relative border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 text-center">
                {/* Professional milk bottle based on size */}
                <div className="relative mx-auto mb-4 flex h-48 w-32 items-center justify-center">
                  {product.id === 1 && (
                    // Professional 1 Liter bottle
                    <div className="relative h-44 w-28 rounded-t-2xl rounded-b-xl border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-2xl">
                      {/* Main bottle body */}
                      <div className="absolute inset-x-2 top-3 bottom-6 rounded-t-xl rounded-b-lg bg-gradient-to-b from-white to-slate-50">
                        {/* Professional glass highlights */}
                        <div className="absolute top-3 left-2 h-32 w-1 rounded-full bg-gradient-to-b from-white/80 via-white/40 to-transparent"></div>
                        <div className="absolute top-4 right-2 h-24 w-0.5 rounded-full bg-white/60"></div>

                        {/* Realistic milk content */}
                        <div className="absolute right-2 bottom-1 left-2 h-10 rounded-b-lg bg-gradient-to-t from-amber-100 via-white to-white/90">
                          <div className="absolute inset-x-1 top-1 h-1 rounded-full bg-amber-200/50"></div>
                          <div className="absolute inset-x-1 top-3 h-0.5 rounded-full bg-amber-100/30"></div>
                        </div>

                        {/* Professional label */}
                        <div className="absolute top-4 right-2 left-2 h-16 rounded-lg border border-slate-200 bg-white shadow-lg">
                          <div className="flex h-full flex-col items-center justify-center p-1">
                            <div className="text-center">
                              <div className="text-xs font-bold text-slate-800">তাওয়াক্কুল</div>
                              <div className="text-xs text-slate-600">এগ্রো</div>
                              <div className="mt-1 text-xs font-semibold text-green-600">
                                ১ লিটার
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Professional cap */}
                      <div className="absolute -top-2 left-1/2 h-6 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-600 to-slate-700 shadow-lg">
                        <div className="absolute top-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-slate-500"></div>
                      </div>

                      {/* Quality seal */}
                      <div className="absolute -top-1 left-1/2 h-1.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-b from-green-600 to-green-700"></div>
                    </div>
                  )}

                  {product.id === 2 && (
                    // Professional 500ml bottle
                    <div className="relative h-32 w-20 rounded-t-xl rounded-b-lg border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-xl">
                      {/* Main bottle body */}
                      <div className="absolute inset-x-1 top-2 bottom-4 rounded-t-lg rounded-b-md bg-gradient-to-b from-white to-slate-50">
                        {/* Glass highlights */}
                        <div className="absolute top-2 left-1 h-20 w-0.5 rounded-full bg-gradient-to-b from-white/80 via-white/40 to-transparent"></div>
                        <div className="absolute top-3 right-1 h-16 w-0.5 rounded-full bg-white/60"></div>

                        {/* Milk content */}
                        <div className="absolute right-1 bottom-1 left-1 h-6 rounded-b-md bg-gradient-to-t from-amber-100 via-white to-white/90">
                          <div className="absolute inset-x-0.5 top-0.5 h-0.5 rounded-full bg-amber-200/50"></div>
                        </div>

                        {/* Label */}
                        <div className="absolute top-2 right-1 left-1 h-8 rounded border border-slate-200 bg-white shadow-md">
                          <div className="flex h-full items-center justify-center">
                            <div className="text-center">
                              <div className="text-xs font-bold text-slate-800">৫০০মি.লি</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Cap */}
                      <div className="absolute -top-1 left-1/2 h-4 w-5 -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-600 to-slate-700 shadow-md">
                        <div className="absolute top-0.5 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-slate-500"></div>
                      </div>
                    </div>
                  )}

                  {product.id === 3 && (
                    // Professional 2 Liter bottle
                    <div className="relative h-52 w-32 rounded-t-2xl rounded-b-xl border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-2xl">
                      {/* Main bottle body */}
                      <div className="absolute inset-x-2 top-4 bottom-8 rounded-t-xl rounded-b-lg bg-gradient-to-b from-white to-slate-50">
                        {/* Glass highlights */}
                        <div className="absolute top-4 left-2 h-36 w-1 rounded-full bg-gradient-to-b from-white/80 via-white/40 to-transparent"></div>
                        <div className="absolute top-6 right-3 h-28 w-0.5 rounded-full bg-white/60"></div>

                        {/* Milk content */}
                        <div className="absolute right-2 bottom-2 left-2 h-12 rounded-b-lg bg-gradient-to-t from-amber-100 via-white to-white/90">
                          <div className="absolute inset-x-1 top-1 h-1 rounded-full bg-amber-200/50"></div>
                          <div className="absolute inset-x-1 top-3 h-0.5 rounded-full bg-amber-100/30"></div>
                        </div>

                        {/* Professional label */}
                        <div className="absolute top-6 right-2 left-2 h-20 rounded-lg border border-slate-200 bg-white shadow-lg">
                          <div className="flex h-full flex-col items-center justify-center p-2">
                            <div className="text-center">
                              <div className="text-xs font-bold text-slate-800">তাওয়াক্কুল</div>
                              <div className="text-xs text-slate-600">এগ্রো</div>
                              <div className="mt-1 text-xs font-semibold text-green-600">
                                ২ লিটার
                              </div>
                              <div className="mt-1 text-xs text-slate-500">বড় পরিবার</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Professional cap */}
                      <div className="absolute -top-3 left-1/2 h-8 w-10 -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-600 to-slate-700 shadow-lg">
                        <div className="absolute top-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-slate-500"></div>
                        <div className="absolute top-2 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-slate-400"></div>
                      </div>

                      {/* Quality seal */}
                      <div className="absolute -top-1 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-green-600 to-green-700">
                        <div className="absolute top-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-green-500"></div>
                      </div>

                      {/* Professional handle */}
                      <div className="absolute top-12 -right-1 h-8 w-2 rounded-r-full bg-gradient-to-r from-slate-300 to-slate-400 shadow-md">
                        <div className="absolute top-1 left-0.5 h-6 w-1 rounded-r-full bg-slate-200"></div>
                      </div>
                    </div>
                  )}

                  {/* Professional lighting effects */}
                  <div className="absolute inset-0 overflow-hidden rounded-t-2xl rounded-b-xl">
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                  </div>

                  {/* Professional shadow */}
                  <div className="absolute -bottom-1 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-slate-200/40 blur-sm"></div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bengali mb-2 text-xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="font-bengali mb-4 text-gray-600">{product.description}</p>

                {/* Rating */}
                <div className="mb-4 flex items-center justify-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="font-bengali text-sm text-gray-600">
                    ({product.reviews}+ রিভিউ)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-bengali text-3xl font-bold text-green-600">
                      {product.price}
                    </span>
                    <span className="font-bengali text-lg text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="font-bengali text-sm font-semibold text-green-600">
                    {Math.round(
                      ((parseInt(product.originalPrice) - parseInt(product.price)) /
                        parseInt(product.originalPrice)) *
                        100
                    )}
                    % ছাড়
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 flex flex-wrap justify-center gap-2">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Order Button */}
                <Link
                  href="/order"
                  className="group flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-green-700 hover:to-green-800 hover:shadow-xl"
                >
                  <span className="font-bengali">অর্ডার করুন</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </Link>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-green-600/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="rounded-3xl bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
            <h3 className="font-bengali mb-4 text-2xl font-bold">আরো পণ্য দেখুন</h3>
            <p className="font-bengali mb-6 text-lg opacity-90">
              আমাদের সম্পূর্ণ পণ্য ক্যাটালগ দেখুন এবং আপনার পছন্দের দুধ নির্বাচন করুন
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-green-600 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl"
            >
              <span className="font-bengali">সব পণ্য দেখুন</span>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
