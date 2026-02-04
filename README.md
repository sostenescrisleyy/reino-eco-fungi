# 🍄 Reino Eco Fungi

O **Reino Eco Fungi** é uma plataforma dedicada ao ensino e disseminação do cultivo de cogumelos em clima tropical. Este projeto consiste na Landing Page oficial do curso, projetada para converter visitantes em alunos através de uma interface moderna, responsiva e persuasiva.

O projeto direciona os usuários para a plataforma **Kiwify** para a conclusão da compra e acesso ao conteúdo.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as mais modernas tecnologias de desenvolvimento web, garantindo performance, acessibilidade e facilidade de manutenção.

### Frontend
- **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e servidor de desenvolvimento.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida e responsiva.
- **[shadcn/ui](https://ui.shadcn.com/)**: Coleção de componentes de interface reutilizáveis e acessíveis.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e interações complexas.
- **[React Router](https://reactrouter.com/)**: Gerenciamento de rotas da aplicação.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.
- **[TanStack Query](https://tanstack.com/query/latest)**: Gerenciamento de estado assíncrono e data fetching.

### Backend / Integrações
- Este projeto opera como uma **SPA (Single Page Application)** sem backend próprio no repositório.
- **Integração Externa**: O fluxo de checkout e entrega do curso é integrado com a plataforma **Kiwify**.
- **Formulários**: Utiliza `react-hook-form` e `zod` para validação de dados no frontend.

## 📂 Estrutura do Projeto

```bash
reino-eco-fungi/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis (UI, Seções da Landing Page)
│   ├── contexts/        # Contextos do React (ex: LanguageContext)
│   ├── hooks/           # Custom Hooks
│   ├── lib/             # Utilitários e configurações (ex: utils.ts)
│   ├── pages/           # Páginas da aplicação (Index, ThankYou, NotFound)
│   ├── App.tsx          # Componente raiz e configuração de rotas
│   └── main.tsx         # Ponto de entrada da aplicação
├── package.json         # Dependências e scripts
├── tailwind.config.ts   # Configuração do Tailwind CSS
└── vite.config.ts       # Configuração do Vite
```

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente local.

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm, yarn ou bun

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd reino-eco-fungi
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
bun install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
bun dev
```

O projeto estará disponível em `http://localhost:8080` (ou outra porta indicada no terminal).

## 📦 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Cria a build de produção otimizada.
- `preview`: Visualiza a build de produção localmente.
- `lint`: Executa o ESLint para verificar problemas no código.

---

## 🎨 Créditos de Design e Desenvolvimento

Este projeto foi desenvolvido com excelência por **Maven Estúdio**.

**Maven Estúdio** - Especialistas em soluções digitais de alto impacto.
Visite nosso site: [mavenestudio.com.br](https://mavenestudio.com.br)
