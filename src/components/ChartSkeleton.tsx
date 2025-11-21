import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ChartSkeletonProps {
  title?: string;
  height?: number;
}

const ChartSkeleton = ({ title, height = 350 }: ChartSkeletonProps) => {
  return (
    <Card className="p-6 animate-fade-in">
      {title && (
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="w-5 h-5 rounded" />
          <Skeleton className="h-6 w-48" />
        </div>
      )}
      <div className="space-y-3" style={{ height }}>
        {/* Simula barras de gráfico */}
        <div className="flex items-end justify-between h-full gap-2">
          {[60, 80, 45, 90, 70, 55, 85].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-muted rounded-t-lg animate-pulse"
              style={{
                height: `${height}%`,
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
        {/* Labels */}
        <div className="flex justify-between pt-2">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Skeleton key={i} className="h-4 w-12" />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ChartSkeleton;
