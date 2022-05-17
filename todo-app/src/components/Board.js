import Square from './Square'
import React from 'react';
import styled from 'styled-components'

const  BoardRow = styled.div`
  clear: both;
  content: "";
  display: table;
`;

class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <BoardRow className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </BoardRow>
          <BoardRow className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </BoardRow>
          <BoardRow className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </BoardRow>
        </div>
      );
    }
  }

export default Board;