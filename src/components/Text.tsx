import { FC } from 'react';

export const Text: FC<{ text: string; isHelpText?: boolean }> = ({
  text,
  isHelpText,
}) => {
  return (
    <span className={`cds cds-text ${isHelpText ? 'cds-text_help' : ''}`}>
      {text}
    </span>
  );
};
