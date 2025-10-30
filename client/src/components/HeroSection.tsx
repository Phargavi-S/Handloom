import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from '@assets/generated_images/Weaver_hands_on_traditional_loom_66dae5d9.png';

export default function HeroSection() {
  const handleBrowse = () => {
    console.log('Browse marketplace clicked');
  };

  const handleSell = () => {
    console.log('Start selling clicked');
  };

  return (
    <div className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="max-w-2xl text-white py-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transform Textile Waste into Sustainable Value
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
            Connect with rural artisans trading handloom waste. Support circular economy, 
            empower weavers, and reduce textile waste—one thread at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="default"
              className="h-12 px-8"
              onClick={handleBrowse}
              data-testid="button-browse-marketplace"
            >
              <Search className="mr-2 h-5 w-5" />
              Browse Marketplace
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={handleSell}
              data-testid="button-start-selling"
            >
              Start Selling
            </Button>
          </div>
          <div className="mt-8 flex gap-8 text-sm">
            <div>
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-white/80">Active Weavers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">₹50L+</div>
              <div className="text-white/80">Waste Diverted</div>
            </div>
            <div>
              <div className="text-2xl font-bold">12K+</div>
              <div className="text-white/80">Transactions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
