import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus, Upload, Download } from "lucide-react";
import ChartSkeleton from "@/components/ChartSkeleton";


const RebanhoProdutor = () => {
  return (
  <div className="w-full px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Meu Rebanho</h1>
          <p className="text-muted-foreground">Visão completa do rebanho e ações rápidas</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" className="inline-flex items-center">
            <Plus className="w-4 h-4" />
            <span>Animal</span>
          </Button>
          <Button variant="outline" size="sm" className="inline-flex items-center">
            <Upload className="w-4 h-4" />
            <span>Importar</span>
          </Button>
          <Button variant="outline" size="sm" className="inline-flex items-center">
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="min-w-[220px]">
          <label className="text-sm text-muted-foreground block mb-1">Seletor de Fazenda</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Fazenda Santa Clara" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="santa-clara">Fazenda Santa Clara</SelectItem>
              <SelectItem value="sao-joao">Fazenda São João</SelectItem>
              <SelectItem value="vale-verde">Fazenda Vale Verde</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="p-4">
        <Tabs defaultValue="visao-geral">
          <TabsList>
            <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
            <TabsTrigger value="lista-animais">Lista de Animais</TabsTrigger>
            <TabsTrigger value="calendario">Calendário de Vacinação</TabsTrigger>
          </TabsList>

          <TabsContent value="visao-geral">
            <div className="py-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Visão Geral</h3>
                <p className="text-sm text-muted-foreground">Resumo com métricas rápidas e ações.</p>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4">
                  <div className="text-2xl font-bold">247</div>
                  <div className="text-sm text-muted-foreground">Total Animais</div>
                </Card>

                <Card className="p-4">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Propriedades</div>
                </Card>

                <Card className="p-4">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-muted-foreground">Alertas</div>
                </Card>

                <Card className="p-4">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-muted-foreground">Saúde do Rebanho</div>
                </Card>
              </div>

              {/* Species summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-semibold">🐄 189</div>
                    <div className="text-sm text-muted-foreground">Bovino</div>
                    <div className="text-xs text-emerald-600 mt-1">+12 ↗</div>
                  </div>
                </Card>

                <Card className="p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-semibold">🐐 42</div>
                    <div className="text-sm text-muted-foreground">Capri</div>
                    <div className="text-xs text-emerald-600 mt-1">+3 ↗</div>
                  </div>
                </Card>

                <Card className="p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-semibold">🐷 16</div>
                    <div className="text-sm text-muted-foreground">Suíno</div>
                    <div className="text-xs text-rose-600 mt-1">-2 ↘</div>
                  </div>
                </Card>
              </div>

              {/* Chart + actions + alerts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                  <ChartSkeleton title="Crescimento do Rebanho (últimos 6 meses)" height={260} />

                  <div className="flex gap-2 mt-4">
                    <Button variant="default" size="sm" className="inline-flex items-center">
                      Cadastrar Animal
                    </Button>
                    <Button variant="secondary" size="sm">Nova GTA</Button>
                    <Button variant="outline" size="sm">Registrar Vacina</Button>
                    <Button variant="ghost" size="sm">Gerar Relatório</Button>
                  </div>
                </div>

                <div>
                  <Card className="p-4 mb-4">
                    <h4 className="font-semibold mb-2">Alertas Importantes</h4>
                    <ul className="text-sm space-y-2">
                      <li>⚠️ <strong>15</strong> animais - Vacinação atrasada</li>
                      <li>📋 <strong>3</strong> GTAs aguardando aprovação</li>
                      <li>✅ Certificado Brucelose válido</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Movimentações Recentes</h4>
                    <ul className="text-sm space-y-2">
                      <li>• 18/11 - GTA #2345 Aprovada</li>
                      <li>• 17/11 - 8 animais vacinados</li>
                      <li>• 15/11 - Novo animal cadastrado</li>
                      <li>• 12/11 - Exportação de lote</li>
                      <li>• 10/11 - Importação concluída</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lista-animais">
            <div className="py-6">
              <h3 className="text-lg font-semibold mb-2">Lista de Animais</h3>
              <p className="text-sm text-muted-foreground">Tabela/listagem de animais (a implementar).</p>
            </div>
          </TabsContent>

          <TabsContent value="calendario">
            <div className="py-6">
              <h3 className="text-lg font-semibold mb-2">Calendário de Vacinação</h3>
              <p className="text-sm text-muted-foreground">Agenda e notificações de vacinas.</p>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default RebanhoProdutor;