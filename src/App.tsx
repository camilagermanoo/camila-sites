import { MessageCircle } from 'lucide-react'
import { Cabecalho } from './components/Cabecalho'
import {
  ComoFunciona,
  Contato,
  Diferenciais,
  Duvidas,
  Exemplos,
  Inicio,
  Rodape,
  Servicos,
  Sobre,
} from './components/Secoes'
import { linkWhatsapp, mensagemPadrao } from './content'

export default function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Inicio />
        <Servicos />
        <Diferenciais />
        <ComoFunciona />
        <Exemplos />
        <Sobre />
        <Duvidas />
        <Contato />
      </main>
      <Rodape />
      <a
        href={linkWhatsapp(mensagemPadrao)}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="bg-terracota hover:bg-terracota-escuro fixed right-4 bottom-4 z-30 flex size-14 items-center justify-center rounded-full text-white shadow-lg transition-colors md:right-6 md:bottom-6"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>
    </>
  )
}
