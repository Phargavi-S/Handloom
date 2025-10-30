import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MapPin, Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    id: string;
    image: string;
    title: string;
    fabricType: string;
    color: string;
    quantity: string;
    price: number;
    weaverName: string;
    weaverImage?: string;
    location: string;
    description: string;
    verified?: boolean;
  };
}

export default function ProductDetailModal({
  open,
  onOpenChange,
  product,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    console.log(`Product ${isWishlisted ? 'removed from' : 'added to'} wishlist`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.title}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge variant="secondary">{product.fabricType}</Badge>
              <Badge variant="secondary">{product.color}</Badge>
              {product.verified && (
                <Badge className="bg-primary text-primary-foreground">Verified</Badge>
              )}
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold" data-testid="text-modal-price">₹{product.price}</span>
              <span className="text-muted-foreground">per unit</span>
            </div>

            <div className="text-sm text-muted-foreground">
              Available: {product.quantity}
            </div>

            <Separator />

            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={product.weaverImage} />
                <AvatarFallback>{product.weaverName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{product.weaverName}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {product.location}
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    data-testid="button-decrease-quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium" data-testid="text-quantity">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    data-testid="button-increase-quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  className="flex-1"
                  onClick={handleAddToCart}
                  data-testid="button-add-to-cart"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleWishlist}
                  data-testid="button-wishlist-modal"
                >
                  <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current text-destructive' : ''}`} />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="description" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="text-sm text-muted-foreground">
                {product.description}
              </TabsContent>
              <TabsContent value="details" className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fabric Type:</span>
                  <span className="font-medium">{product.fabricType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Color:</span>
                  <span className="font-medium">{product.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available Quantity:</span>
                  <span className="font-medium">{product.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">{product.location}</span>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
