export const FeaturesSection = () => {
  const features = [
    {
      icon: "🌱",
      title: "খাঁটি দুধ",
      description: "কোনো মিশ্রণ ছাড়াই ১০০% খাঁটি গরুর দুধ",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      stats: "১০০% খাঁটি",
      visual: (
        <div className="relative mx-auto mb-4 h-20 w-20">
          {/* Professional milk drop with realistic design */}
          <div className="absolute inset-0 rounded-full border border-amber-200 bg-gradient-to-b from-amber-100 via-white to-amber-50 shadow-xl">
            {/* Milk texture lines */}
            <div className="absolute top-3 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-amber-200/60"></div>
            <div className="absolute top-5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-amber-300/40"></div>
            <div className="absolute top-7 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-amber-400/30"></div>

            {/* Freshness indicator */}
            <div className="absolute top-2 right-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
            <div className="absolute top-4 right-3 h-1 w-1 animate-pulse rounded-full bg-green-500 delay-100"></div>
          </div>

          {/* Professional quality badge */}
          <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-green-600 to-green-700 shadow-lg">
            <span className="text-sm font-bold text-white">100%</span>
          </div>

          {/* Purity certification */}
          <div className="absolute -bottom-1 left-1/2 flex h-4 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-green-600 shadow-md">
            <span className="text-xs font-bold text-white">PURE</span>
          </div>
        </div>
      ),
    },
    {
      icon: "🏡",
      title: "ফার্ম ফ্রেশ",
      description: "সরাসরি খামার থেকে আপনার দরজায় পৌঁছে দেওয়া",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      stats: "২৪ ঘণ্টার মধ্যে",
      visual: (
        <div className="relative mx-auto mb-4 h-16 w-16">
          {/* Farm house with fresh milk */}
          <div className="absolute bottom-0 left-1/2 h-8 w-10 -translate-x-1/2 rounded-t-lg bg-gradient-to-b from-blue-200 to-blue-300 shadow-md">
            <div className="absolute top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400"></div>
            <div className="absolute top-1 right-1 left-1 h-1 rounded-sm bg-blue-500"></div>
          </div>
          {/* Fresh milk bottle */}
          <div className="absolute -top-2 right-1 h-6 w-3 rounded-t-lg rounded-b-sm bg-gradient-to-b from-white to-green-100 shadow-sm">
            <div className="absolute top-0.5 left-0.5 h-0.5 w-2 rounded-full bg-green-400"></div>
          </div>
          {/* Delivery truck */}
          <div className="absolute -bottom-1 -left-2 h-3 w-4 animate-bounce rounded bg-yellow-400">
            <div className="absolute -top-0.5 left-0.5 h-1 w-1 rounded-full bg-yellow-500"></div>
          </div>
        </div>
      ),
    },
    {
      icon: "☪️",
      title: "হালাল প্রক্রিয়া",
      description: "ইসলামিক নিয়ম অনুসারে সম্পূর্ণ হালাল প্রক্রিয়ায় উৎপাদিত",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      stats: "সম্পূর্ণ হালাল",
      visual: (
        <div className="relative mx-auto mb-4 h-16 w-16">
          {/* Crescent moon and star */}
          <div className="absolute top-2 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border-4 border-emerald-400">
            <div className="absolute top-1 left-1 h-6 w-6 rounded-full bg-emerald-50"></div>
          </div>
          <div className="absolute top-1 right-2 h-2 w-2 rounded-full bg-yellow-400 shadow-sm">
            <div className="absolute top-0.5 left-0.5 h-1 w-1 rounded-full bg-yellow-300"></div>
          </div>
          {/* Halal certification badge */}
          <div className="absolute -bottom-1 left-1/2 flex h-4 w-8 -translate-x-1/2 items-center justify-center rounded bg-emerald-600">
            <span className="text-xs font-bold text-white">হালাল</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative bg-white py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
            <span className="mr-2">✨</span>
            আমাদের বিশেষত্ব
          </div>
          <h2 className="font-bengali mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            কেন তাওয়াক্কুল এগ্রো?
          </h2>
          <p className="font-bengali mx-auto max-w-3xl text-lg text-gray-600">
            আমরা আমাদের গ্রাহকদের জন্য সর্বোচ্চ মানের হালাল দুধ নিশ্চিত করি
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              ></div>

              {/* Visual element */}
              <div className="mb-6">{feature.visual}</div>

              {/* Icon container */}
              <div
                className={`relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-bengali mb-4 text-xl font-bold text-gray-900 group-hover:text-gray-800">
                  {feature.title}
                </h3>
                <p className="font-bengali mb-4 leading-relaxed text-gray-700 group-hover:text-gray-600">
                  {feature.description}
                </p>

                {/* Stats badge */}
                <div
                  className={`inline-flex items-center rounded-full bg-gradient-to-r ${feature.color} px-4 py-2 text-sm font-semibold text-white shadow-md`}
                >
                  <span className="font-bengali">{feature.stats}</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-yellow-300 opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-green-300 opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <h3 className="font-bengali mb-4 text-2xl font-bold">আমাদের প্রতিশ্রুতি</h3>
            <p className="font-bengali mb-6 text-lg opacity-90">
              প্রতিটি বোতল দুধের সাথে আমরা আমাদের গ্রাহকদের কাছে আমাদের মানের প্রতিশ্রুতি দিয়ে থাকি
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="text-left">
                  <div className="font-bengali font-semibold">মানের গ্যারান্টি</div>
                  <div className="font-bengali text-sm opacity-80">১০০% সন্তুষ্টি</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <span className="text-2xl">🚚</span>
                </div>
                <div className="text-left">
                  <div className="font-bengali font-semibold">ফ্রি ডেলিভারি</div>
                  <div className="font-bengali text-sm opacity-80">ঢাকার সব এলাকায়</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <span className="text-2xl">⏰</span>
                </div>
                <div className="text-left">
                  <div className="font-bengali font-semibold">সময়মতো ডেলিভারি</div>
                  <div className="font-bengali text-sm opacity-80">সকাল ৮টায়</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
