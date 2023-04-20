import React, { useEffect, useState } from 'react';
import { Task } from '@components';
import './styles.scss';
import { getTasks } from '@services';

export const Board = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((tasksRes) => {
      setTasks(tasksRes);
    });
  }, []);

  return (
    <section>
      {tasks.map(({ description, isDone }) => {
        return (
          <Task
            description={description}
            isDone={isDone}
            onCancel={() => console.log('Cancel')}
            onOk={(value) => console.log('Ok', { value })}
            doTask={() => console.log('Do Task')}
            restoreTask={() => console.log('Do Task')}
          />
        );
      })}
    </section>
  );
};
