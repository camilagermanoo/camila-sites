import type { ReactNode } from 'react'
import { Gift, Heart, MapPin, MessageCircle } from 'lucide-react'
import { contato } from '../content'
import { Revelar } from './Revelar'

function Celular({
  children,
  rotulo,
  className = '',
  tamanho = 'lateral',
}: {
  children: ReactNode
  rotulo: string
  className?: string
  tamanho?: 'lateral' | 'central'
}) {
  const medidas =
    tamanho === 'central'
      ? 'w-36 h-[18rem] sm:w-48 sm:h-[24rem]'
      : 'w-28 h-[15rem] sm:w-40 sm:h-[20rem]'
  return (
    <div className={className}>
      <div className="bg-noite rounded-[2rem] p-1.5 shadow-[0_35px_70px_-30px_rgb(43_23_32/0.65)] transition-transform duration-500 hover:-translate-y-2">
        <div
          className={`bg-creme relative flex flex-col overflow-hidden rounded-[1.6rem] ${medidas}`}
        >
          <span className="bg-noite absolute top-1.5 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full" />
          {children}
        </div>
      </div>
      <p className="text-vinho mt-4 text-center text-xs font-semibold tracking-[0.18em] uppercase">
        {rotulo}
      </p>
    </div>
  )
}

function TelaCasamento() {
  return (
    <>
      <div className="from-blush to-rosa/70 flex flex-col items-center bg-gradient-to-b px-3 pt-7 pb-5 text-center">
        <Heart className="text-vinho size-4 fill-current" />
        <p className="font-assinatura text-vinho mt-1 text-xl leading-tight sm:text-2xl">
          Nosso casamento
        </p>
        <p className="text-suave mt-1 text-[8px] tracking-[0.25em] uppercase sm:text-[9px]">
          Save the date
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <span className="bg-vinho rounded-full py-1.5 text-center text-[8px] font-semibold text-white sm:text-[9px]">
          Confirmar presença
        </span>
        <span className="border-borda text-tinta flex items-center gap-1.5 rounded-xl border bg-white px-2 py-1.5 text-[8px] font-medium sm:text-[9px]">
          <Gift className="text-vinho size-3" />
          Lista de presentes
        </span>
        <span className="border-borda text-tinta flex items-center gap-1.5 rounded-xl border bg-white px-2 py-1.5 text-[8px] font-medium sm:text-[9px]">
          <MapPin className="text-vinho size-3" />
          Local da festa
        </span>
      </div>
    </>
  )
}

function TelaLinkNaBio() {
  return (
    <div className="from-blush via-creme to-creme flex flex-1 flex-col items-center bg-gradient-to-b px-3 pt-9 sm:px-4 sm:pt-11">
      <span className="bg-vinho font-assinatura flex size-12 items-center justify-center rounded-full text-xl text-white shadow-md sm:size-14 sm:text-2xl">
        CG
      </span>
      <p className="text-tinta mt-2 text-[10px] font-semibold sm:text-xs">
        Camila Germano
      </p>
      <p className="text-suave text-[8px] sm:text-[9px]">
        @{contato.instagram}
      </p>
      <div className="mt-4 flex w-full flex-col gap-2">
        {['WhatsApp', 'Instagram', 'Portfólio'].map((rotulo, indice) => (
          <span
            key={rotulo}
            className={`rounded-full py-2 text-center text-[9px] font-semibold sm:text-[10px] ${
              indice === 0
                ? 'bg-vinho text-white'
                : 'text-vinho border-rosa border bg-white'
            }`}
          >
            {rotulo}
          </span>
        ))}
      </div>
    </div>
  )
}

function TelaCardapio() {
  return (
    <>
      <div className="px-3 pt-7 pb-2">
        <p className="font-serifa text-tinta text-base font-medium sm:text-lg">
          Cardápio
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {['Bolos', 'Doces', 'Salgados'].map((item, indice) => (
            <span
              key={item}
              className={`rounded-full px-1.5 py-0.5 text-[7px] font-semibold sm:text-[8px] ${
                indice === 0 ? 'bg-vinho text-white' : 'bg-blush text-vinho'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-3">
        {['from-rosa to-pessego', 'from-pessego to-dourado/60'].map((cor) => (
          <div
            key={cor}
            className="border-borda flex items-center gap-2 rounded-xl border bg-white p-1.5"
          >
            <span
              className={`size-7 shrink-0 rounded-lg bg-gradient-to-br sm:size-8 ${cor}`}
            />
            <span className="flex flex-1 flex-col gap-1">
              <span className="bg-tinta/15 h-1.5 w-4/5 rounded-full" />
              <span className="bg-tinta/10 h-1.5 w-1/2 rounded-full" />
            </span>
          </div>
        ))}
      </div>
      <div className="p-3">
        <span className="flex items-center justify-center gap-1 rounded-full bg-emerald-600 py-1.5 text-[8px] font-semibold text-white sm:text-[9px]">
          <MessageCircle className="size-3" />
          Pedir pelo WhatsApp
        </span>
      </div>
    </>
  )
}

export function Vitrine() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex w-full max-w-lg items-end justify-center pt-4"
    >
      <span className="from-rosa/50 to-pessego/40 absolute inset-x-6 top-10 bottom-16 rounded-full bg-gradient-to-br blur-3xl" />
      <Revelar atraso={350} className="relative z-0 -mr-6 mb-6 sm:-mr-8">
        <Celular rotulo="Casamento" className="-rotate-6">
          <TelaCasamento />
        </Celular>
      </Revelar>
      <Revelar atraso={200} className="relative z-10">
        <Celular rotulo="Link na bio" tamanho="central">
          <TelaLinkNaBio />
        </Celular>
      </Revelar>
      <Revelar atraso={500} className="relative z-0 mb-6 -ml-6 sm:-ml-8">
        <Celular rotulo="Cardápio" className="rotate-6">
          <TelaCardapio />
        </Celular>
      </Revelar>
    </div>
  )
}
