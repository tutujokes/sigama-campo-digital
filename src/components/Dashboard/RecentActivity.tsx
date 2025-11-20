import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "Cadastro",
    description: "Bovino #BR-2024-0458 cadastrado",
    location: "Fazenda São José",
    date: "Há 2 horas",
    status: "success" as const,
  },
  {
    id: 2,
    type: "Movimento",
    description: "15 animais transferidos",
    location: "Fazenda Esperança → Fazenda Boa Vista",
    date: "Há 5 horas",
    status: "info" as const,
  },
  {
    id: 3,
    type: "Vacinação",
    description: "Campanha de vacinação concluída",
    location: "Fazenda Santa Clara",
    date: "Ontem",
    status: "success" as const,
  },
];

const statusColors = {
  success: "success",
  info: "default",
  warning: "warning",
} as const;

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Atividades Recentes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="text-sm font-medium text-foreground">{activity.description}</p>
                <Badge variant={statusColors[activity.status]} className="shrink-0 text-xs">
                  {activity.type}
                </Badge>
              </div>
              <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span className="truncate">{activity.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{activity.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
