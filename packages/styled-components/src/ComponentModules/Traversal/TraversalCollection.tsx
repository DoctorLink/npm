import React from 'react';
import { AnimatePresence } from 'framer-motion';

export interface TraversalCollectionProps {
  mirror: boolean;
}

export const TraversalCollection: React.FC<TraversalCollectionProps> = ({
  mirror,
  children,
}) => (
  <AnimatePresence custom={mirror} exitBeforeEnter>
    {children}
  </AnimatePresence>
);
