# Lista de Tarefas – Projeto Fullstack (Frontend + Backend + MySQL)

## Descrição

Este projeto é uma aplicação de lista de tarefas (To-Do List) que permite:

* Adicionar, editar, excluir e marcar tarefas como concluídas.
* Integrar **frontend** (HTML, CSS, JS) com **backend** em Node.js/Express.
* Persistir dados em um banco de dados **MySQL**.

O projeto foi desenvolvido para fins didáticos, mostrando na prática como **frontend, backend e banco de dados** se comunicam através de uma **API REST**.

---

## Funcionalidades

* Listar tarefas existentes (GET)
* Adicionar novas tarefas (POST)
* Editar a descrição de tarefas (PUT)
* Marcar ou desmarcar tarefas como feitas (PATCH)
* Deletar tarefas (DELETE)

---

## Tecnologias

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **Banco de dados:** MySQL
* **Comunicação:** API REST via fetch

---

## Estrutura do Projeto

```
projeto-tarefas/
├── backend/
│   ├── db.js          # Conexão com MySQL
│   └── server.js      # Rotas da API
├── frontend/
│   ├── index.html     # Estrutura da interface
│   ├── script.js      # Interações com a API
│   └── style.css      # Estilos visuais
└── node_modules/      # Dependências do Node.js
```

---

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/mariaantoniadev/projeto-tarefas.git
```

2. Instale as dependências do backend:

```bash
cd backend
npm install
```

3. Configure o banco de dados MySQL:

```sql
CREATE DATABASE tarefas_db;
USE tarefas_db;

CREATE TABLE tarefas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(255),
  feito BOOLEAN DEFAULT false
);
```

4. Atualize o arquivo `db.js` com seu usuário e senha do MySQL:

```js
user: "root",
password: "SUA_SENHA",
database: "tarefas_db",
```

---

## Como executar

1. Rodar o backend:

```bash
cd backend
node server.js
```

Servidor rodando em: `http://localhost:3000`

2. Abrir o frontend:

* Abra `frontend/index.html` em seu navegador.
* Digite tarefas, marque como feitas, edite e exclua.

---

## Exemplo de Uso

* Adicionar tarefa: digitar no campo e clicar em "Adicionar"
* Editar tarefa: clicar no lápis ✏️
* Excluir tarefa: clicar na lixeira 🗑️
* Marcar como concluída: clicar no texto da tarefa

---

## Exercícios e Desafios

* Filtrar tarefas concluídas / pendentes
* Adicionar contador de tarefas pendentes
* Melhorar design (cores, fontes, layout)
* Ordenar tarefas por ID ou descrição

---

## Licença

Projeto desenvolvido para fins educacionais.
