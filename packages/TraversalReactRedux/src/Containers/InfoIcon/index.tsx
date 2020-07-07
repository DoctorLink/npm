import React from 'react';
import { useDispatch } from 'react-redux';
import { InfoIcon } from '../../Components';
import { populateModal } from '../../Actions';

export const InfoIconConnected: React.FC<any> = ({
  explanation,
  title,
  inline,
  ...props
}) => {
  if (!title) title = 'Explanation';
  const dispatch = useDispatch();
  const onClick = (content: any) => dispatch(populateModal(content, title));
  return (
    <InfoIcon
      explanation={explanation}
      inline={inline}
      onClick={onClick}
      {...props}
    />
  );
};
