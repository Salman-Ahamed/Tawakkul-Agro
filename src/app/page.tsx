import { FeaturesSection, HeroSection, ProductPreview } from "@/app/_components";
import { Footer, Navigation } from "@/components/layout";
import { NextPage } from "next";

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
