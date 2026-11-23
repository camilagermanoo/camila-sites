import { useState } from 'react'
import type { ReactNode } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
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
import { Divisor, IconeInstagram } from './Icones'
import { Revelar } from './Revelar'

function Titulo({
  sobretitulo,
  titulo,
  id,
  claro = false,
}: {
  sobretitulo: string
  titulo: string
  id: string
  claro?: boolean
}) {
  return (
    <Revelar className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p
        className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase ${
          claro ? 'text-rosa bg-white/10' : 'bg-blush text-vinho'
        }`}
      >
        <Sparkles className="size-3.5" aria-hidden="true" />
        {sobretitulo}
      </p>
      <h2
        id={id}
        className={`font-serifa text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl ${
          claro ? 'text-creme' : 'text-tinta'
        }`}
      >
        {titulo}
      </h2>
    </Revelar>
  )
}

function BotaoWhatsapp({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={linkWhatsapp(mensagemPadrao)}
      target="_blank"
      rel="noreferrer"
      className={`group bg-vinho hover:bg-vinho-escuro inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-white shadow-[0_18px_40px_-15px_rgb(123_45_67/0.8)] transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <MessageCircle
        className="size-5 transition-transform group-hover:rotate-12"
        aria-hidden="true"
      />
      {children}
    </a>
  )
}

export function Inicio() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-inicio"
      className="granulado relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20"
    >
      <div className="mx-auto max-w-4xl px-5 pt-16 pb-20 text-center md:pt-28 md:pb-28">
        <Revelar>
          <p className="text-vinho inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase shadow-sm backdrop-blur">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Criação de sites personalizados
          </p>
        </Revelar>
        <Revelar atraso={100}>
          <h1
            id="titulo-inicio"
            className="font-serifa text-tinta mt-7 text-[2.75rem] leading-[1.04] font-medium tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="texto-degrade block pb-1 italic">a sua ideia</span>{' '}
            merece um site
            <br className="hidden sm:block" /> bonito de verdade
          </h1>
        </Revelar>
        <Revelar atraso={200}>
          <p className="text-suave mx-auto mt-7 max-w-xl text-base leading-relaxed md:text-lg">
            Crio sites delicados, modernos e fáceis de usar para eventos,
            negócios, projetos pessoais e tudo o que você imaginar.
          </p>
        </Revelar>
        <Revelar
          atraso={300}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <BotaoWhatsapp className="w-full sm:w-auto">
            Quero meu site
          </BotaoWhatsapp>
          <a
            href="#exemplos"
            className="text-vinho border-vinho/25 inline-flex w-full items-center justify-center gap-1.5 rounded-full border bg-white/60 px-7 py-4 font-semibold backdrop-blur transition-colors hover:bg-white sm:w-auto"
          >
            Ver exemplos
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Revelar>
        <Revelar atraso={400}>
          <ul className="text-suave mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {[
              'Feito sob medida',
              'Perfeito no celular',
              'Orçamento sem compromisso',
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="text-vinho size-4" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Revelar>
        <Revelar atraso={500} className="mt-14">
          <Divisor />
        </Revelar>
      </div>
    </section>
  )
}

export function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="titulo-servicos"
      className="px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Titulo
          id="titulo-servicos"
          sobretitulo="O que eu faço"
          titulo="Sites para cada momento"
        />
        <ul className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {servicos.map((item, indice) => {
            const Icone = item.icone
            return (
              <Revelar
                como="li"
                key={item.titulo}
                atraso={indice * 80}
                className="group border-borda hover:border-rosa relative overflow-hidden rounded-3xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(123_45_67/0.45)]"
              >
                <span
                  aria-hidden="true"
                  className="bg-blush absolute -top-10 -right-10 size-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-start justify-between">
                  <span className="bg-blush text-vinho group-hover:bg-vinho flex size-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white">
                    <Icone className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-serifa text-rosa text-2xl italic">
                    {String(indice + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serifa text-tinta relative mt-6 text-2xl font-medium">
                  {item.titulo}
                </h3>
                <p className="text-suave relative mt-2 leading-relaxed">
                  {item.descricao}
                </p>
              </Revelar>
            )
          })}
        </ul>
        <Revelar className="mt-12 text-center">
          <p className="text-suave">
            Tem outra ideia?{' '}
            <a
              href={linkWhatsapp(mensagemPadrao)}
              target="_blank"
              rel="noreferrer"
              className="text-vinho decoration-rosa font-semibold underline decoration-2 underline-offset-4 hover:decoration-current"
            >
              É só me contar que eu crio do seu jeito.
            </a>
          </p>
        </Revelar>
      </div>
    </section>
  )
}

export function Diferenciais() {
  return (
    <section
      aria-labelledby="titulo-diferenciais"
      className="bg-noite relative overflow-hidden px-5 py-24 md:py-32"
    >
      <span
        aria-hidden="true"
        className="bg-vinho/60 absolute -top-40 -left-40 size-[28rem] rounded-full blur-3xl"
      />
      <span
        aria-hidden="true"
        className="bg-dourado/20 absolute -right-32 -bottom-40 size-[26rem] rounded-full blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <Titulo
          id="titulo-diferenciais"
          sobretitulo="Por que ter um site"
          titulo="Bonito, prático e do seu jeito"
          claro
        />
        <ul className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {diferenciais.map((item, indice) => {
            const Icone = item.icone
            return (
              <Revelar
                como="li"
                key={item.titulo}
                atraso={indice * 90}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors duration-300 hover:bg-white/[0.08]"
              >
                <span className="from-rosa to-pessego text-noite flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br">
                  <Icone className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-serifa text-creme mt-6 text-2xl font-medium">
                  {item.titulo}
                </h3>
                <p className="text-creme/70 mt-2 leading-relaxed">
                  {item.descricao}
                </p>
              </Revelar>
            )
          })}
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
      className="px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Titulo
          id="titulo-como-funciona"
          sobretitulo="Como funciona"
          titulo="Simples do começo ao fim"
        />
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden="true"
            className="via-rosa absolute top-10 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-transparent to-transparent md:block"
          />
          <span
            aria-hidden="true"
            className="via-rosa absolute top-10 bottom-10 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-transparent md:hidden"
          />
          {etapas.map((etapa, indice) => (
            <Revelar
              como="li"
              key={etapa.numero}
              atraso={indice * 150}
              className="relative text-center"
            >
              <span className="border-rosa bg-creme font-serifa text-vinho relative mx-auto flex size-20 items-center justify-center rounded-full border-2 text-3xl italic shadow-[0_15px_35px_-15px_rgb(123_45_67/0.5)]">
                {etapa.numero}
              </span>
              <p className="bg-creme text-tinta relative mx-auto mt-5 max-w-[15rem] py-1 text-lg font-medium">
                {etapa.titulo}
              </p>
            </Revelar>
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
      className="bg-blush/60 px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Titulo
          id="titulo-exemplos"
          sobretitulo="Trabalhos"
          titulo="Sites que já estão no ar"
        />
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {exemplos.map((exemplo, indice) => (
            <Revelar
              como="li"
              key={exemplo.url}
              atraso={indice * 120}
              className="group border-borda flex flex-col overflow-hidden rounded-3xl border bg-white transition-shadow duration-300 hover:shadow-[0_40px_80px_-40px_rgb(123_45_67/0.5)]"
            >
              <a
                href={exemplo.url}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="from-blush to-pessego/40 block bg-gradient-to-br p-5 pb-0 md:p-7 md:pb-0"
              >
                <div className="overflow-hidden rounded-t-xl bg-white shadow-[0_-10px_40px_-20px_rgb(74_26_42/0.35)]">
                  <div className="border-borda flex items-center gap-1.5 border-b px-3 py-2">
                    <span className="bg-rosa size-2.5 rounded-full" />
                    <span className="bg-dourado/60 size-2.5 rounded-full" />
                    <span className="bg-borda size-2.5 rounded-full" />
                    <span className="bg-creme text-suave ml-2 truncate rounded-full px-3 py-0.5 text-[11px]">
                      {new URL(exemplo.url).host}
                    </span>
                  </div>
                  <img
                    src={exemplo.capa}
                    alt=""
                    loading="lazy"
                    width={1200}
                    height={658}
                    className="aspect-[1200/658] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </a>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <span className="bg-blush text-vinho w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                  {exemplo.categoria}
                </span>
                <h3 className="font-serifa text-tinta mt-4 text-3xl font-medium">
                  {exemplo.nome}
                </h3>
                <p className="text-suave mt-2 flex-1 leading-relaxed">
                  {exemplo.descricao}
                </p>
                <a
                  href={exemplo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-vinho mt-6 inline-flex w-fit items-center gap-1.5 font-semibold"
                >
                  Ver o site
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Revelar>
          ))}
          <Revelar
            como="li"
            atraso={exemplos.length * 120}
            className="bg-noite relative flex flex-col items-center justify-center overflow-hidden rounded-3xl p-8 text-center md:col-span-2 md:p-12 lg:col-span-1"
          >
            <span
              aria-hidden="true"
              className="bg-vinho/70 absolute -top-20 -right-20 size-64 rounded-full blur-3xl"
            />
            <span
              aria-hidden="true"
              className="font-assinatura text-rosa relative text-5xl"
            >
              você?
            </span>
            <p className="font-serifa text-creme relative mt-4 text-3xl font-medium">
              O próximo pode ser o seu
            </p>
            <p className="text-creme/70 relative mt-3">
              Me conte a sua ideia e vamos tirar ela do papel.
            </p>
            <BotaoWhatsapp className="relative mt-8 text-sm">
              Conversar agora
            </BotaoWhatsapp>
          </Revelar>
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
      className="px-5 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[auto_1fr] md:gap-16">
        <Revelar className="relative mx-auto">
          <div
            aria-hidden="true"
            className="from-blush via-rosa to-pessego relative flex size-48 items-center justify-center rounded-full bg-gradient-to-br shadow-[0_30px_60px_-25px_rgb(123_45_67/0.6)] md:size-64"
          >
            <span className="font-assinatura text-vinho text-7xl md:text-8xl">
              CG
            </span>
          </div>
        </Revelar>
        <Revelar atraso={150} className="text-center md:text-left">
          <p className="bg-blush text-vinho mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Quem sou eu
          </p>
          <h2
            id="titulo-sobre"
            className="font-serifa text-tinta text-4xl font-medium tracking-tight md:text-5xl"
          >
            Oi, eu sou a <span className="texto-degrade italic">Camila!</span>
          </h2>
          <p className="text-suave mt-6 leading-relaxed">
            Sou desenvolvedora web, formada em Análise e Desenvolvimento de
            Sistemas, e trabalho com React e TypeScript, tecnologias modernas
            usadas no mercado. Gosto de unir código bem feito com um visual
            delicado, para que o seu site seja bonito e funcione de verdade.
          </p>
          <p className="text-suave mt-4 leading-relaxed">
            Cada projeto é único: eu escuto a sua ideia e crio um site com a sua
            identidade, do jeitinho que você imaginou.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {[
              'Formada em ADS',
              'React e TypeScript',
              'Atendimento pelo WhatsApp',
            ].map((item) => (
              <li
                key={item}
                className="border-borda text-tinta rounded-full border bg-white px-4 py-2 text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href={contato.portfolio}
            target="_blank"
            rel="noreferrer"
            className="text-vinho decoration-rosa mt-7 inline-block font-semibold underline decoration-2 underline-offset-4 hover:decoration-current"
          >
            Conheça meu portfólio de desenvolvedora{' '}
            <ArrowUpRight
              className="inline size-4 align-[-2px]"
              aria-hidden="true"
            />
          </a>
        </Revelar>
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
      className="bg-blush/60 px-5 py-24 md:py-32"
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
              <Revelar
                como="li"
                key={item.pergunta}
                atraso={indice * 70}
                className={`rounded-2xl border bg-white transition-shadow duration-300 ${
                  estaAberta
                    ? 'border-rosa shadow-[0_20px_50px_-30px_rgb(123_45_67/0.5)]'
                    : 'border-borda'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={estaAberta}
                    aria-controls={idResposta}
                    onClick={() => setAberta(estaAberta ? null : indice)}
                    className="text-tinta flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold md:px-7"
                  >
                    {item.pergunta}
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        estaAberta
                          ? 'bg-vinho rotate-180 text-white'
                          : 'bg-blush text-vinho'
                      }`}
                    >
                      <ChevronDown className="size-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div
                  id={idResposta}
                  inert={!estaAberta}
                  aria-hidden={!estaAberta}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    estaAberta ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-suave px-5 pb-6 leading-relaxed md:px-7">
                      {item.resposta}
                    </p>
                  </div>
                </div>
              </Revelar>
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
      className="px-5 py-24 md:py-32"
    >
      <Revelar className="from-vinho via-vinho-escuro to-noite relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br px-6 py-16 text-center md:px-16 md:py-20">
        <span
          aria-hidden="true"
          className="bg-rosa/30 absolute -top-24 -left-24 size-72 rounded-full blur-3xl"
        />
        <span
          aria-hidden="true"
          className="bg-dourado/25 absolute -right-24 -bottom-24 size-72 rounded-full blur-3xl"
        />
        <div className="relative">
          <span
            aria-hidden="true"
            className="font-assinatura text-rosa text-4xl md:text-5xl"
          >
            vamos lá?
          </span>
          <h2
            id="titulo-contato"
            className="font-serifa text-creme mt-3 text-4xl font-medium tracking-tight md:text-6xl"
          >
            Vamos criar o seu?
          </h2>
          <p className="text-creme/75 mt-4 text-lg">
            Chame para um orçamento sem compromisso
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href={linkWhatsapp(mensagemPadrao)}
              target="_blank"
              rel="noreferrer"
              className="text-vinho inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold shadow-[0_20px_40px_-15px_rgb(0_0_0/0.5)] transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {contato.whatsappExibicao}
            </a>
            <a
              href={linkInstagram}
              target="_blank"
              rel="noreferrer"
              className="text-creme inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold transition-colors hover:bg-white/10 sm:w-auto"
            >
              <IconeInstagram className="size-5" />@{contato.instagram}
            </a>
          </div>
          <a
            href={`mailto:${contato.email}`}
            className="text-creme/70 hover:text-creme mt-7 inline-flex items-center gap-2 text-sm transition-colors"
          >
            <Mail className="size-4" aria-hidden="true" />
            {contato.email}
          </a>
        </div>
      </Revelar>
    </section>
  )
}

export function Rodape() {
  return (
    <footer className="border-borda border-t px-5 pt-10 pb-24 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p className="font-assinatura text-vinho text-3xl">
          Camila Germano Rodrigues
        </p>
        <p className="text-suave text-xs">
          © {new Date().getFullYear()} Camila Germano. Criação de sites
          personalizados.
        </p>
      </div>
    </footer>
  )
}
