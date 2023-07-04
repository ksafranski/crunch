import { FC, ReactElement } from 'react';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: string | ReactElement;
  text?: string;
}

export const Heading: FC<HeadingProps> = ({ children, level = 'h1', text }) => {
  if (level === 'h1') {
    return <h1 className='cds cds-heading'>{text || children}</h1>;
  } else if (level === 'h2') {
    return <h2 className='cds cds-heading'>{text || children}</h2>;
  } else if (level === 'h3') {
    return <h3 className='cds cds-heading'>{text || children}</h3>;
  } else if (level === 'h4') {
    return <h4 className='cds cds-heading'>{text || children}</h4>;
  } else if (level === 'h5') {
    return <h5 className='cds cds-heading'>{text || children}</h5>;
  } else if (level === 'h6') {
    return <h6 className='cds cds-heading'>{text || children}</h6>;
  }
};
