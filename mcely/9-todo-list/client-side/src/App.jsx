import { useRef } from 'react';
import './App.scss';
import { AddTask, Board, Button, Input, Task } from '@components';

const App = () => {
  return (
    <div className='App'>
      <Button text='Lo que yo quiera' kind='warning' />
      <Input type='text' />
      <AddTask />
      <Board />
      <Task
        onCancel={() => console.log('Cancel')}
        onOk={(value) => console.log('Ok', { value })}
        doTask={() => console.log('Do Task')}
        restoreTask={() => console.log('Do Task')}
        isDone={false}
      />
    </div>
  );
};

export default App;
