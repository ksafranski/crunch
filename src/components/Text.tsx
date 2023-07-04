import { FC, ReactElement, HTMLAttributes } from 'react';

interface TextProps
  extends HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
  text?: string;
  isHelpText?: boolean;
  children?: ReactElement | string;
}

export const Text: FC<TextProps> = (props: TextProps) => {
  const { text, children } = props;
  const classNames = [
    'cds',
    'cds-text',
    props.isHelpText ? 'cds-text_help' : '',
    props.className,
  ];
  return (
    <span className={classNames.join(' ')} {...props}>
      {text || children}
    </span>
  );
};
