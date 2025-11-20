import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, MoreVertical } from "lucide-react";

interface AnimalCardProps {
  id: string;
  tag: string;
  species: string;
  breed: string;
  location: string;
  lastUpdate: string;
  status: "active" | "quarantine" | "transferred";
}

const statusConfig = {
  active: { label: "Ativo", variant: "success" as const },
  quarantine: { label: "Quarentena", variant: "warning" as const },
  transferred: { label: "Transferido", variant: "default" as const },
};

const AnimalCard = ({ id, tag, species, breed, location, lastUpdate, status }: AnimalCardProps) => {
  const statusInfo = statusConfig[status];

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground">{tag}</h3>
              <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {species} • {breed}
            </p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>Atualizado {lastUpdate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
