import ProductCard from '../ProductCard';
import yarnBundleImg from '@assets/generated_images/Colorful_handloom_waste_yarn_bundles_153643da.png';

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        id="1"
        image={yarnBundleImg}
        title="Colorful Cotton Yarn Bundle - Mixed Colors"
        fabricType="Cotton"
        color="Multi-color"
        quantity="2.5 kg"
        price={450}
        weaverName="Lakshmi Devi"
        location="Varanasi, UP"
        verified={true}
        onClick={() => console.log('Product clicked')}
      />
    </div>
  );
}
