import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const AddToForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <form>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
      <button
        type="submit"
        onClick={(e) => {
          addTodo(text);
          e.preventDefault();
        }}
      >
        Add Todo
      </button>
    </form>
  );
};
