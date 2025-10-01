import { NextPage } from "next";

import { FeaturesSection, HeroSection, ProductPreview } from "@/app/_components";

import { Footer, Navigation } from "@/components/layout";

const Home: NextPage = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <HeroSection />
    <FeaturesSection />
    <ProductPreview />
    <Footer />
  </div>
);

export default Home;
