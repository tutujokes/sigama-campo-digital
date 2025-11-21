# SIGAMA Vision — Páginas e Conteúdo

Este documento descreve as páginas presentes em `src/pages` do projeto SIGAMA Vision, suas seções principais, componentes usados, fontes de dados (quando aplicável) e notas de comportamento/responsividade.

> Observação: os nomes das rotas assumem a estrutura padrão do app (ex.: `/anomalies` para `Anomalies.tsx`).

---

## Sumário

- [Index (Home)](#index-home)
- [Monitoring (`/`)](#monitoring-)
- [Analytics (`/analytics`)](#analytics--analytics)
- [Anomalies (`/anomalies`)](#anomalies--anomalies)
- [Vaqueiro Digital (`/vaqueiro`)](#vaqueiro-digital--vaqueiro)
- [Settings (`/settings`)](#settings--settings)
- [NotFound (404)](#notfound-404)

---

## Index (Home)
Arquivo: `src/pages/Index.tsx`

- Propósito: página inicial / fallback. Atualmente contém conteúdo genérico de boas-vindas.
- Seções:
  - Cabeçalho centralizado com título e subtítulo.
- Componentes importantes: nenhum específico além da marcação HTML.
- Dados: nenhum.
- Notas:
  - Página simples; ideal para ser trocada pelo dashboard inicial ou landing page personalizada.

---

## Monitoring (`/`)
Arquivo: `src/pages/Monitoring.tsx`

- Propósito: painel de monitoramento em tempo real das GTAs.
- Principais seções:
  1. Header
     - Título: "Monitoramento de GTAs"
     - Subtítulo: visão em tempo real
     - Status do sistema (Badge `Sistema Ativo` com indicador pulsante)
  2. KPI Cards
     - Grid (1/2/4 cols responsivo) com `KPICard` para métricas:
       - GTAs Hoje
       - GTAs do Mês
       - Tempo Médio (processamento)
       - Taxa de Sucesso
     - Cada `KPICard` recebe props: `title`, `value`, `subtitle`, `icon`, `trend`, `variant`.
  3. Conteúdo principal em grid (duas colunas em desktop):
     - Mapa de calor (Densidade por Região)
       - Lista de regiões com barra de intensidade (estilo progress)
       - Fonte: `heatMapData` de `src/lib/mockData.ts`
     - Performance Regional (Top 10 Unidades)
       - Gráfico `BarChart` (Recharts)
       - Tooltip customizado, barras coloridas para top3
  4. Alertas Recentes
     - Lista de alertas com `Badge` de severidade, mensagem, local e timestamp
     - Itera `recentAlerts` (mockData)

- Componentes usados:
  - `KPICard`, `Card`, `Badge`, `ChartSkeleton`, `Recharts` (BarChart, XAxis, YAxis, Tooltip, Cell, etc.)
- Dados:
  - `gtaStats`, `recentAlerts`, `heatMapData`, `regionalUnits` (todos em `src/lib/mockData.ts`)
- Comportamento:
  - Simulação de loading (`useEffect` com timeout) que mostra skeletons antes dos dados.
- Responsividade:
  - Grid responsivo (Tailwind). Gráficos em `ResponsiveContainer` do Recharts.

---

## Analytics (`/analytics`)
Arquivo: `src/pages/Analytics.tsx`

- Propósito: dashboard analítico com gráficos e KPIs agregados.
- Seções:
  1. Header (título + descrição)
  2. Emissões Mensais
     - `LineChart` (Recharts) com `monthlyEmissions` (mockData)
  3. Grid com dois gráficos:
     - Distribuição por Espécie (`PieChart` + legenda customizada)
     - Tempo Médio de Processamento (`BarChart`)
  4. Estatísticas Resumidas
     - Três `Card`s com métricas (Volume total, Valor arrecadado, Eficiência média)
- Componentes usados:
  - `Card`, `ChartSkeleton`, `Recharts` (LineChart, PieChart, BarChart), ícones (lucide-react)
- Dados:
  - `monthlyEmissions`, `speciesDistribution`, `processingTimes` (mockData)
- Notas:
  - Loading simulado com skeletons
  - Cores do gráfico baseadas em CSS custom properties (`--primary`, etc.)

---

## Anomalies (`/anomalies`)
Arquivo: `src/pages/Anomalies.tsx`

- Propósito: listar anomalias detectadas e apresentar análises/estatísticas por tipo.
- Seções:
  1. Header (título + descrição)
  2. Search Bar (input com ícone `Search`)
  3. Tipos de Anomalias (cards)
     - Grid com pequenos cards mostrando contagem, tendência e badge de comparação mensal
  4. Gráfico de distribuição por tipo
     - `BarChart` vertical dentro de `ResponsiveContainer`
     - YAxis com largura fixa (ajustada dinamicamente pelo código para mobile)
  5. Detalhes de Alertas
     - Lista de `recentAlerts` com badges (severidade + tipo), mensagem, localização, timestamp e botão "Investigar"
- Componentes usados:
  - `Card`, `Badge`, `Input`, `Recharts` (`BarChart`, `Cell`, `Tooltip`, etc.)
- Dados:
  - `anomalyTypes`, `recentAlerts` (mockData)
- Observações técnicas (aplicadas):
  - Adição de `min-w-0` no container de texto para evitar truncamento/overflow em flex
  - Layout dos alertas tornado responsivo (`flex-col sm:flex-row`) e botão configurado para não quebrar
  - Ajuste dinâmico de `YAxis.width` e `ResponsiveContainer.height` dependendo da largura da janela

---

## Vaqueiro Digital (`/vaqueiro`)
Arquivo: `src/pages/Vaqueiro.tsx`

- Propósito: assistente de IA para análise de documentos agropecuários (simulação).
- Seções:
  1. Header
     - Pequeno bloco com ícone (agora `LuBrain`), título "Vaqueiro Digital" e descrição
     - Quadrado de fundo do ícone ajustado para `#E8EDEB` (estética)
  2. Upload Area
     - Card com botão para selecionar documento (simulado). Ícone de upload (`Upload` lucide)
     - Ao clicar, simula análise (2.5s) e exibe toast
  3. Analysis Result (aparece após análise)
     - Score de Conformidade (círculo grande com % e `Badge` classificatório)
     - Dados Extraídos (grid com campos: produtor, CPF, animais, espécie, origem, destino, valor)
       - Ícone do bloco: `LuFileText` (react-icons)
     - Validação (checks ou alertas listados)
     - Ações (Exportar Relatório / Aprovar e Processar)
- Componentes usados:
  - `Card`, `Button`, `Badge`, icons (lucide + react-icons)
- Dados:
  - Resultado de análise mock (gerado por `mockAnalysis()` dentro do componente)
- Observações:
  - O fluxo é simulado (timeout). Em produção, substituir por integração de upload + processamento.

---

## Settings (`/settings`)
Arquivo: `src/pages/Settings.tsx`

- Propósito: centralizar preferências do usuário e configurações do sistema.
- Seções:
  1. Header (título)
  2. Perfil do Usuário
     - Nome, email, nível de acesso e botão para editar
  3. Notificações
     - Switches para: Alertas de Anomalias, Relatórios Diários, Alertas Críticos
  4. Segurança
     - Switch para 2FA, botão para alterar senha
  5. Dados e Exportação
     - Botões para exportar relatórios e dados
  6. Informações do Sistema
     - Versão, última atualização, ambiente
- Componentes usados:
  - `Card`, `Button`, `Switch`, `Label`, ícones lucide
- Observações:
  - Valores estão estáticos; conectar com API/usuário autenticado para dados reais.

---

## NotFound (404)
Arquivo: `src/pages/NotFound.tsx`

- Propósito: página 404 para rotas não encontradas.
- Comportamento: registra no console o caminho acessado (`useEffect`) e oferece link para retornar à home.
- Conteúdo: grande título 404, mensagem e link para "/".

---

## Dados e mocks
- A maior parte das páginas utiliza dados mock em `src/lib/mockData.ts`. Esses dados alimentam gráficos, KPIs e listas de alertas.
- Para integração com backend, substituir as importações de mock por chamadas ao backend (React Query, fetch/axios) e mapear os dados conforme necessário.

---

## Componentes reutilizáveis relevantes
- `src/components/KPICard.tsx` — cartão de KPI com ícone e tendência.
- `src/components/ui/*` — biblioteca local de componentes (Card, Badge, Button, Input, etc.)
- `src/components/ChartSkeleton.tsx` — esqueleto para carregamento de gráficos.
- `src/components/Sidebar.tsx` e `MobileNav.tsx` — navegação principal (ajustada para usar `LuFileText` para Vaqueiro).

---

## Notas de responsividade e acessibilidade
- Layout usa Tailwind com classes responsivas (`grid`, `md:`, `lg:`) e `ResponsiveContainer` do Recharts para gráficos.
- Para evitar overflow em listas com flex, foi aplicado `min-w-0` em containers de texto.
- Recomendações:
  - Adicionar `aria-*` e `role` nos controles interativos (botões principais, alertas) para melhorar acessibilidade.
  - Tratar truncamento de labels longas do eixo Y nos gráficos (tooltip ou text wrap/truncate).

---

## Próximos passos sugeridos
- Substituir mocks por chamadas reais à API com status de carregamento/erro e testes.
- Extrair textos estáticos (rótulos, títulos, mensagens) para um arquivo de i18n se for necessário suporte a múltiplos idiomas.
- Converter ícones para SVGs otimizados (ou manter `react-icons`) e padronizar origem dos ícones em todo o projeto.

---

Se quiser, eu crio um README mais detalhado por página com trechos de props dos componentes (`KPICard`, etc.) e exemplos de payloads esperados para integrar com backend. Quer que eu gere isso também?