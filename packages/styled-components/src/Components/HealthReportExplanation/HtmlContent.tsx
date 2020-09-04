import React, { FC, HTMLAttributes } from 'react';

export interface HtmlContentProps extends HTMLAttributes<HTMLElement> {
  element?: keyof JSX.IntrinsicElements;
}

export const HtmlContent: FC<HtmlContentProps> = ({
  children = '',
  element = 'div',
  ...props
}) =>
  React.createElement(element, {
    ...props,
    style: { whiteSpace: 'pre-wrap' },
    dangerouslySetInnerHTML: { __html: children },
  });

HtmlContent.displayName = 'HtmlContent';
