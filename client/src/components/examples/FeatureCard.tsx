import FeatureCard from '../FeatureCard';
import { Shield } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="max-w-sm">
      <FeatureCard
        icon={Shield}
        title="Secure Payments"
        description="Safe and encrypted payment processing to protect both buyers and sellers"
      />
    </div>
  );
}
