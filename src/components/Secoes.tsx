import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Mail, MessageCircle } from 'lucide-react'
import {
  contato,
  diferenciais,
  duvidas,
  etapas,
  exemplos,
  linkInstagram,
  linkWhatsapp,
  mensagemPadrao,
  servicos,
} from '../content'
import type { Servico } from '../content'
import { Divisor, IconeInstagram } from './Icones'

function Titulo({
  sobretitulo,
  titulo,
  id,
}: {
  sobretitulo: string
  titulo: string
  id: string
}) {
  return (
    <div className="mb-10 text-center md:mb-14">
      <p className="text-terracota mb-3 text-xs font-semibold tracking-[0.3em] uppercase">
        {sobretitulo}
      </p>
      <h2
        id={id}
        className="font-serifa text-tinta text-4xl leading-tight font-semibold md:text-5xl"
      >
        {titulo}
      </h2>
    </div>
  )
}

function Cartao({ item }: { item: Servico }) {
  const Icone = item.icone
  return (
    <li className="border-borda flex gap-4 rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md md:p-6">
      <span className="bg-rosa text-terracota flex size-11 shrink-0 items-center justify-center rounded-full">
        <Icone className="size-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-serifa text-tinta text-2xl font-semibold">
          {item.titulo}
        </h3>
        <p className="text-suave mt-1 text-sm leading-relaxed">
          {item.descricao}
        </p>
      </div>
    </li>
  )
}

export function Inicio() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-inicio"
      className="relative overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="bg-rosa-claro absolute -top-32 -right-32 size-96 rounded-full md:-top-40 md:-right-20 md:size-[32rem]"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 size-72 rounded-full bg-[#EEF0E8]"
      />
      <div className="relative mx-auto max-w-4xl px-5 pt-16 pb-20 text-center md:pt-28 md:pb-32">
        <p className="text-terracota text-xs font-semibold tracking-[0.3em] uppercase md:text-sm">
          Criação de sites personalizados
        </p>
        <h1 id="titulo-inicio" className="mt-6">
          <span className="font-serifa text-terracota block text-5xl font-medium italic md:text-7xl">
            a sua ideia
          </span>
          <span className="font-serifa text-tinta mt-2 block text-4xl leading-tight font-semibold md:text-6xl">
            merece um site
            <br />
            bonito de verdade
          </span>
        </h1>
        <p className="text-suave mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg">
          Crio sites delicados, modernos e fáceis de usar para eventos,
          negócios, projetos pessoais e tudo o que você imaginar.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={linkWhatsapp(mensagemPadrao)}
            target="_blank"
            rel="noreferrer"
            className="bg-terracota hover:bg-terracota-escuro inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors sm:w-auto"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Quero meu site
          </a>
          <a
            href="#servicos"
            className="border-terracota/40 text-terracota hover:bg-rosa-claro inline-flex w-full items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition-colors sm:w-auto"
          >
            Ver tipos de site
          </a>
        </div>
        <div className="mt-14">
          <Divisor />
        </div>
      </div>
    </section>
  )
}

export function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="titulo-servicos"
      className="px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <Titulo
          id="titulo-servicos"
          sobretitulo="O que eu faço"
          titulo="Sites para cada momento"
        />
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {servicos.map((item) => (
            <Cartao key={item.titulo} item={item} />
          ))}
        </ul>
        <p className="text-suave mt-10 text-center">
          Tem outra ideia?{' '}
          <a
            href={linkWhatsapp(mensagemPadrao)}
            target="_blank"
            rel="noreferrer"
            className="text-terracota font-semibold underline-offset-4 hover:underline"
          >
            É só me contar que eu crio do seu jeito.
          </a>
        </p>
      </div>
    </section>
  )
}

export function Diferenciais() {
  return (
    <section
      aria-labelledby="titulo-diferenciais"
      className="bg-rosa-claro px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <Titulo
          id="titulo-diferenciais"
          sobretitulo="Por que ter um site"
          titulo="Bonito, prático e do seu jeito"
        />
        <ul className="grid gap-4 sm:grid-cols-2 md:gap-5">
          {diferenciais.map((item) => (
            <Cartao key={item.titulo} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="titulo-como-funciona"
      className="px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <Titulo
          id="titulo-como-funciona"
          sobretitulo="Como funciona"
          titulo="Simples do começo ao fim"
        />
        <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
          {etapas.map((etapa) => (
            <li key={etapa.numero} className="text-center">
              <span className="font-serifa text-terracota text-5xl font-semibold italic">
                {etapa.numero}
              </span>
              <p className="text-tinta mx-auto mt-2 max-w-[14rem] text-base">
                {etapa.titulo}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Exemplos() {
  return (
    <section
      id="exemplos"
      aria-labelledby="titulo-exemplos"
      className="bg-white px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <Titulo
          id="titulo-exemplos"
          sobretitulo="Trabalhos"
          titulo="Sites que já estão no ar"
        />
        <ul className="grid gap-5 md:grid-cols-2">
          {exemplos.map((exemplo) => (
            <li
              key={exemplo.url}
              className="border-borda bg-creme flex flex-col rounded-2xl border p-6 md:p-8"
            >
              <span className="bg-rosa text-terracota w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                {exemplo.categoria}
              </span>
              <h3 className="font-serifa text-tinta mt-4 text-3xl font-semibold">
                {exemplo.nome}
              </h3>
              <p className="text-suave mt-2 flex-1 leading-relaxed">
                {exemplo.descricao}
              </p>
              <a
                href={exemplo.url}
                target="_blank"
                rel="noreferrer"
                className="text-terracota mt-6 inline-flex w-fit items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
              >
                Ver o site
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
          <li className="border-dourado flex flex-col items-center justify-center rounded-2xl border border-dashed p-6 text-center md:p-8">
            <p className="font-serifa text-tinta text-3xl font-semibold">
              O próximo pode ser o seu
            </p>
            <p className="text-suave mt-2">
              Me conte a sua ideia e vamos tirar ela do papel.
            </p>
            <a
              href={linkWhatsapp(mensagemPadrao)}
              target="_blank"
              rel="noreferrer"
              className="bg-terracota hover:bg-terracota-escuro mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Conversar agora
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export function Sobre() {
  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="px-5 py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
        <div
          aria-hidden="true"
          className="border-dourado bg-rosa flex size-40 shrink-0 items-center justify-center rounded-full border md:size-56"
        >
          <span className="font-assinatura text-terracota text-6xl md:text-7xl">
            CG
          </span>
        </div>
        <div className="text-center md:text-left">
          <p className="text-terracota mb-3 text-xs font-semibold tracking-[0.3em] uppercase">
            Quem sou eu
          </p>
          <h2
            id="titulo-sobre"
            className="font-serifa text-tinta text-4xl font-semibold md:text-5xl"
          >
            Oi, eu sou a Camila!
          </h2>
          <p className="text-suave mt-5 leading-relaxed">
            Sou desenvolvedora web, formada em Análise e Desenvolvimento de
            Sistemas, e trabalho com React e TypeScript, tecnologias modernas
            usadas no mercado. Gosto de unir código bem feito com um visual
            delicado, para que o seu site seja bonito e funcione de verdade.
          </p>
          <p className="text-suave mt-4 leading-relaxed">
            Cada projeto é único: eu escuto a sua ideia e crio um site com a sua
            identidade, do jeitinho que você imaginou.
          </p>
          <a
            href={contato.portfolio}
            target="_blank"
            rel="noreferrer"
            className="text-terracota mt-6 inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
          >
            Conheça meu portfólio de desenvolvedora
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function Duvidas() {
  const [aberta, setAberta] = useState<number | null>(0)

  return (
    <section
      id="duvidas"
      aria-labelledby="titulo-duvidas"
      className="bg-rosa-claro px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <Titulo
          id="titulo-duvidas"
          sobretitulo="Dúvidas"
          titulo="Perguntas frequentes"
        />
        <ul className="space-y-3">
          {duvidas.map((item, indice) => {
            const estaAberta = aberta === indice
            const idResposta = `resposta-${indice}`
            return (
              <li
                key={item.pergunta}
                className="border-borda rounded-2xl border bg-white"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={estaAberta}
                    aria-controls={idResposta}
                    onClick={() => setAberta(estaAberta ? null : indice)}
                    className="text-tinta flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold md:px-6 md:py-5"
                  >
                    {item.pergunta}
                    <ChevronDown
                      aria-hidden="true"
                      className={`text-terracota size-5 shrink-0 transition-transform ${estaAberta ? 'rotate-180' : ''}`}
                    />
                  </button>
                </h3>
                <div
                  id={idResposta}
                  hidden={!estaAberta}
                  className="text-suave px-5 pb-5 leading-relaxed md:px-6"
                >
                  {item.resposta}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function Contato() {
  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="px-5 py-20 md:py-28"
    >
      <div className="bg-rosa mx-auto max-w-3xl rounded-3xl px-6 py-12 text-center md:px-12 md:py-16">
        <h2
          id="titulo-contato"
          className="font-serifa text-tinta text-4xl font-semibold md:text-5xl"
        >
          Vamos criar o seu?
        </h2>
        <p className="text-suave mt-3">
          Chame para um orçamento sem compromisso
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={linkWhatsapp(mensagemPadrao)}
            target="_blank"
            rel="noreferrer"
            className="bg-terracota hover:bg-terracota-escuro inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-md transition-colors sm:w-auto"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            {contato.whatsappExibicao}
          </a>
          <a
            href={linkInstagram}
            target="_blank"
            rel="noreferrer"
            className="text-terracota inline-flex items-center gap-2 font-semibold"
          >
            <IconeInstagram className="size-5" />@{contato.instagram}
          </a>
        </div>
        <a
          href={`mailto:${contato.email}`}
          className="text-suave hover:text-terracota mt-6 inline-flex items-center gap-2 text-sm"
        >
          <Mail className="size-4" aria-hidden="true" />
          {contato.email}
        </a>
      </div>
    </section>
  )
}

export function Rodape() {
  return (
    <footer className="border-borda border-t px-5 py-10 text-center">
      <p className="font-assinatura text-terracota text-3xl">
        Camila Germano Rodrigues
      </p>
      <p className="text-suave mt-3 text-xs">
        © {new Date().getFullYear()} Camila Germano. Criação de sites
        personalizados.
      </p>
    </footer>
  )
}
