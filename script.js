async function addTodo() {

  let text = document.getElementById("input").value;

  let name = prompt("Sisesta oma nimi:");

  await fetch("https://tinkr.tech/sdb/roland/my_todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: text,
      name: name
    })
  });

  document.getElementById("input").value = "";

  loadTodos();
}


async function loadTodos() {

  let response = await fetch("https://tinkr.tech/sdb/roland/my_todos");

  let todos = await response.json();

  let list = document.getElementById("list");

  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {

    let todo = todos[i];

    list.innerHTML += "<li>" + todo.name + ": " + todo.text + "</li>";
  }
}

loadTodos();
