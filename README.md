# GrupoSix -  Checkout

Este projeto é uma landing page desenvolvida com Next.js e Tailwind CSS, focada em apresentar ofertas, benefícios e métricas de um produto ou serviço, além de realizar o processo de checkout.

## Funcionalidades
- Apresentação de métricas e benefícios
- Exibição de depoimentos e vídeo
- Página de checkout para compra
- Página de agradecimento pós-compra
- Captação de parâmetros UTM para rastreamento de campanhas

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

## Tecnologias Utilizadas
- Next.js
- React
- Tailwind CSS
- TypeScript
- Lucide Icons

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

## Deploy
O projeto está pronto para deploy na Vercel. Basta conectar o repositório e seguir as instruções da plataforma.

## Autor
Projeto desenvolvido por GrupoSix.

---
Dúvidas ou sugestões? Abra uma issue ou entre em contato.
