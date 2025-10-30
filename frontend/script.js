const API_URL = "http://localhost:3000/tarefas";
const lista = document.getElementById("lista-tarefas");
const input = document.getElementById("descricao");
const botao = document.getElementById("adicionar");

// Carregar todas as tarefas
async function carregarTarefas() {
  const res = await fetch(API_URL);
  const tarefas = await res.json();

  lista.innerHTML = "";
  tarefas.forEach((tarefa) => {
    const li = document.createElement("li");
    li.classList.toggle("feito", tarefa.feito);

    const span = document.createElement("span");
    span.textContent = tarefa.descricao;
    span.style.flex = "1";
    span.onclick = () => alternarFeito(tarefa);

    // Botão editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "✏️";
    btnEditar.onclick = () => editarTarefa(tarefa);

    // Botão excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "🗑️";
    btnExcluir.onclick = () => deletarTarefa(tarefa.id);

    li.append(span, btnEditar, btnExcluir);
    lista.appendChild(li);
  });
}

// Adicionar tarefa
botao.addEventListener("click", async () => {
  const descricao = input.value.trim();
  if (!descricao) return alert("Digite uma tarefa!");

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descricao }),
  });

  input.value = "";
  carregarTarefas();
});

// Excluir tarefa
async function deletarTarefa(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  carregarTarefas();
}

// Editar tarefa
async function editarTarefa(tarefa) {
  const novaDescricao = prompt("Editar tarefa:", tarefa.descricao);
  if (!novaDescricao || novaDescricao.trim() === tarefa.descricao) return;

  await fetch(`${API_URL}/${tarefa.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descricao: novaDescricao.trim() }),
  });

  carregarTarefas();
}

// Marcar ou desmarcar tarefa como feita
async function alternarFeito(tarefa) {
  await fetch(`${API_URL}/${tarefa.id}/feito`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ feito: !tarefa.feito }),
  });

  carregarTarefas();
}

carregarTarefas();
