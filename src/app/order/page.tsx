"use client";

import { Footer, Navigation } from "@/components/layout";
import { NextPage } from "next";
import { useState } from "react";

const OrderPage: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert("অর্ডার সফলভাবে জমা হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-bengali mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            অর্ডার করুন
          </h1>
          <p className="font-bengali mx-auto max-w-3xl text-lg text-gray-700">
            খাঁটি হালাল দুধের জন্য আজই অর্ডার করুন। আমরা আপনার দরজায় পৌঁছে দেব।
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="font-bengali mb-2 block text-sm font-semibold text-gray-700"
                >
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="font-bengali w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="font-bengali mb-2 block text-sm font-semibold text-gray-700"
                >
                  মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  placeholder="০১৭০০ ০০০০০০"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="font-bengali mb-2 block text-sm font-semibold text-gray-700"
                >
                  সম্পূর্ণ ঠিকানা *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="font-bengali w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  placeholder="বিস্তারিত ঠিকানা লিখুন (বাড়ি নম্বর, রোড, এলাকা, শহর)"
                />
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="font-bengali mb-2 block text-sm font-semibold text-gray-700"
                >
                  অর্ডার নোট (ঐচ্ছিক)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="font-bengali w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  placeholder="বিশেষ নির্দেশনা বা অন্যান্য তথ্য"
                />
              </div>

              <div className="rounded-lg bg-green-50 p-6">
                <h3 className="font-bengali mb-4 text-lg font-semibold text-gray-900">
                  পণ্যের তালিকা
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bengali text-gray-700">১ লিটার কাঁচা দুধ</span>
                    <span className="font-bengali font-semibold text-green-600">৮০৳</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bengali text-gray-700">৫০০ মিলি কাঁচা দুধ</span>
                    <span className="font-bengali font-semibold text-green-600">৪৫৳</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bengali text-gray-700">২ লিটার কাঁচা দুধ</span>
                    <span className="font-bengali font-semibold text-green-600">১৫০৳</span>
                  </div>
                </div>
                <p className="font-bengali mt-4 text-sm text-gray-600">
                  * পণ্য নির্বাচন এবং পরিমাণ নির্ধারণের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন
                </p>
              </div>

              <button
                type="submit"
                className="font-bengali w-full rounded-lg bg-green-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-green-700 hover:shadow-xl"
              >
                অর্ডার জমা দিন
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-bengali mb-8 text-2xl font-bold text-gray-900">সরাসরি যোগাযোগ</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="font-bengali mb-2 text-lg font-semibold text-gray-900">ফোন করুন</h3>
              <p className="font-bengali text-lg font-semibold text-green-600">+৮৮০ ১৭০০ ০০০০০০</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="font-bengali mb-2 text-lg font-semibold text-gray-900">WhatsApp</h3>
              <a
                href="https://wa.me/8801700000000"
                className="font-bengali text-lg font-semibold text-green-600 hover:underline"
              >
                WhatsApp এ মেসেজ করুন
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderPage;
