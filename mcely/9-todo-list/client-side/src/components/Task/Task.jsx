import { useState, useEffect } from "react";
import { Button, Input } from "@components";
import clsx from "clsx";
import "./styles.scss";

const namespace = "task";

export const Task = (props) => {
  const {
    description = "",
    isDone = false,
    onCancel,
    onOk,
    doTask,
    restoreTask,
  } = props;
  const [isEditing, setIsEditing] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // TODO: use Reducers
  const [isEmpty, setIsEmpty] = useState(false);
  const [value, setValue] = useState(description);
  const classnames = clsx(namespace, {
    [`${namespace}__is-done`]: isDone,
  });

  const handlerSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target[0];

    onOk(value);
    setIsEditing(false);
  };

  const handlerCancel = () => {
    setTimeout(() => {
      onCancel();
      setIsEditing(false);
    }, 0); // Let type reset clear input value before destroy Cancel Button
  };

  const handlerFocus = (e) => {
    setIsEditing(true);
  };

  const handlerChange = ({ target }) => {
    setIsEmpty(!!target.value);
    setValue(target.value);
  };

  const renderButtonsActions = () => {
    return (
      <>
        <Button text="Ok" kind="success" type="submit" disabled={!isEmpty} />
        <Button
          text="Cancel"
          kind="error"
          type="reset"
          onClick={handlerCancel}
          disabled={isLoading}
        />
      </>
    );
  };

  const renderTodoButtons = () => {
    return isDone ? (
      <Button text="Undone" kind="warning" onClick={doTask} />
    ) : (
      <Button text="Done" kind="primary" onClick={restoreTask} />
    );
  };

  return (
    <form className={classnames} onSubmit={handlerSubmit}>
      <Input
        type="text"
        onFocus={handlerFocus}
        onChange={handlerChange}
        disabled={isDone}
        value={value}
      />
      <>{isEditing ? renderButtonsActions() : renderTodoButtons()}</>
    </form>
  );
};
