import {
  FC,
  ReactElement,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react';

import { getClassNames } from '../utils/classNames';
import { Breakpoints, getCurrentBreakpointName } from '../utils/breakpoints';

export interface GridCellProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | ReactElement[] | string | string[];
}

const Cell: FC<GridCellProps> = forwardRef(
  (props: GridCellProps, ref: ForwardedRef<HTMLDivElement> = null) => {
    const appliedClassNames = getClassNames('grid-cell', [props.className]);
    return (
      <div ref={ref} {...props} className={appliedClassNames}>
        {props.children}
      </div>
    );
  }
);

type GridSubComponents = {
  Cell: typeof Cell;
};

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: Breakpoints | number;
  children?: ReactElement | ReactElement[] | string | string[];
  ref?: ForwardedRef<HTMLDivElement>;
}

/* @ts-expect-error: Grid subcomponent type */
const Grid: FC<GridProps> & GridSubComponents = forwardRef(
  (props: GridProps, ref: ForwardedRef<HTMLDivElement> = null) => {
    const { columns, className, children } = props;
    const appliedColumns =
      typeof columns === 'object'
        ? columns[getCurrentBreakpointName()]
        : columns;
    const classNames = getClassNames('grid', [
      `cds-grid--cols-${appliedColumns}`,
      className,
    ]);
    return (
      <div
        ref={ref}
        className={classNames}
        {...props}
        style={Object.assign(props.style || {}, {
          gridTemplateColumns: `repeat(${appliedColumns}, 1fr)`,
        })}
      >
        {children}
      </div>
    );
  }
);

Grid.Cell = Cell;

export { Grid };
