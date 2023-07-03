import { FC, ReactElement } from 'react';

export const Text: FC<{
  text?: string;
  isHelpText?: boolean;
  children?: ReactElement | string;
}> = ({ text, isHelpText, children }) => {
  return (
    <span className={`cds cds-text ${isHelpText ? 'cds-text_help' : ''}`}>
      {text || children}
    </span>
  );
};
