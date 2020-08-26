import React, { FC, HTMLAttributes } from 'react';
import { replaceLineBreaks } from '@doctorlink/traversal-core';

export interface HtmlContentProps extends HTMLAttributes<HTMLElement> {
  element?: keyof HTMLElementTagNameMap;
}

export const HtmlContent: FC<HtmlContentProps> = ({
  children = '',
  element = 'div',
  ...props
}) =>
  React.createElement(element, {
    ...props,
    dangerouslySetInnerHTML: { __html: replaceLineBreaks(children) },
  });

HtmlContent.displayName = 'HtmlContent';
