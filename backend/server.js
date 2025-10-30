import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Listar tarefas
app.get("/tarefas", (req, res) => {
  db.query("SELECT * FROM tarefas", (err, results) => {
    if (err) return res.status(500).send("Erro ao buscar tarefas");
    res.json(results);
  });
});

// Adicionar tarefa
app.post("/tarefas", (req, res) => {
  const { descricao } = req.body;
  if (!descricao) return res.status(400).send("Descrição é obrigatória");

  db.query("INSERT INTO tarefas (descricao) VALUES (?)", [descricao], (err) => {
    if (err) return res.status(500).send("Erro ao adicionar tarefa");
    res.sendStatus(200);
  });
});

// Excluir tarefa
app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM tarefas WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send("Erro ao deletar tarefa");
    res.sendStatus(200);
  });
});

// Editar tarefa 
app.put("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const { descricao } = req.body;

  if (!descricao) return res.status(400).send("Descrição é obrigatória");

  db.query("UPDATE tarefas SET descricao = ? WHERE id = ?", [descricao, id], (err) => {
    if (err) return res.status(500).send("Erro ao editar tarefa");
    res.sendStatus(200);
  });
});

// Marcar ou desmarcar tarefa como feita
app.patch("/tarefas/:id/feito", (req, res) => {
  const { id } = req.params;
  const { feito } = req.body;

  db.query("UPDATE tarefas SET feito = ? WHERE id = ?", [feito, id], (err) => {
    if (err) return res.status(500).send("Erro ao atualizar status da tarefa");
    res.sendStatus(200);
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
