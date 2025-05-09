<<<<<<< HEAD
<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
# 📦 **RastreioFast - Projeto de Rastreio de Entregas**

O **RastreioFast** é uma aplicação web onde os usuários podem rastrear o status de suas entregas e consultar os dados capturados de usuários autenticados.

Este projeto utiliza o Firebase para armazenar os dados de login, com funcionalidades de visualização e exportação de dados para PDF.
## 🚨 **Atensão**
* Esta é uma aplicação de rastreamento de entregas com coleta e exposição de dados sensíveis de usuários, simulando um cenário de phishing para fins educacionais ou demonstrativos.

## 🚀 **Funcionalidades**

- **Login de usuário:** Permite que o usuário faça login com e-mail e senha, armazenando informações no Firebase.
- **Rastreio de entregas:** Usuários autenticados podem inserir um código de rastreio para acompanhar o status da entrega.
- **Visualização de dados capturados:** Uma página exibe dados sobre os usuários autenticados, como e-mail, senha, IP, plataforma e horário de login.
- **Exportação de dados para PDF:** Permite exportar todos os dados da tabela para um arquivo PDF.

## 🛠️ **Tecnologias Utilizadas**

- **Frontend:**
  - **React**: Biblioteca para construção da interface.
  - **Material UI**: Biblioteca de componentes de UI.
  - **jspdf**: Biblioteca para criação de PDFs no frontend.
  - **jspdf-autotable**: Extensão do `jspdf` para criar tabelas no PDF.
  
- **Backend:**
  - **Firebase**: Para armazenar dados no Firestore e autenticação de usuários.

- **Outros:**
  - **React Router**: Para navegação entre as páginas.

## 📑 **Estrutura do Projeto**

```bash
/src
  /components
    LoginForm.tsx              # Componente de Login e rastreio
    VictimTablePage.tsx        # Página de visualização dos dados capturados
  /services
    firebase.ts                # Configuração do Firebase
  /assets
    ...                        # Arquivos de imagens, ícones, etc.
  App.tsx                      # Componente principal de navegação
  index.tsx                    # Arquivo de entrada da aplicação

```


## 🔧 **Instalação e Configuração**

### 1. **Clone o Repositório**

- **Primeiro,** clone o repositório para sua máquina local:

```bash
git clone https://github.com/joaocarpim/phishing-RastreadorFast.git
cd rastreio-fast
```
### 2. Instale as Dependências
- **Instale** todas as dependências do projeto:

```bash
npm install

```

### 3. Configuração do Firebase
- **Crie** um novo projeto no Firebase Console.

- **Habilite** o Firestore e configure as regras de segurança.

- **Crie** um arquivo firebase.ts em /src/services/ e adicione as credenciais do seu projeto Firebase.

```bash
// src/services/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-app-id.firebaseapp.com",
  projectId: "seu-app-id",
  storageBucket: "seu-app-id.appspot.com",
  messagingSenderId: "seu-id",
  appId: "seu-app-id",
  measurementId: "seu-id"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

```

### 4. Inicie o projeto
**Para iniciar o projeto, execute o comando:**

```bash
npm start
```

**O servidor estará disponível em http://localhost:3000.**

## 🚨 **Aviso Importante:**

- **Segurança:** Nunca armazene senhas em texto claro em um banco de dados de produção. Este exemplo armazena senhas de forma simples para fins de demonstração. Para um sistema real, use uma estratégia de criptografia de senha segura.

- **Firebase Regras de Segurança:** Configure corretamente as regras de segurança do Firestore, permitindo que apenas usuários autenticados acessem os dados.

## 🎨 **Personalização e Expansões**

- **Design:** A interface foi construída com o Material UI, mas pode ser facilmente personalizada para se alinhar com seu design ou identidade visual.

### **Funções Adicionais:**

- **Filtros e Pesquisa:** Você pode adicionar filtros para buscar dados na tabela.

- **Paginação:** Se houver muitos dados, seria interessante adicionar paginação na tabela.

- **Exportação para CSV ou Excel:** Podemos expandir a exportação para formatos como CSV ou Excel usando bibliotecas como `xlsx`.

## 🤝 **Contribuição**

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir um pull request ou issue. Fique à vontade para melhorar a funcionalidade ou sugerir novas ideias!






>>>>>>> 1d2956ae88a16a797e3d19a2147be7c2bb7b6401
=======
# phishing-facebook
>>>>>>> 1bf1e5fe60544a4a4d3b713238951873ef4372cf
