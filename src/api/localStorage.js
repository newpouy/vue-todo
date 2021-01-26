const addTodo = (todo) => {
  const todos = localStorage.getItem('todos')
  let todosArr = JSON.parse(todos)
  if(todosArr) {
    todosArr[todosArr.length] = { title: todo , content: todo }
  } else {
    todosArr = []
    todosArr[0] = { title: todo , content: todo }
  }
  localStorage.setItem('todos', JSON.stringify(todosArr))
  return 1
}

const getTodos = () => {
  return localStorage.getItem('todos')
}

export default {
  addTodo,
  getTodos
}