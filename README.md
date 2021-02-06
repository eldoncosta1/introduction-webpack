# Configuração WebPack

Aprendendo a configurar o webpack através de aula introdutória ao ReactJS no Bootcamp da Digital Innovation One.

## Comandos para instalação

- npm install --save-dev webpack webpack-cli
- npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

### Criação de configuração do .babelrc

- npm i react react-dom
- npm i --save-dev html-webpack-plugin

### Criando um Dev Server

- npm i --save-dev webpack-dev-server

"scripts": {
  "start:dev" : "webpack-dev-server"
}

### Instalação do EsLint

- npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch

### Dicas para pensar do jeito ReactJS

- Comece com um Mock
- Separe a UI em uma hierarquia de componentes
- Crie uma versão estática em React
- Identifique a representação mínima (mas completa) do state da UI
- Identifique onde o state deve ficar
- Adicione o fluxo de dados inverso