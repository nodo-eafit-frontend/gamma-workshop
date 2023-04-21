import { forwardRef, useRef } from 'react';
import './styles.scss';
import clsx from 'clsx';

const namespace = 'input';

export const Input = forwardRef((props, ref) => {
  const { value, type, onFocus, onBlur, onChange, disabled, autoFocus } = props;
  const classnames = clsx(namespace);

  return (
    <input
      ref={ref}
      className={classnames}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      autoFocus={autoFocus}
      disabled={disabled}
      value={value}
    />
  );
});
