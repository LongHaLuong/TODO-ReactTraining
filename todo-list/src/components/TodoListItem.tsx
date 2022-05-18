import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

const Label = styled.label`
  color: #b4886b;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 0.7rem;
  margin-left: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid #dea057;
  color: #dea057;
`;

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <>
      <ListGroup className="mb-3">
        <ListGroup.Item>
          <Label style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.complete}
              onClick={() => {
                toggleTodo(todo);
              }}
            />{' '}
            {todo.text}
          </Label>
          <Button
            onClick={() => {
              deleteTodo(todo);
            }}
          >
            X
          </Button>{' '}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
