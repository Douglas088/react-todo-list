import { useState } from 'react';
import './App.css';

export default function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Primeira tarefa',
      description: 'descrição da primeira tarefa',
    },
    {
      id: 2,
      title: 'Segunda tarefa',
      description: 'descrição da segunda tarefa',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  function handleAddNewTodo(event) {
    event.preventDefault();
    setTodo((todo) => {
      const newTodo = {
        id: todo.length ? todo[todo.length - 1].id + 1 : 1,
        title: inputValue,
        description: textareaValue,
      };
      return [...todo, newTodo];
    });

    setInputValue('');
    setTextareaValue('');
  }

  function handleRemoveTodo(id) {
    const newTodoList = todo.filter((todo) => todo.id !== id);
    setTodo(newTodoList);
  }

  return (
    <>
      <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>

      <main>
        <div>
          <form onSubmit={handleAddNewTodo}>
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              type="text"
              className="todo-input"
              placeholder="adicionar uma nova tarefa"
            />
            <textarea
              value={textareaValue}
              onChange={(event) => setTextareaValue(event.target.value)}
              placeholder="adicione uma descrição"
            ></textarea>
            <button type="submit">Adicionar</button>
          </form>
          <div className='container-tarefas'>
            {todo.map((todo) => (
              <div className='tarefas' key={todo.id}>
                <input type="checkbox" id={`todo-${todo.id}`} onClick={() => handleRemoveTodo(todo.id)} />
                <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
                <p>{todo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; Todos os direitos reservados</p>
      </footer>
      </div>
    </>
  );
}
