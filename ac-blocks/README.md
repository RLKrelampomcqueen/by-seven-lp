# Blocos HTML para o ActiveCampaign

8 arquivos `.html` autocontidos, um por seção da LP, prontos para colar no editor
de páginas do ActiveCampaign (bloco de "HTML personalizado").

| Arquivo | Seção |
|---|---|
| `01-hero.html` | Hero (topo, com vídeo/overlay escuro) |
| `02-problema.html` | "O problema" |
| `03-produtos.html` | "O que entregamos" |
| `04-calculadora.html` | Calculadora de ROI |
| `05-depoimentos.html` | Depoimentos + selos |
| `06-cta-final.html` | CTA final |
| `07-agendar.html` | Cabeçalho da seção de agendamento — **sem o formulário** |
| `08-rodape.html` | Rodapé |

## Como usar

1. Abra cada arquivo, copie **todo o conteúdo** (é HTML completo, com `<style>` embutido).
2. No editor de páginas do AC, adicione um bloco de "HTML personalizado" e cole o conteúdo do arquivo dentro dele (o AC deve extrair o `<body>`; se pedir só o corpo, cole a partir da `<div class="byseven-lp-block">`).
3. Empilhe os blocos na ordem da tabela acima.
4. No bloco **07-agendar.html**, o formulário foi removido de propósito — insira ali o **widget de Formulário nativo do próprio AC** (arraste do editor), já que a página vai estar dentro do AC mesmo, não faz sentido reembutir via iframe externo.

## Avisos importantes

- **Cada bloco já traz o CSS inteiro do design system embutido** (tokens, fontes,
  reset do Tailwind). Isso é proposital — assim cada bloco funciona sozinho,
  não importa a ordem ou se algum for removido. Mas como consequência, **o
  CSS injetado é global à página** (não há isolamento tipo iframe): se você
  colar esses blocos numa página do AC que já tem outros elementos/seções,
  o reset do Tailwind pode alterar a aparência deles também (margens, fontes,
  cores de borda etc.). **Recomendado**: usar esses blocos numa página nova/
  em branco do AC, dedicada a essa LP — não misturar com conteúdo existente.
- As imagens (logo, etc.) apontam para o site já publicado
  (`https://rlkrelampomcqueen.github.io/by-seven-lp/`) — funcionam de
  qualquer lugar, mas dependem desse link continuar no ar.
- Os textos "reveal" (fade-in ao rolar a tela) foram capturados já no estado
  final (visível, `opacity:1`) — não têm mais a animação, aparecem estáticos
  direto. Isso é esperado: a página do AC não roda o React/Framer Motion do
  projeto original.
- Se a LP React (`by-seven-app`) for atualizada depois, estes blocos ficam
  desatualizados — não são gerados automaticamente. Peça pra regenerar caso
  mude alguma seção.
