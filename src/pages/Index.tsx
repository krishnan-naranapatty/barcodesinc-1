
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GuaranteeBadges from "@/components/GuaranteeBadges";
import ProductCategories from "@/components/ProductCategories";
import BestSellers from "@/components/BestSellers";
import CustomerFavorites from "@/components/CustomerFavorites";
import Testimonials from "@/components/Testimonials";
import CompanyLogos from "@/components/CompanyLogos";
import FreeTools from "@/components/FreeTools";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <GuaranteeBadges />
      <ProductCategories />
      <BestSellers />
      <CustomerFavorites />
      <Testimonials />
      <CompanyLogos />
      <FreeTools />
      <Footer />
    </div>
  );
};

export default Index;
