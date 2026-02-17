# GrupoSix -  Checkout

Este projeto é uma landing page focada em apresentar ofertas, benefícios e métricas de um produto ou serviço, além de realizar o processo de checkout.

## Tecnologias
- Next.js – Otimização de SEO, roteamento baseado em arquivos e alta performance com renderização híbrida
- TypeScript – Tipagem estática para maior segurança, escalabilidade e redução de erros
- Tailwind CSS – Estilização ágil, design consistente e alta produtividade
- Arquitetura baseada em componentes – Reutilização, organização e escalabilidade
- Hooks customizados – Separação de responsabilidades e melhor controle da lógica de negócio

## Headline Principal Estratégica
A landing page foi estruturada com uma headline forte e orientada a benefício, com foco em:

- Comunicação clara da proposta de valor
- Aplicação de princípios de copywriting
- Uso estratégico de CTAs (Call to Action)
- Captura e persistência de UTMs para rastreamento de campanhas

--- 

## CTAs (Call to Action) Estratégicos
Captura automática e persistência dos seguintes parâmetros:

- Botões posicionados em pontos estratégicos da página
- Comunicação orientada à ação
- Direcionamento direto para o checkout
- Foco em reduzir fricção no processo de compra

## 📊 Rastreamento com UTM
Captura automática e persistência dos seguintes parâmetros:

- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content
### Permite análise de:
- Origem do tráfego
- Performance de campanhas
- Variação de criativos
- Efetividade de canais

## 🧱 Funcionalidades
- Apresentação de métricas e benefícios
- Seção de depoimentos
- Página de checkout
- Página de agradecimento pós-compra
- Captura automática de UTMs
- Estrutura organizada e escalável

## Estrutura do Projeto
```
gruposix/
├── public/
├── src/
│   └── app/
│       ├── components/   # Componentes reutilizáveis (Benefits, Metrics, Offer, etc)
│       ├── hooks/        # Hooks customizados (useFormData, useUTMParams)
│       ├── utils/        # Funções utilitárias
│       ├── checkout/     # Página de checkout
│       ├── obrigado/     # Página de agradecimento
│       ├── globals.css   # Estilos globais
│       ├── layout.tsx    # Layout principal
│       └── page.tsx      # Página inicial
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:3000` no navegador.

