import { useState, useEffect } from 'react';
import { Button, Input } from '@components';
import clsx from 'clsx';
import './styles.scss';
import { useBoard, useBoardContext } from '@contexts/BoardContext';

const namespace = 'task';

export const Task = (props) => {
  const { id, description = '', isDone = false, isEditing = false, onCancel, onOk, doTask, restoreTask } = props;

  const { dispatch } = useBoardContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [value, setValue] = useState(description);

  // useEffect(() => {
  //   if (isEditing) {
  //     dispatch({ type: 'isEditing', payoad: isEditing });
  //   }
  // }, [isEditing]);

  const classnames = clsx(namespace, {
    [`${namespace}__is-done`]: isDone,
  });

  const handlerSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target[0];

    onOk(value);
    dispatch({ type: 'modifyTask', payload: { id, isEditing: false } });
  };

  const handlerCancel = () => {
    setTimeout(() => {
      onCancel();
      dispatch({ type: 'modifyTask', payload: { id, isEditing: false } });
    }, 0); // Let type reset clear input value before destroy Cancel Button
  };

  const handlerFocus = (e) => {
    dispatch({ type: 'modifyTask', payload: { id, isEditing: true } });
  };

  const handlerChange = ({ target }) => {
    setIsEmpty(!!target.value);
    setValue(target.value);
  };

  const renderButtonsActions = () => {
    return (
      <>
        <Button text='Ok' kind='success' type='submit' disabled={!isEmpty} />
        <Button text='Cancel' kind='error' type='reset' onClick={handlerCancel} disabled={isLoading} />
      </>
    );
  };

  const renderTodoButtons = () => {
    return isDone ? (
      <Button text='Undone' kind='warning' onClick={doTask} />
    ) : (
      <Button text='Done' kind='primary' onClick={restoreTask} />
    );
  };

  return (
    <form className={classnames} onSubmit={handlerSubmit}>
      <Input
        type='text'
        onFocus={handlerFocus}
        onChange={handlerChange}
        autoFocus={isEditing && 'autofocus'}
        disabled={isDone}
        value={value}
      />
      <>{isEditing ? renderButtonsActions() : renderTodoButtons()}</>
    </form>
  );
};
