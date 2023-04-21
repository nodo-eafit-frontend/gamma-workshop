import { useRef } from 'react';
import './App.scss';
import { AddTask, Board, Button, Input, Task } from '@components';
import { BoardProvider } from '@contexts/BoardContext';

const App = () => {
  return (
    <>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </>
  );
};

export default App;
