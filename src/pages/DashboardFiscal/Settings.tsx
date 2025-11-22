import React from "react";
import { Card } from "@/components/ui/card";

const SettingsFiscal = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configurações — Fiscal</h1>
        <p className="text-muted-foreground">Opções e filtros para a equipe fiscal</p>
      </div>

      <Card className="p-6">
        <p className="text-sm text-muted-foreground">Campos e opções específicas para fiscalização.</p>
      </Card>
    </div>
  );
};

export default SettingsFiscal;
