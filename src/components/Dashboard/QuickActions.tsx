import { Plus, Camera, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  { icon: Plus, label: "Cadastrar Animal", variant: "primary" as const },
  { icon: Camera, label: "Escanear Tag", variant: "secondary" as const },
  { icon: Upload, label: "Registrar Movimento", variant: "success" as const },
  { icon: FileText, label: "Gerar Relatório", variant: "default" as const },
];

const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Ações Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto flex-col gap-2 py-4 hover:border-primary hover:bg-primary/5"
            >
              <action.icon className="h-6 w-6" />
              <span className="text-xs font-medium text-center">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
