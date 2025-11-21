// Landing / Hero page for SIGAMA Vision
import { Link, useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { FaBrain, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Atualmente aceitamos qualquer email/senha localmente para demonstrar o fluxo.
    // Substituir por autenticação real (validação no backend, tokens seguros e tratamento de erros).
    try {
      localStorage.setItem("sigama_demo_auth", "true");
    } catch (e) {
      /* ignore */
    }
    navigate("/monitoring");
  };

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
      <header className="hidden md:flex container mx-auto px-6 py-2 items-center justify-between"> {/* Further adjusted padding to move logo and text up */}
        <div className="flex items-center gap-3">
          <img
            src="/logos/sigama_small_logo.png"
            alt="SIGAMA Logo"
            className="w-14 h-14 rounded-md shadow-sm"
            aria-hidden="true"
          />
          <div>
            <h1 className="text-lg font-bold">SIGAMA Vision</h1>
            <p className="text-sm text-muted-foreground">Monitoramento inteligente para processos</p>
          </div>
        </div>
        <nav>
          {/* CTA Button */}
        </nav>
      </header>

  <main className="flex-1 container mx-auto px-4 md:px-6 py-4 md:py-8 md:pb-20"> {/* Further adjusted padding to move content up; reduced md:pb-20 to decrease gap to footer */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="hidden lg:block text-2xl lg:text-4xl font-extrabold mb-2 lg:mb-4">Monitoramento Inteligente de GTAs</h2>
            {/* Feature cards (visible on desktop) */}
            <div className="hidden md:flex md:flex-col md:gap-3.5 mb-3 md:mb-4 md:items-start">
              <div className="flex items-center gap-3 bg-muted rounded-md p-4 border md:w-80 h-20">
                <MdOutlineSettingsInputAntenna className="w-[22px] h-[22px] text-[#0D8B56]" aria-hidden />
                <div>
                  <div className="font-semibold">Monitoramento em Tempo Real</div>
                  <div className="text-sm text-muted-foreground">Acompanhe eventos e alertas em tempo real</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-muted rounded-md p-4 border md:w-80 h-20">
                <FaBrain className="w-[22px] h-[22px] text-[#0D8B56]" aria-hidden />
                <div>
                  <div className="font-semibold">IA que Analisa Documentos</div>
                  <div className="text-sm text-muted-foreground">Extração e verificação automatizada</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-muted rounded-md p-4 border md:w-80 h-20">
                <FaShieldAlt className="w-[22px] h-[22px] text-[#0D8B56]" aria-hidden />
                <div>
                  <div className="font-semibold">Detecção Automática de Fraudes</div>
                  <div className="text-sm text-muted-foreground">Identificação proativa de anomalias</div>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col items-center w-full -mt-12 md:mt-0">
            <div className="w-full bg-muted rounded-lg overflow-hidden shadow p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-2">Acesse sua conta</h3>
              <p className="text-[12px] text-gray-400 mb-4">Seus dados são protegidos conforme a LGPD.</p>
              <form onSubmit={handleLogin} className="flex flex-col gap-3">
                <label className="text-sm">Email</label>
                <div className="relative">
                  <IoPersonSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" aria-hidden />
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
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" aria-hidden />
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
                  <button type="submit" className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow">Entrar</button>
                  <Link to="/register" className="w-full rounded-md bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground flex items-center justify-center">Cadastre-se agora</Link>
                </div>
              </form>

              {/* gov.br sign-in button inserted as requested */}
              <div className="mt-3 flex justify-center">
                <a
                  className="govbr-sign-in"
                  href="https://sso.acesso.gov.br/authorize?scope=openid+email+phone+profile+govbr_confiabilidades+govbr_empresa&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fsigama.aged.ma.gov.br%2Fapplication%2Findex%2Flogin&amp;client_id=p-sigama.aged.ma.gov.br&amp;scope=openid+email+phone+profile+govbr_confiabilidades+govbr_empresa&amp;code_challenge_method=S256&amp;code_challenge=ZPr1LnmrKqddRrhgTpiCw0nEWD9j1TYiisRr4kRQJJA"
                >
                  <span>Entrar com</span>
                  <img className="govbr-img ml-2" src="https://sigama.aged.ma.gov.br/img/govbr-colorido-b.png" alt="gov.br" />
                </a>
              </div>


            </div>

            {/* Mini KPI badges */}
            <div className="mt-3 flex gap-3">
              <div className="flex items-center gap-2 bg-white/80 border rounded-md px-3 py-2 text-sm">
                <span>🎯</span>
                <div>
                  <div className="font-semibold text-sm">342 GTAs</div>
                  <div className="text-xs text-muted-foreground">hoje</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/80 border rounded-md px-3 py-2 text-sm">
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

      <footer className="py-6 border-t md:fixed md:bottom-0 md:left-0 md:right-0 md:z-20 md:bg-background">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          Projeto PTG • AGED/FAPEMA 2025 — SIGAMA Vision
        </div>
      </footer>
    </div>
  );
};

export default Index;
