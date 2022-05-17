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
    console.log(`update state successfully`);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <ul>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </ul>
    </>
  );
}
