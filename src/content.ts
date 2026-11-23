import type { LucideIcon } from 'lucide-react'
import capaAdrianoNoronha from './assets/adriano-noronha-capa.webp'
import {
  Gift,
  Heart,
  House,
  Link,
  Palette,
  Share2,
  Smartphone,
  Store,
  User,
  MessageCircle,
} from 'lucide-react'

export const contato = {
  whatsappExibicao: '(61) 99945-6990',
  whatsappNumero: '5561999456990',
  instagram: 'camygermano',
  email: 'camyrodrigues23@gmail.com',
  portfolio: 'https://camilagermanoo.github.io/',
}

export function linkWhatsapp(mensagem: string) {
  return `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(mensagem)}`
}

export const mensagemPadrao =
  'Olá, Camila! Vi o seu site e quero fazer um orçamento de site.'

export const linkInstagram = `https://instagram.com/${contato.instagram}`

export const navegacao = [
  { href: '#servicos', rotulo: 'Sites' },
  { href: '#como-funciona', rotulo: 'Como funciona' },
  { href: '#exemplos', rotulo: 'Exemplos' },
  { href: '#sobre', rotulo: 'Sobre mim' },
  { href: '#duvidas', rotulo: 'Dúvidas' },
]

export const letreiro = [
  'Casamentos',
  'Aniversários',
  'Chás de bebê',
  'Formaturas',
  'Convites digitais',
  'Negócios',
  'Cardápios',
  'Catálogos',
  'Portfólios',
  'Link na bio',
]

export type Servico = {
  titulo: string
  descricao: string
  icone: LucideIcon
}

export const servicos: Servico[] = [
  {
    titulo: 'Casamentos',
    descricao: 'Lista de presentes, confirmação de presença e site do casal.',
    icone: Heart,
  },
  {
    titulo: 'Festas e eventos',
    descricao: 'Aniversários, chás, formaturas e convites digitais.',
    icone: Gift,
  },
  {
    titulo: 'Negócios',
    descricao: 'Site profissional com serviços, contato e localização.',
    icone: House,
  },
  {
    titulo: 'Lojas e catálogos',
    descricao: 'Produtos ou cardápio com fotos e pedido pelo WhatsApp.',
    icone: Store,
  },
  {
    titulo: 'Portfólio pessoal',
    descricao: 'Mostre seu trabalho e sua história com estilo.',
    icone: User,
  },
  {
    titulo: 'Link na bio',
    descricao: 'Todos os seus links e redes em uma página só.',
    icone: Link,
  },
]

export const diferenciais: Servico[] = [
  {
    titulo: 'Perfeito no celular',
    descricao: 'O site se ajusta a qualquer tela, do celular ao computador.',
    icone: Smartphone,
  },
  {
    titulo: 'Com a sua cara',
    descricao: 'Cores, fontes e textos pensados para a sua identidade.',
    icone: Palette,
  },
  {
    titulo: 'Fácil de compartilhar',
    descricao:
      'Um link só para mandar no WhatsApp, no Instagram e onde quiser.',
    icone: Share2,
  },
  {
    titulo: 'Contato direto',
    descricao: 'Botões que levam o seu cliente direto para o seu WhatsApp.',
    icone: MessageCircle,
  },
]

export const etapas = [
  { numero: '01', titulo: 'Conversamos sobre a sua ideia' },
  { numero: '02', titulo: 'Crio o site com a sua identidade' },
  { numero: '03', titulo: 'Você compartilha com um link' },
]

export type Exemplo = {
  nome: string
  categoria: string
  descricao: string
  url: string
  capa: string
}

export const exemplos: Exemplo[] = [
  {
    nome: 'Adriano Noronha',
    categoria: 'Turismo',
    descricao:
      'Site de passeios em Fernando de Noronha, com reservas direto pelo WhatsApp.',
    url: 'https://adriano-noronha.vercel.app/',
    capa: capaAdrianoNoronha,
  },
]

export const duvidas = [
  {
    pergunta: 'Quanto custa um site?',
    resposta:
      'Cada site é feito sob medida, então o valor depende do que você precisa. Me chame no WhatsApp, me conte a sua ideia e eu preparo um orçamento sem compromisso.',
  },
  {
    pergunta: 'Preciso entender de tecnologia?',
    resposta:
      'Não. Você me conta o que imagina e eu cuido de toda a parte técnica. No final, você só precisa compartilhar o link.',
  },
  {
    pergunta: 'O site funciona no celular?',
    resposta:
      'Sim. Todos os sites são pensados primeiro para o celular, que é onde a maioria das pessoas vai abrir, e também ficam bonitos no computador.',
  },
  {
    pergunta: 'Você cuida da hospedagem e do domínio?',
    resposta:
      'Sim. Eu cuido de colocar o site no ar e do endereço dele, para você não ter que se preocupar com isso.',
  },
  {
    pergunta: 'E se a minha ideia não estiver na lista?',
    resposta:
      'Sem problema! Os tipos de site da lista são só exemplos. Me conte a sua ideia e eu crio do seu jeito.',
  },
]
