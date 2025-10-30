import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import EcoImpactCard from "@/components/EcoImpactCard";
import ProductDetailModal from "@/components/ProductDetailModal";
import { Package, Shield, TrendingUp, Users, Leaf, Recycle, Heart } from "lucide-react";

import yarnBundle1 from '@assets/generated_images/Colorful_handloom_waste_yarn_bundles_153643da.png';
import fabricScraps from '@assets/generated_images/Earth_tone_fabric_scraps_product_f9e09f53.png';
import indigoFabric from '@assets/generated_images/Indigo_striped_fabric_remnants_d478f460.png';
import redYarn from '@assets/generated_images/Red_orange_silk_yarn_bundle_003e65c7.png';
import weaverImg from '@assets/generated_images/Female_weaver_portrait_headshot_89678557.png';

//todo: remove mock functionality
const mockProducts = [
  {
    id: "1",
    image: yarnBundle1,
    title: "Colorful Cotton Yarn Bundle - Mixed Colors",
    fabricType: "Cotton",
    color: "Multi-color",
    quantity: "2.5 kg",
    price: 450,
    weaverName: "Lakshmi Devi",
    weaverImage: weaverImg,
    location: "Varanasi, UP",
    description: "High-quality cotton yarn waste in vibrant colors. Perfect for craft projects, rug making, or textile art. These yarns are leftover from our handloom weaving process.",
    verified: true,
  },
  {
    id: "2",
    image: fabricScraps,
    title: "Earth Tone Fabric Scraps - Cotton Blend",
    fabricType: "Cotton",
    color: "Beige",
    quantity: "1.8 kg",
    price: 320,
    weaverName: "Meera Bai",
    location: "Jaipur, RJ",
    description: "Natural earth tone fabric cuttings from handloom production. Ideal for patchwork, quilting, and sustainable crafts.",
    verified: false,
  },
  {
    id: "3",
    image: indigoFabric,
    title: "Indigo Striped Cotton Remnants",
    fabricType: "Cotton",
    color: "Blue",
    quantity: "3.0 kg",
    price: 580,
    weaverName: "Ramesh Kumar",
    location: "Kanchipuram, TN",
    description: "Traditional indigo-dyed cotton fabric remnants with classic stripes. Perfect for home décor and fashion accessories.",
    verified: true,
  },
  {
    id: "4",
    image: redYarn,
    title: "Red & Orange Silk Yarn Waste",
    fabricType: "Silk",
    color: "Red",
    quantity: "1.2 kg",
    price: 890,
    weaverName: "Anjali Shah",
    location: "Banaras, UP",
    description: "Premium silk yarn waste in warm red and orange tones. Excellent for embroidery and high-end craft work.",
    verified: true,
  },
  {
    id: "5",
    image: yarnBundle1,
    title: "Mixed Cotton Thread Bundle",
    fabricType: "Cotton",
    color: "Multi-color",
    quantity: "2.0 kg",
    price: 380,
    weaverName: "Savita Devi",
    location: "Chanderi, MP",
    description: "Assorted cotton threads from traditional handloom work. Great for weaving small projects and decorative items.",
    verified: false,
  },
  {
    id: "6",
    image: fabricScraps,
    title: "Natural Cotton Fabric Cuttings",
    fabricType: "Cotton",
    color: "Cream",
    quantity: "2.8 kg",
    price: 420,
    weaverName: "Priya Sharma",
    location: "Maheshwar, MP",
    description: "Undyed natural cotton fabric waste. Perfect for eco-friendly crafts and sustainable fashion projects.",
    verified: true,
  },
  {
    id: "7",
    image: indigoFabric,
    title: "Blue Cotton Handloom Scraps",
    fabricType: "Cotton",
    color: "Blue",
    quantity: "1.5 kg",
    price: 340,
    weaverName: "Sunita Rao",
    location: "Pochampally, TS",
    description: "Hand-woven blue cotton fabric remnants from traditional ikat weaving. Ideal for craft enthusiasts.",
    verified: false,
  },
  {
    id: "8",
    image: redYarn,
    title: "Warm Tone Silk Thread Mix",
    fabricType: "Silk",
    color: "Orange",
    quantity: "0.8 kg",
    price: 720,
    weaverName: "Kavita Joshi",
    location: "Bhagalpur, BR",
    description: "Fine silk threads in warm sunset colors. Premium quality for delicate embroidery and weaving.",
    verified: true,
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<typeof mockProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: typeof mockProducts[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Environmental Impact
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Together, we're building a circular economy that supports artisans and protects our planet
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <EcoImpactCard
                icon={Leaf}
                title="Waste Diverted"
                value="45,280 kg"
                description="Textile waste saved from landfills"
                trend="+12% this month"
              />
              <EcoImpactCard
                icon={Users}
                title="Weavers Supported"
                value="5,234"
                description="Artisans earning additional income"
                trend="+8% this month"
              />
              <EcoImpactCard
                icon={Package}
                title="Transactions"
                value="12,450"
                description="Successful trades completed"
                trend="+15% this month"
              />
              <EcoImpactCard
                icon={Heart}
                title="CO₂ Reduced"
                value="128 tons"
                description="Carbon emissions prevented"
                trend="+10% this month"
              />
            </div>
          </div>
        </section>

        <FilterBar />

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Featured Listings
              </h2>
              <span className="text-sm text-muted-foreground">
                {mockProducts.length} products available
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Handloom Marketplace
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A trusted platform connecting artisans with conscious consumers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={Shield}
                title="Secure Payments"
                description="Safe and encrypted payment processing to protect both buyers and sellers"
              />
              <FeatureCard
                icon={Package}
                title="Quality Assurance"
                description="All products are verified for authenticity and quality standards"
              />
              <FeatureCard
                icon={TrendingUp}
                title="Fair Pricing"
                description="Direct trade ensures weavers get fair compensation for their materials"
              />
              <FeatureCard
                icon={Users}
                title="Verified Weavers"
                description="Connect directly with authenticated rural artisans and cooperatives"
              />
              <FeatureCard
                icon={Recycle}
                title="Circular Economy"
                description="Every purchase contributes to reducing textile waste and landfill burden"
              />
              <FeatureCard
                icon={Leaf}
                title="Eco Impact Tracking"
                description="Monitor your personal contribution to environmental sustainability"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProduct && (
        <ProductDetailModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
