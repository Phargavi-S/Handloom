import ProductDetailModal from '../ProductDetailModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import yarnBundleImg from '@assets/generated_images/Colorful_handloom_waste_yarn_bundles_153643da.png';
import weaverImg from '@assets/generated_images/Female_weaver_portrait_headshot_89678557.png';

export default function ProductDetailModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Product Detail</Button>
      <ProductDetailModal
        open={open}
        onOpenChange={setOpen}
        product={{
          id: "1",
          image: yarnBundleImg,
          title: "Colorful Cotton Yarn Bundle - Mixed Colors",
          fabricType: "Cotton",
          color: "Multi-color",
          quantity: "2.5 kg",
          price: 450,
          weaverName: "Lakshmi Devi",
          weaverImage: weaverImg,
          location: "Varanasi, UP",
          description: "High-quality cotton yarn waste in vibrant colors. Perfect for craft projects, rug making, or textile art. These yarns are leftover from our handloom weaving process and represent authentic handspun quality.",
          verified: true,
        }}
      />
    </div>
  );
}
