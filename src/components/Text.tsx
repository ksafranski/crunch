import {
  FC,
  ReactElement,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react';

import { getClassNames } from '../utils/classNames';

export interface TextProps
  extends HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
  text?: string;
  type?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'warning'
    | 'success';
  children?: ReactElement | string;
  ref?: ForwardedRef<HTMLSpanElement | HTMLParagraphElement>;
}

export const Text: FC<TextProps> = forwardRef(
  (
    props: TextProps,
    ref: ForwardedRef<HTMLSpanElement | HTMLParagraphElement> = null
  ) => {
    const { text, type = 'default', className, children } = props;
    const classNames = getClassNames('text', [
      type && `cds-text--${type}`,
      className,
    ]);
    return (
      <span ref={ref} className={classNames} {...props}>
        {text || children}
      </span>
    );
  }
);
