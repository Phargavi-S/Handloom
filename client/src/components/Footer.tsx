import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log('Newsletter subscription:', email);
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">H</span>
              </div>
              <span className="font-bold text-lg">Handloom</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Connecting weavers with conscious buyers for a sustainable future.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="link-facebook">
                <SiFacebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-twitter">
                <SiX className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-instagram">
                <SiInstagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-linkedin">
                <SiLinkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Buyers</h3>
            <ul className="space-y-2 text-sm">
              <li><Button variant="ghost" className="p-0 h-auto">Browse Products</Button></li>
              <li><Button variant="ghost" className="p-0 h-auto">How to Buy</Button></li>
              <li><Button variant="ghost" className="p-0 h-auto">Shipping Info</Button></li>
              <li><Button variant="ghost" className="p-0 h-auto">Returns Policy</Button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Weavers</h3>
            <ul className="space-y-2 text-sm">
              <li><Button variant="ghost" className="p-0 h-auto">Start Selling</Button></li>
              <li><Button variant="ghost" className="p-0 h-auto">Seller Guidelines</Button></li>
              <li><Button variant="ghost" className="p-0 h-auto">Verification Process</Button></li>
              <li><Button variant="ghost" className="p-0 h-auto">Success Stories</Button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Join Our Movement</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on sustainable practices and new listings.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-newsletter"
              />
              <Button onClick={handleSubscribe} data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Button variant="ghost" className="p-0 h-auto text-muted-foreground">Privacy Policy</Button>
            <Button variant="ghost" className="p-0 h-auto text-muted-foreground">Terms of Service</Button>
            <Button variant="ghost" className="p-0 h-auto text-muted-foreground">Contact Us</Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Handloom Marketplace. All rights reserved.
          </p>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-4 text-sm bg-muted/50 px-6 py-3 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-semibold">Live Impact:</span>
            </div>
            <span className="text-muted-foreground">
              <span className="font-bold text-foreground">45,280 kg</span> textile waste diverted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
