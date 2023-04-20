import React, { useEffect, useState } from 'react';
import { Task } from '@components';
import './styles.scss';
import { taskApi } from '@services';
import clsx from 'clsx';

const namespace = 'board';

export const Board = () => {
  const [tasks, setTasks] = useState([]);
  const classnames = clsx(namespace);

  useEffect(() => {
    taskApi.getTasks().then((tasksRes) => {
      setTasks(tasksRes);
    });
  }, []);

  return (
    <section className={classnames}>
      {tasks.map(({ description, isDone }, index) => {
        return (
          <Task
            key={index}
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
