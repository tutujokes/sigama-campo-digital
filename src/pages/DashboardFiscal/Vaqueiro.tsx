import React from "react";
import { Card } from "@/components/ui/card";

const VaqueiroFiscal = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Vaqueiro — Visão Fiscal</h1>
        <p className="text-muted-foreground">Visão com foco em auditoria e fiscalização</p>
      </div>

      <Card className="p-6">
        <div className="prose text-sm text-foreground">
          <p>
            Rota: <code>/fiscal/vaqueiro</code>
          </p>

          <h3>Funcionalidades</h3>
          <ul>
            <li><strong>Upload de documento</strong> — foto ou PDF da GTA para análise.</li>
            <li><strong>Análise com IA</strong> — extração automática de dados importantes do documento.</li>
            <li><strong>Validação de conformidade</strong> — checagens automáticas de campos obrigatórios e regras de negócio.</li>
            <li><strong>Score de risco</strong> — indicador que aponta probabilidade de irregularidade.</li>
            <li><strong>Ações</strong> — Aprovar / Rejeitar / Autuar (aplicar penalidades quando necessário).</li>
          </ul>

          <h3>Casos de uso</h3>
          <ul>
            <li>Fiscal em campo tira foto de uma GTA física para validar autenticidade.</li>
            <li>Fiscal recebe documento enviado por produtor e verifica se os dados batem com o sistema.</li>
            <li>Auditoria de documentos antigos — digitalização e verificação em massa.</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default VaqueiroFiscal;
