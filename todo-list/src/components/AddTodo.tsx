import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  addTodo: AddTodo;
}

const Button = styled.button`
  font-size: 1rem;
  margin-left: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid #dea057;
  background-color: white;
  color: #dea057;
`;

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <form>
      <input onChange={(e) => setText(e.target.value)} type="text" value={text} />
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        Add Todo
      </Button>
    </form>
  );
};
