async function addTodo() {
  const text = document.getElementById('input').value;
  const name = prompt('Your name?');

  await fetch('https://tinkr.tech/sdb/roland/my_todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: text, name: name })
  });

  document.getElementById('input').value = '';
  loadTodos();
}

async function loadTodos() {
  const response = await fetch('https://tinkr.tech/sdb/roland/my_todos');
  const todos = await response.json();

  const list = document.getElementById('list');
  list.innerHTML = '';

  for (const todo of todos) {
    list.innerHTML += '<li>' + todo.name + ': ' + todo.text + '</li>';
  }
}

loadTodos();
