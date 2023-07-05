import {
  FC,
  ReactElement,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react';

import { getClassNames } from '../utils/classNames';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | string;
  ref?: ForwardedRef<HTMLDivElement>;
}

export const Divider: FC<DividerProps> = forwardRef(
  (props: DividerProps, ref: ForwardedRef<HTMLDivElement> = null) => {
    const { className, children } = props;
    const classNames = getClassNames('divider', [
      children && 'cds-divider--has_children',
      className,
    ]);
    return (
      <div ref={ref} className={classNames} {...props}>
        {children && (
          <div className='cds-divider--children'>
            <div className='cds-divider--children_bar'>
              <div />
            </div>
            <div className='cds-divider--children_content'>{children}</div>
            <div className='cds-divider--children_bar'>
              <div />
            </div>
          </div>
        )}
      </div>
    );
  }
);
