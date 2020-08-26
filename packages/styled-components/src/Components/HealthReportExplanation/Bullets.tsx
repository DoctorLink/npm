import React from 'react';
import { HtmlContent } from './HtmlContent';
import { ConclusionBullet } from '@doctorlink/traversal-core';

export const Bullets: React.FC<{
  bullets: ConclusionBullet[];
}> = ({ bullets }) => {
  const [header, ...items] = bullets;
  return (
    <>
      {header && <HtmlContent>{header.displayText}</HtmlContent>}
      <ul>
        {items.map((item) => (
          <HtmlContent element="li" key={item.bulletUniqueId}>
            {item.displayText}
          </HtmlContent>
        ))}
      </ul>
    </>
  );
};
