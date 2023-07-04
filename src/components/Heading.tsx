import { FC, ReactElement, HTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: string | ReactElement;
  text?: string;
}

export const Heading: FC<HeadingProps> = (props: HeadingProps) => {
  const { level, text, children } = props;
  const classNames = ['cds', 'cds-heading', props.className];
  if (level === 'h1') {
    return <h1 className={classNames.join(' ')}>{text || children}</h1>;
  } else if (level === 'h2') {
    return <h2 className={classNames.join(' ')}>{text || children}</h2>;
  } else if (level === 'h3') {
    return <h3 className={classNames.join(' ')}>{text || children}</h3>;
  } else if (level === 'h4') {
    return <h4 className={classNames.join(' ')}>{text || children}</h4>;
  } else if (level === 'h5') {
    return <h5 className={classNames.join(' ')}>{text || children}</h5>;
  } else if (level === 'h6') {
    return <h6 className={classNames.join(' ')}>{text || children}</h6>;
  }
};
