import {
  FC,
  ReactElement,
  HTMLAttributes,
  ForwardedRef,
  forwardRef,
} from 'react';

import { getClassNames } from '../utils/classNames';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: string | ReactElement;
  text?: string;
  ref?: ForwardedRef<HTMLHeadingElement>;
}

export const Heading: FC<HeadingProps> = forwardRef(
  (props: HeadingProps, ref: ForwardedRef<HTMLHeadingElement> = null) => {
    const { level, text, children } = props;
    const classNames = getClassNames('heading', [props.className]);
    if (level === 'h1') {
      return (
        <h1 ref={ref} className={classNames}>
          {text || children}
        </h1>
      );
    } else if (level === 'h2') {
      return (
        <h2 ref={ref} className={classNames}>
          {text || children}
        </h2>
      );
    } else if (level === 'h3') {
      return (
        <h3 ref={ref} className={classNames}>
          {text || children}
        </h3>
      );
    } else if (level === 'h4') {
      return (
        <h4 ref={ref} className={classNames}>
          {text || children}
        </h4>
      );
    } else if (level === 'h5') {
      return (
        <h5 ref={ref} className={classNames}>
          {text || children}
        </h5>
      );
    } else if (level === 'h6') {
      return (
        <h6 ref={ref} className={classNames}>
          {text || children}
        </h6>
      );
    }
  }
);
