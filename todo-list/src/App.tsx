import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { AddToForm } from './components/AddToForm';

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
    const newTodo = todos.map((todo) => {
      if (todo === selectedTodo)
        return {
          ...todo,
          complete: !todo.complete,
        };
      return todo;
    });
    setTodos(newTodo);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddToForm addTodo={addTodo} />
    </>
  );
}
