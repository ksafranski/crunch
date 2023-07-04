import {
  FC,
  ReactElement,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react';

interface TextProps
  extends HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
  text?: string;
  isHelpText?: boolean;
  children?: ReactElement | string;
  ref?: ForwardedRef<HTMLSpanElement | HTMLParagraphElement>;
}

export const Text: FC<TextProps> = forwardRef(
  (
    props: TextProps,
    ref: ForwardedRef<HTMLSpanElement | HTMLParagraphElement> = null
  ) => {
    const { text, children } = props;
    const classNames = [
      'cds',
      'cds-text',
      props.isHelpText ? 'cds-text_help' : '',
      props.className,
    ];
    return (
      <span ref={ref} className={classNames.join(' ')} {...props}>
        {text || children}
      </span>
    );
  }
);
