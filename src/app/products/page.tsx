import { Footer, Navigation } from "@/components/layout";
import { NextPage } from "next";

const ProductsPage: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "১ লিটার কাঁচা দুধ",
      price: "৮০৳",
      image: "🥛",
      description: "ফার্ম ফ্রেশ, খাঁটি গরুর দুধ। কোনোরকম মিশ্রণ ছাড়াই ১০০% খাঁটি।",
      features: ["খাঁটি দুধ", "ফার্ম ফ্রেশ", "হালাল প্রক্রিয়া"],
    },
    {
      id: 2,
      name: "৫০০ মিলি কাঁচা দুধ",
      price: "৪৫৳",
      image: "🥛",
      description: "ছোট পরিবারের জন্য উপযুক্ত। একই মানের খাঁটি দুধ।",
      features: ["খাঁটি দুধ", "ফার্ম ফ্রেশ", "হালাল প্রক্রিয়া"],
    },
    {
      id: 3,
      name: "২ লিটার কাঁচা দুধ",
      price: "১৫০৳",
      image: "🥛",
      description: "বড় পরিবারের জন্য সাশ্রয়ী মূল্যে। একই মানের খাঁটি দুধ।",
      features: ["খাঁটি দুধ", "ফার্ম ফ্রেশ", "হালাল প্রক্রিয়া"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-bengali mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            আমাদের পণ্য
          </h1>
          <p className="font-bengali mx-auto max-w-3xl text-lg text-gray-700">
            সর্বোচ্চ মানের হালাল দুধের পণ্য। ফার্ম থেকে সরাসরি আপনার দরজায়।
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="mb-6 text-center">
                    <div className="mb-4 text-8xl">{product.image}</div>
                    <h3 className="font-bengali mb-2 text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <div className="font-bengali mb-4 text-4xl font-bold text-green-600">
                      {product.price}
                    </div>
                  </div>

                  <p className="font-bengali mb-6 leading-relaxed text-gray-700">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bengali mb-3 text-lg font-semibold text-gray-900">
                      বৈশিষ্ট্য:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="font-bengali flex items-center text-gray-700">
                          <span className="mr-2 text-green-600">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="font-bengali w-full rounded-lg bg-green-600 px-6 py-4 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-green-700 hover:shadow-xl">
                    অর্ডারে যোগ করুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-bengali mb-4 text-3xl font-bold text-white md:text-4xl">
            এখনই অর্ডার করুন
          </h2>
          <p className="font-bengali mx-auto mb-8 max-w-2xl text-lg text-green-100">
            খাঁটি হালাল দুধের জন্য আজই আমাদের সাথে যোগাযোগ করুন
          </p>
          <a
            href="/order"
            className="font-bengali inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-green-600 shadow-lg transition-colors duration-200 hover:bg-gray-100 hover:shadow-xl"
          >
            অর্ডার ফর্ম
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
