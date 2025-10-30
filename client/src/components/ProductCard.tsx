import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, MapPin } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  fabricType: string;
  color: string;
  quantity: string;
  price: number;
  weaverName: string;
  location: string;
  verified?: boolean;
  onClick?: () => void;
}

export default function ProductCard({
  image,
  title,
  fabricType,
  color,
  quantity,
  price,
  weaverName,
  location,
  verified = false,
  onClick,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    console.log(`Product ${isWishlisted ? 'removed from' : 'added to'} wishlist`);
  };

  return (
    <Card 
      className="hover-elevate cursor-pointer overflow-hidden"
      onClick={onClick}
      data-testid="card-product"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {verified && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
            Verified Weaver
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm ${
            isWishlisted ? 'text-destructive' : ''
          }`}
          onClick={handleWishlistClick}
          data-testid="button-wishlist"
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>
      </div>
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-base line-clamp-2" data-testid="text-product-title">
          {title}
        </h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary" className="text-xs">
            {fabricType}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {color}
          </Badge>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{quantity}</span>
          <span className="font-bold text-lg" data-testid="text-price">
            ₹{price}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-3 w-3" />
        <span className="truncate" data-testid="text-weaver-name">
          {weaverName}, {location}
        </span>
      </CardFooter>
    </Card>
  );
}
