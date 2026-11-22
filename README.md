# Portfólio - Ian Marques

Esse é o meu portfólio, feito em React com Vite pra apresentar quem eu sou, o que já fiz e como me chamar. O site tem português e inglês.

Link do site: https://portfolio-ianmarques.onrender.com/

Repositório: https://github.com/ianmarques000/portfolio-react

## Seções

- Sobre mim
- Projetos
- Experiência
- Contato

O menu fica do lado esquerdo no computador e vai pra baixo da tela no celular. O botão de idioma fica no canto de cima e o site lembra qual você escolheu. No contato tem os links das minhas redes e um formulário que manda a mensagem direto pro meu e-mail.

## Tecnologias

- React 18
- Vite 5
- JavaScript
- CSS (sem biblioteca de componentes)
- EmailJS pro formulário
- Render pra hospedar

## Dependências

Do projeto:
- react
- react-dom
- @emailjs/browser

Só pra desenvolver:
- vite
- @vitejs/plugin-react

## Pastas

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
├── render.yaml
├── .env.example
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── assets/       imagens
    ├── components/   componentes de cada seção
    ├── css/          estilos
    ├── data/         textos (PT/EN), experiências, contatos e projetos
    ├── fonts/        fonte Open Sans
    ├── hooks/        useDock.js (menu lateral)
    └── i18n/         troca de idioma
```

## Rodando na sua máquina

Precisa ter o Node 18 ou mais novo.

```bash
git clone https://github.com/ianmarques000/portfolio-react.git
cd portfolio-react
npm install
cp .env.example .env
npm run dev
```

Abre em http://localhost:5173

Pra gerar o build: `npm run build` (e `npm run preview` pra testar ele).

## Formulário

O formulário usa o EmailJS. Pra funcionar você precisa de uma conta lá, com um serviço de e-mail e um template que use `from_name`, `from_email`, `reply_to` e `message`. Aí é só colocar os dados no `.env`:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Sem isso o formulário aparece mas avisa que não está configurado. No Render essas três variáveis também têm que ser cadastradas.

## Contato

LinkedIn: https://www.linkedin.com/in/ianpoty/
GitHub: https://github.com/ianmarques000