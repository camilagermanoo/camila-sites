import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import {
  duvidas,
  exemplos,
  linkWhatsapp,
  mensagemPadrao,
  servicos,
} from './content'

describe('site de vendas', () => {
  it('mostra o título principal', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /a sua ideia/i }),
    ).toBeInTheDocument()
  })

  it('lista todos os tipos de site', () => {
    render(<App />)
    const secao = screen.getByRole('region', {
      name: 'Sites para cada momento',
    })
    servicos.forEach((servico) => {
      expect(
        within(secao).getByRole('heading', { name: servico.titulo }),
      ).toBeInTheDocument()
    })
  })

  it('leva os botões de orçamento para o WhatsApp com mensagem pronta', () => {
    render(<App />)
    const botao = screen.getByRole('link', { name: /quero meu site/i })
    expect(botao).toHaveAttribute('href', linkWhatsapp(mensagemPadrao))
  })

  it('abre e fecha o menu do celular', async () => {
    const usuario = userEvent.setup()
    render(<App />)
    await usuario.click(screen.getByRole('button', { name: 'Abrir menu' }))
    expect(
      screen.getByRole('navigation', { name: 'Menu do celular' }),
    ).toBeInTheDocument()
    await usuario.click(screen.getByRole('button', { name: 'Fechar menu' }))
    expect(
      screen.queryByRole('navigation', { name: 'Menu do celular' }),
    ).not.toBeInTheDocument()
  })

  it('usa o menu do celular até a largura de computador', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Principal' })).toHaveClass(
      'hidden',
      'lg:block',
    )
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveClass(
      'lg:hidden',
    )
  })

  it('mostra a resposta ao clicar numa dúvida', async () => {
    const usuario = userEvent.setup()
    render(<App />)
    const pergunta = screen.getByRole('button', {
      name: duvidas[1].pergunta,
    })
    expect(pergunta).toHaveAttribute('aria-expanded', 'false')
    await usuario.click(pergunta)
    expect(pergunta).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(duvidas[1].resposta)).toBeVisible()
  })
})

describe('exemplos', () => {
  it('mostra a prévia da capa de cada site com link para ele', () => {
    render(<App />)
    const secao = screen.getByRole('region', {
      name: 'Sites que já estão no ar',
    })
    exemplos.forEach((exemplo) => {
      const capa = secao.querySelector(`img[src="${exemplo.capa}"]`)
      expect(capa).toBeInTheDocument()
      expect(capa?.closest('a')).toHaveAttribute('href', exemplo.url)
      expect(
        within(secao).getByRole('heading', { name: exemplo.nome }),
      ).toBeInTheDocument()
    })
  })
})

describe('linkWhatsapp', () => {
  it('monta o link com o número e a mensagem codificada', () => {
    expect(linkWhatsapp('Olá, tudo bem?')).toBe(
      'https://wa.me/5561999456990?text=Ol%C3%A1%2C%20tudo%20bem%3F',
    )
  })
})
