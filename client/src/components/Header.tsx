import { Button } from "@/components/ui/button";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  const [cartCount] = useState(3); //todo: remove mock functionality
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-lg hidden sm:inline">Handloom</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" data-testid="link-browse">
                Browse
              </Button>
              <Button variant="ghost" data-testid="link-how-it-works">
                How It Works
              </Button>
              <Button variant="ghost" data-testid="link-impact">
                Impact
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            <Button variant="ghost" size="icon" data-testid="button-wishlist">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative" data-testid="button-cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex" data-testid="button-profile">
              <User className="h-5 w-5" />
            </Button>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  <Button variant="ghost" className="justify-start" onClick={() => setIsMenuOpen(false)}>
                    Browse
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => setIsMenuOpen(false)}>
                    How It Works
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => setIsMenuOpen(false)}>
                    Impact
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => setIsMenuOpen(false)}>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button onClick={() => setIsMenuOpen(false)}>
                    Start Selling
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>

            <Button className="hidden md:flex" data-testid="button-sell">
              Start Selling
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
