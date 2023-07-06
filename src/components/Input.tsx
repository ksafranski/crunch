import {
  useState,
  FC,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
  FormEventHandler,
  useEffect,
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
  required?: boolean;
  isInvalid?: boolean;
  validationMessage?: string;
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
      required = false,
      isInvalid = false,
      validationMessage,
    } = props;
    const [currentValue, setCurrentValue] = useState(value);
    const [isValid, setIsValid] = useState(!isInvalid);
    useEffect(() => {
      setIsValid(!isInvalid);
    }, [isInvalid]);
    const classNames = getClassNames('input', [
      `cds-input--${type}`,
      required && 'cds-input--required',
      className,
    ]);
    return (
      <div
        ref={ref}
        className={`${classNames} ${
          !isValid || isInvalid ? 'cds-input--invalid' : ''
        }`}
      >
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id && props.id}
          placeholder={placeholder}
          type={type}
          value={currentValue}
          onChange={e => {
            setCurrentValue(e.target.value);
            onChange && onChange(e);
            if (required) setIsValid(e.target.value.toString().length > 0);
          }}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        {validationMessage && (
          <div className='cds-input--validation-message'>
            {validationMessage}
          </div>
        )}
      </div>
    );
  }
);
