import React from "react";
import { Card } from "@/components/ui/card";

const SettingsProdutor = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configurações — Produtor</h1>
        <p className="text-muted-foreground">Preferências específicas do produtor</p>
      </div>

      <Card className="p-6">
        <p className="text-sm text-muted-foreground">Campos e opções para produtores.</p>
      </Card>
    </div>
  );
};

export default SettingsProdutor;
