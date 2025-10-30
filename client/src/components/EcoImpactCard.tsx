import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface EcoImpactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  trend?: string;
}

export default function EcoImpactCard({
  icon: Icon,
  title,
  value,
  description,
  trend,
}: EcoImpactCardProps) {
  return (
    <Card data-testid="card-eco-impact">
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold" data-testid="text-impact-value">
          {value}
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {description}
        </p>
        {trend && (
          <p className="text-xs text-primary font-medium mt-2">
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
