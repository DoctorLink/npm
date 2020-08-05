import React, { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const UpdateWhenVisible: React.FC<any> = ({
  children,
  ...visibilitySensorProps
}) => {
  const [visible, setVisible] = useState();
  const [visibleChildren, setChildren] = useState(children);

  useEffect(() => {
    if (visible) {
      setChildren(children);
    }
  }, [children, visible]);

  return (
    <VisibilitySensor onChange={setVisible} {...visibilitySensorProps}>
      {visibleChildren}
    </VisibilitySensor>
  );
};

export { UpdateWhenVisible };
