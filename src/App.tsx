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
        className="group fixed right-4 bottom-4 z-30 flex size-14 items-center justify-center md:right-6 md:bottom-6"
      >
        <span
          aria-hidden="true"
          className="bg-vinho animate-pulsar absolute inset-0 rounded-full"
        />
        <span className="bg-vinho group-hover:bg-vinho-escuro relative flex size-14 items-center justify-center rounded-full text-white shadow-[0_15px_35px_-10px_rgb(123_45_67/0.8)] transition-transform duration-300 group-hover:scale-105">
          <MessageCircle className="size-6" aria-hidden="true" />
        </span>
      </a>
    </>
  )
}
