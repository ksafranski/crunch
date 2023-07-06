import {
  FC,
  ReactElement,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react';

import { getClassNames } from '../utils/classNames';

export interface ButtonProps
  extends HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  text?: string;
  type?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  children?: ReactElement | string;
  ref?: ForwardedRef<HTMLDivElement>;
}

export const Button: FC<ButtonProps> = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLDivElement> = null) => {
    const {
      text,
      type = 'primary',
      disabled = undefined,
      onClick = undefined,
      className,
      children,
    } = props;
    const classNames = getClassNames('button', [
      type && `cds-button--${type}`,
      disabled && 'cds-button--disabled',
      className,
    ]);
    return (
      <div className={classNames} {...props} ref={ref}>
        <button onClick={onClick} disabled={Boolean(disabled)}>
          {text || children}
        </button>
      </div>
    );
  }
);
