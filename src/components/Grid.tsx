import {
  FC,
  ReactElement,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react';

import { getClassNames } from '../utils/classNames';

export interface GridCellProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | string;
}

const Cell: FC<GridCellProps> = forwardRef(
  (props: GridCellProps, ref: ForwardedRef<HTMLDivElement> = null) => {
    return (
      <div ref={ref} {...props}>
        foo
      </div>
    );
  }
);

type GridSubComponents = {
  Cell: typeof Cell;
};

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  children?: ReactElement | ReactElement[] | string;
  ref?: ForwardedRef<HTMLDivElement>;
}

/* @ts-expect-error: Grid subcomponent type */
const Grid: FC<GridProps> & GridSubComponents = forwardRef(
  (props: GridProps, ref: ForwardedRef<HTMLDivElement> = null) => {
    const { columns, className, children } = props;
    const classNames = getClassNames('grid', [className]);
    return (
      <div
        ref={ref}
        className={classNames}
        {...props}
        style={Object.assign(props.style || {}, {
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        })}
      >
        {children}
      </div>
    );
  }
);

Grid.Cell = Cell;

export { Grid };
