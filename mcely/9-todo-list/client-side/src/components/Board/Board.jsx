import React, { useEffect, useReducer, useState } from 'react';
import { Task, Button } from '@components';
import './styles.scss';
import { taskApi } from '@services';
import clsx from 'clsx';
import { useBoard, useBoardContext } from '@contexts/BoardContext';

const namespace = 'board';

export const Board = () => {
  const { tasks, isEditing } = useBoard();
  const { dispatch } = useBoardContext();
  const classnames = clsx(namespace);

  useEffect(() => {
    taskApi.getTasks().then((tasksRes) => {
      dispatch({ type: 'getTasks', payload: tasksRes });
    });
  }, []);

  const handleAddTask = () => {
    dispatch({ type: 'addTask' });
  };

  return (
    <section className={classnames}>
      {tasks.map(({ id, description, isDone, isEditing }, index) => {
        return (
          <Task
            key={index}
            id={id}
            description={description}
            isDone={isDone}
            isEditing={isEditing}
            onCancel={() => console.log('Cancel')}
            onOk={(value) => console.log('Ok', { value })}
            doTask={() => console.log('Do Task')}
            restoreTask={() => console.log('Do Task')}
          />
        );
      })}
      {true && <Button className={'board__add-task'} text='Add Task' kind='warning' onClick={handleAddTask} />}
    </section>
  );
};

// Add Tas onCLick
/*
  1. Add empty task
  2. The task will be with autofocus enabled
*/
