import EcoImpactCard from '../EcoImpactCard';
import { Leaf } from 'lucide-react';

export default function EcoImpactCardExample() {
  return (
    <div className="max-w-sm">
      <EcoImpactCard
        icon={Leaf}
        title="Waste Diverted"
        value="45,280 kg"
        description="Textile waste saved from landfills"
        trend="+12% this month"
      />
    </div>
  );
}
