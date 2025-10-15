# Todo List Recoil

Um aplicativo web desenvolvido em **React** que permite criar, gerenciar e filtrar tarefas de forma simples e intuitiva.  
Este projeto foi criado como parte dos estudos de **gerenciamento de estado com Recoil**, explorando a arquitetura de componentes reativos e boas práticas de organização de código no front-end.

---

## Funcionalidades

- ➕ Adicionar novas tarefas  
- ✅ Marcar tarefas como concluídas  
- 🗑️ Remover tarefas  
- 🔍 Filtrar por status (todas, ativas, concluídas)  
- 💾 Persistência local com `localStorage`

---

## Tecnologias utilizadas

- **React 18** – Framework principal da aplicação  
- **Recoil** – Gerenciamento global de estado  
- **Vite** – Ambiente de build e desenvolvimento rápido  
- **TypeScript** *(opcional, caso tenha sido usado)*  
- **CSS Modules / Tailwind** *(ajustar conforme o seu setup)*

---

## Estrutura do Projeto

```
src/
 ├── components/        # Componentes reutilizáveis (TodoItem, TodoList, etc.)
 ├── recoil/            # Atoms e selectors do Recoil
 ├── pages/             # Páginas principais da aplicação
 ├── App.jsx            # Estrutura base da aplicação
 ├── main.jsx           # Ponto de entrada
 └── styles/            # Estilos globais
```

---

## 🛠️ Como rodar o projeto localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/katerine-dev/TodoListRecoil.git
   cd TodoListRecoil
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:5173
   ```

---

## 🧹 Lint e formatação

Para garantir a qualidade do código e padronização:

```bash
npm run lint
```

---

## 🧪 Testes

*(Se houver testes configurados)*  
Execute a suíte de testes automatizados:

```bash
npm test
```

---

## 🏗️ Build de produção

Gere os arquivos otimizados para deploy:

```bash
npm run build
```

Os arquivos compilados ficarão disponíveis na pasta `/dist`.

---

## ⚙️ CI/CD

Este projeto utiliza **GitHub Actions** para integração e entrega contínuas.  
O pipeline é executado automaticamente a cada `push` na branch `main` e realiza as seguintes etapas:

1. 🧩 **Instalação das dependências**
2. 🔍 **Lint** – Verifica a qualidade do código
3. 🏗️ **Build** – Compila a aplicação
4. 🚀 **Deploy** – Publica automaticamente no GitHub Pages *(ou Vercel, conforme configuração)*

Arquivo do workflow: `.github/workflows/main.yml`

---

## 🖼️ Interface

![App Screenshot](./public/Screenshot.png)

---

## 💡 Sobre o Projeto

Este Todo List foi desenvolvido como exercício prático para consolidar o aprendizado sobre **estado global com Recoil** e **componentização no React**.  
Além de explorar a biblioteca, a proposta inclui a aplicação de boas práticas de estruturação e versionamento de projetos front-end modernos.

---

## 🧑‍💻 Autoria

Desenvolvido por **[Katerine Witkoski](https://github.com/katerine-dev)**  
📫 [LinkedIn](https://www.linkedin.com/in/katerinewitkoski)
