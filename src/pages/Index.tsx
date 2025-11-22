// Landing / Hero page for SIGAMA Vision
import { Link, useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { FaBrain, FaShieldAlt, FaGithub } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Beef,
      title: "Gestão de Animais",
      description: "Cadastro completo com rastreamento de movimentações e histórico detalhado",
      color: "text-primary"
    },
    {
      icon: Camera,
      title: "Leitura de Tags",
      description: "Scanner integrado para códigos e brincos eletrônicos via câmera",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Geolocalização",
      description: "Rastreamento GPS automático de todas as atividades no campo",
      color: "text-accent"
    },
    {
      icon: Wifi,
      title: "Offline-First",
      description: "Trabalhe sem internet com sincronização automática quando conectar",
      color: "text-info"
    },
    {
      icon: Shield,
      title: "Alertas Sanitários",
      description: "Notificações de vacinação e eventos de saúde animal",
      color: "text-warning"
    },
    {
      icon: TrendingUp,
      title: "Analytics Avançado",
      description: "Dashboards com detecção de padrões suspeitos e anomalias",
      color: "text-success"
    },
    {
      icon: Bell,
      title: "Notificações Push",
      description: "Comunicados da AGED e alertas importantes em tempo real",
      color: "text-destructive"
    },
    {
      icon: Database,
      title: "Integração SIGAMA",
      description: "Sincronização direta com o sistema estadual de gestão",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="md:hidden text-center -mt-6 pb-1">
        <img
          src="/logos/sigama_big_logo.png"
          alt="SIGAMA Logo"
          className="mx-auto w-40 max-w-[70%]"
          style={{ transform: "scale(0.8)" }}
        />
      </div>

      {/* Desktop header (small logo left + CTA) */}
      <header className="hidden md:flex container mx-auto px-6 py-2 items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logos/sigama_small_logo.png"
            alt="SIGAMA Logo"
            className="w-14 h-14 rounded-md shadow-sm"
            aria-hidden="true"
          />
          <div>
            <h1 className="text-lg font-bold">SIGAMA Vision</h1>
            <p className="text-sm text-muted-foreground">
              Monitoramento inteligente para processos
            </p>
          </div>
        </div>
        <nav>{/* CTA Button */}</nav>
      </header>

  <main className="flex-1 container mx-auto px-4 md:px-6 py-4 md:py-8 pb-24 md:pb-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="max-w-2xl">
            <h2 className="hidden lg:block text-2xl lg:text-4xl font-extrabold mb-6">
              Monitoramento Inteligente de GTAs
            </h2>

            {/* Feature cards (visible on desktop) - Melhorado */}
            <div className="hidden md:flex md:flex-col md:gap-4 mb-4">
              <div className="flex items-start gap-3 bg-muted/70 rounded-xl p-4 border shadow-sm w-full hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <MdOutlineSettingsInputAntenna
                    className="w-5 h-5"
                    aria-hidden
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base mb-1">
                    Monitoramento em Tempo Real
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Acompanhe eventos e alertas em tempo real
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-muted/70 rounded-xl p-4 border shadow-sm w-full hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <FaBrain className="w-5 h-5" aria-hidden />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base mb-1">
                    IA que Analisa Documentos
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Extração e verificação automatizada
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-muted/70 rounded-xl p-4 border shadow-sm w-full hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <FaShieldAlt className="w-5 h-5" aria-hidden />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base mb-1">
                    Detecção Automática de Fraudes
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Identificação proativa de anomalias
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col items-center w-full -mt-12 md:mt-0">
            <div className="w-full bg-muted rounded-lg overflow-hidden shadow p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-2">Acesse sua conta</h3>
              <p className="text-[12px] text-gray-400 mb-4">
                Seus dados são protegidos conforme a LGPD.
              </p>
              <form onSubmit={handleLogin} className="flex flex-col gap-3">
                <label className="text-sm">Email</label>
                <div className="relative">
                  <IoPersonSharp
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5"
                    aria-hidden
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Digite seu email institucional"
                    className="w-full rounded-md border px-3 pl-10 h-12"
                    aria-label="Email institucional"
                  />
                </div>

                <label className="text-sm">Senha</label>
                <div className="relative">
                  <FaLock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4"
                    aria-hidden
                  />
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Sua senha"
                    className="w-full rounded-md border px-3 pl-10 h-12"
                    aria-label="Senha"
                  />
                </div>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition-colors"
                  >
                    Entrar
                  </button>
                  <Link
                    to="/register"
                    className="w-full rounded-md bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground flex items-center justify-center hover:bg-secondary/80 transition-colors"
                  >
                    Cadastre-se agora
                  </Link>
                </div>
              </form>

              {/* gov.br sign-in button */}
              <div className="mt-3 flex justify-center">
                <a
                  className="govbr-sign-in"
                  href="https://sso.acesso.gov.br/authorize?scope=openid+email+phone+profile+govbr_confiabilidades+govbr_empresa&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fsigama.aged.ma.gov.br%2Fapplication%2Findex%2Flogin&amp;client_id=p-sigama.aged.ma.gov.br&amp;scope=openid+email+phone+profile+govbr_confiabilidades+govbr_empresa&amp;code_challenge_method=S256&amp;code_challenge=ZPr1LnmrKqddRrhgTpiCw0nEWD9j1TYiisRr4kRQJJA"
                >
                  <span>Entrar com</span>
                  <img
                    className="govbr-img ml-2"
                    src="https://sigama.aged.ma.gov.br/img/govbr-colorido-b.png"
                    alt="gov.br"
                  />
                </a>
              </div>
            </div>

            {/* Mini KPI badges */}
            <div className="mt-3 flex gap-3">
              <div className="flex items-center gap-2 bg-white/80 border rounded-md px-3 py-2 text-sm shadow-sm">
                <span>🎯</span>
                <div>
                  <div className="font-semibold text-sm">342 GTAs</div>
                  <div className="text-xs text-muted-foreground">hoje</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/80 border rounded-md px-3 py-2 text-sm shadow-sm">
                <span>⚡</span>
                <div>
                  <div className="font-semibold text-sm">8.4 min</div>
                  <div className="text-xs text-muted-foreground">médio</div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="py-3 border-t fixed bottom-0 left-0 right-0 z-20 bg-[#023E29]">
        <div className="w-full px-4 md:container md:mx-auto md:px-6 text-center text-sm text-white">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src="/logos/aged_logo.png" alt="AGED" className="h-12 md:h-10 object-contain transform scale-125 drop-shadow-lg" />
            <span className="text-white">•</span>
            <img src="/logos/fapema_logo.png" alt="FAPEMA" className="h-6 md:h-5 object-contain transform scale-125 drop-shadow-lg" />
            <span className="text-white">•</span>
            <img src="/logos/sigama_logo.png" alt="SIGAMA" className="h-6 md:h-5 object-contain transform scale-125 drop-shadow-lg" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-white">SIGAMA Vision, 2025  —</span>
            <a
              href="https://github.com/tutujokes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white inline-flex items-center hover:underline"
              aria-label="SIGAMA Vision GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
