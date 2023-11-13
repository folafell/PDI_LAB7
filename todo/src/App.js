import React from 'react'
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './AddTodo';


function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Покормить кота'},
    {id: 2, completed: false, title: 'Сделать 40 отжиманий'},
    {id: 3, completed: false, title: 'Помыть посуду'},
    {id: 4, completed: false, title: 'Подстричь овец'},
    {id: 5, completed: false, title: 'Собрать огурцы'}
  ])

  function toggleTodo(id){
    setTodos(
      todos.map(todo =>{
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id)
  {
    setTodos(todos.filter(todo => todo.id !== id)) 
  }
  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }
  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
        <h1>Планировщик задач</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>Список пуст</p>}
    </div>
    </Context.Provider>
  )
}

export default App;
