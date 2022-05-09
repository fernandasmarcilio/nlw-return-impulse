![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
# Next Level Week Return - Trilha Impulse
Nesse curso projeto foi desenvolvido um projeto para envio de feedbacks. Link do projeto: [Feedget](https://nlw-return-impulse-kn5suhrs2-fernandasmarcilio.vercel.app/)

## 💪 O que aprendi
- Fundamentos do React
- Tailwind
- Acessibilidade
- Responsividade
- Conectar API utilizando axios
- Criar API com Prisma
- Como usar uma API de E-mail (nodemailer)
- Migrations
- Conceitos de SOLID
- Criar testes unitários
- Como fazer deploy (Vercel e Railway)

## 👩‍💻 Tecnologias utilizadas
- ReactJS
- Phosphor-react
- Html2canvas
- Headlessui
- NodeJS
- TypeScript
- TailwindCSS
- Axios
- Prisma
- Jest
- sqlite e postgresql

## 🔧 Instalação
Instale as depedências com o comando: ``npm install`` nas pastas web e server.

## 🔧 Executar o projeto
Executar os comandos: ``yarn dev`` na pasta web e server.

## 🛠 Configuração
### Web
Na pasta web, crie um arquivo ``.env.local`` e adicione a seguinte variável:
~~~
# Alterar para a url que o servidor esta rodando
VITE_API_URL=http://localhost:3333
~~~

### Server
Na pasta server, crie um arquivo ``.env`` e adicione a seguinte variável:
~~~
# Alterar para a url que o banco de dados esta rodando (Nesse caso exemplo é com sqlite)
DATABASE_URL="file:./dev.db"
~~~

Para rodar o sqlite troque ``postgresql`` para ``sqlite`` nos arquivos:
server/prisma/schema.prisma
~~~
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
~~~
server/primas/migrations/migrations_lock.toml
~~~
provider = "sqlite"
~~~
