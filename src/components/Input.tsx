import {
  useState,
  FC,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
  FormEventHandler,
} from 'react';

import { getClassNames } from '../utils/classNames';

export interface InputProps
  extends HTMLAttributes<HTMLDivElement & HTMLInputElement & HTMLLabelElement> {
  label?: string;
  value?: string | number;
  onChange?: FormEventHandler<HTMLInputElement>;
  type?:
    | 'text'
    | 'number'
    | 'password'
    | 'date'
    | 'time'
    | 'email'
    | 'tel'
    | 'url';
  ref?: ForwardedRef<HTMLDivElement & HTMLInputElement & HTMLLabelElement>;
}

export const Input: FC<InputProps> = forwardRef(
  (
    props: InputProps,
    ref: ForwardedRef<
      HTMLDivElement & HTMLInputElement & HTMLLabelElement
    > = null
  ) => {
    const id = Math.random().toString(36).substring(2, 8);
    const {
      label,
      value = '',
      type = 'text',
      onChange,
      className,
      placeholder,
    } = props;
    const [currentValue, setCurrentValue] = useState(value);
    const classNames = getClassNames('input', [
      `cds-input--${type}`,
      className,
    ]);
    return (
      <div ref={ref} className={classNames} {...props}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          value={currentValue}
          onChange={e => {
            setCurrentValue(e.target.value);
            onChange && onChange(e);
          }}
        />
      </div>
    );
  }
);
