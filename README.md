# Projeto - Frontend (Next.js)

## 📌 Visão Geral
Este projeto consiste em um frontend desenvolvido com **Next.js**, fornecendo uma interface amigável para interação do usuário.

---

## 🏗 Estrutura do Projeto
- `app/` - Estrutura principal do Next.js com as páginas e rotas.
- `components/` - Componentes reutilizáveis da aplicação.
- `interfaces/` - Definições de tipos e interfaces para TypeScript.
- `services/` - Módulos para comunicação com a API.
- `store/` - Gerenciamento de estado global com Zustand.
- `themes/` - Configuração de temas e estilos globais.
- `utils/` - Funções utilitárias.

---

## 📦 Dependências
As principais bibliotecas utilizadas no frontend são:
- **Axios** - Para requisições HTTP.
- **React Hook Form** - Gerenciamento de formulários.
- **Styled Components** - Estilização com CSS-in-JS.
- **Zustand** - Gerenciamento de estado.
- **Toastify** - Exibição de notificações.
- **TypeScript** - Tipagem estática para JavaScript.

Para instalar as dependências, utilize **npm** ou **yarn**:
```sh
npm install
# ou
yarn
```

---

## 🚀 Como Executar
Para rodar o frontend localmente, utilize:
```sh
npm run dev
# ou
yarn dev
```
A aplicação estará disponível em `http://localhost:3000`.

---

## 📡 Comunicação com o Backend
O frontend se comunica com o backend através de uma **API REST**, utilizando a biblioteca **Axios** para realizar as requisições HTTP.

---

## 📄 Scripts Disponíveis
- `npm run dev` - Inicia o servidor de desenvolvimento.
- `npm run build` - Gera os arquivos para produção.
- `npm run start` - Inicia o servidor em modo de produção.
- `npm run lint` - Verifica erros no código.

