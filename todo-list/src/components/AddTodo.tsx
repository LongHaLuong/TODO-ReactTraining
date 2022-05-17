import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <form>
      <input onChange={(e) => setText(e.target.value)} type="text" value={text} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};
