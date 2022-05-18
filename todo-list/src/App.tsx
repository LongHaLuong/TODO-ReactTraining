import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodo';

const initTodos: Todo[] = [
  {
    text: 'Be a official member of TMA',
    complete: false,
  },
  {
    text: 'Join TMA',
    complete: true,
  },
];

export function App() {
  const [todos, setTodos] = useState(initTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter((todo) => todo !== selectedTodo);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className="p-5 text-center bg-light ">
        <h1 className="mb-3 text-warning">TODO-List</h1>
        <h4 className="mb-3">llha@tma.com.vn</h4>
        <ul>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          <AddTodoForm addTodo={addTodo} />
        </ul>
      </div>
    </>
  );
}
