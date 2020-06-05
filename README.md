
# CURSO JAVASCRIPT REAL (NPM, WEBPACK, ES6)

https://academy.especializati.com.br/curso/javascript-real-npm-webpack-es6

APRENDA A TRABALHAR COM CONCEITOS MODERNOS E AVANÇADOS DO JAVASCRIPT, NESSE CURSO PASSO A PASSO. APRENDA WEBPACK, ES6, NPM E MUITO MAIS.

## <a name="indice">Índice</a>

1. [Organização do Projeto](#parte1)     
2. [Gerenciar Módulos](#parte2)     
3. [Webpack](#parte3)     
---


## <a name="parte1">1 - Organização do Projeto</a>

#### 01 - Ferramentas Curso JavaScript Moderno 

- NODE


#### 02 - Iniciar Projeto JavaScript com NPM

```js
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "Curso Js Moderno",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "José Malcher Jr.",
  "license": "ISC"
}

```

[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - Gerenciar Módulos</a>

#### 03 - Baixar Dependências de Desenvolvimento JavaScript

-npm i webpack webpack-cli --save-dev

#### 04 - Baixar Dependências JavaScript com NPM

- npm i package

#### 05 - Instalar Módulos Globalmente com NPM

- npm -g modulo

#### 06 - Padrão CommonJS JavaScript

```js
console.log("TESTANDO OUTEHER.js");

module.exports = 123;
```

```js
const outherJS = require('./outher');

console.log(`Imprimindo de OutherJS ${outherJS}`);
```

#### 07 - Remover Módulo com NPM

- npm update
- npm unistall axios

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Webpack</a>

#### 08 - Apresentação do Webpack

- https://webpack.js.org/

#### 09 - Webpack entry e output

- [webpack/webpack.config.js](webpack/webpack.config.js)
```js
const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "development"
}
```

#### 10 - ES6 com Webpack

#### 11 - Webpack Mode

#### 12 - Webpack Autoreload e Watch

#### 13 - Gerar HTML com Webpack

#### 14 - Webpack Loaders - Carregar CSS

#### 15 - Webpack Loaders - Criar Arquivo CSS

#### 16 - Webpack Loader Arquivos SASS

#### 17 - Webpack Minificar Arquivos CSS

#### 18 - Webpack Load de Imagens


[Voltar ao Índice](#indice)

---

