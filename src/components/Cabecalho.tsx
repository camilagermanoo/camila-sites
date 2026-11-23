import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { linkWhatsapp, mensagemPadrao, navegacao } from '../content'

export function Cabecalho() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="border-borda/70 bg-creme/90 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <a
          href="#inicio"
          className="font-assinatura text-terracota text-2xl md:text-3xl"
          onClick={() => setAberto(false)}
        >
          Camila Germano
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="text-suave flex items-center gap-8 text-sm font-medium">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-terracota transition-colors"
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
          className="bg-terracota hover:bg-terracota-escuro hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors md:inline-flex"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Pedir orçamento
        </a>

        <button
          type="button"
          className="text-terracota inline-flex size-11 items-center justify-center rounded-full md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((valor) => !valor)}
        >
          {aberto ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {aberto && (
        <nav
          id="menu-celular"
          aria-label="Menu do celular"
          className="border-borda/70 bg-creme border-t px-5 pb-6 md:hidden"
        >
          <ul className="flex flex-col py-2">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-tinta block py-3 text-base font-medium"
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
            className="bg-terracota flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Pedir orçamento
          </a>
        </nav>
      )}
    </header>
  )
}
