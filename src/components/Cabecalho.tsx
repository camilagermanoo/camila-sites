import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { linkWhatsapp, mensagemPadrao, navegacao } from '../content'

export function Cabecalho() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  const solido = rolou || aberto

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        solido
          ? 'border-borda/80 bg-creme/85 border-b shadow-[0_8px_30px_-12px_rgb(74_26_42/0.18)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <a
          href="#inicio"
          className="font-assinatura text-vinho text-[1.7rem] md:text-3xl"
          onClick={() => setAberto(false)}
        >
          Camila Germano
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-suave hover:bg-blush hover:text-vinho rounded-full px-4 py-2 transition-colors"
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={linkWhatsapp(mensagemPadrao)}
          target="_blank"
          rel="noreferrer"
          className="bg-vinho hover:bg-vinho-escuro hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_-10px_rgb(123_45_67/0.7)] transition-all hover:-translate-y-0.5 md:inline-flex"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Pedir orçamento
        </a>

        <button
          type="button"
          className="text-vinho bg-blush inline-flex size-11 items-center justify-center rounded-full md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((valor) => !valor)}
        >
          {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {aberto && (
        <nav
          id="menu-celular"
          aria-label="Menu do celular"
          className="border-borda/80 bg-creme border-t px-5 pb-6 md:hidden"
        >
          <ul className="flex flex-col py-2">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-tinta border-borda/60 block border-b py-4 text-base font-medium"
                  onClick={() => setAberto(false)}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={linkWhatsapp(mensagemPadrao)}
            target="_blank"
            rel="noreferrer"
            className="bg-vinho mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Pedir orçamento
          </a>
        </nav>
      )}
    </header>
  )
}
