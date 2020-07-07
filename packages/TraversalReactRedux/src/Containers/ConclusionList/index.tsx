import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Actions';
import { RootState } from '../../Models';

export const ConclusionListConnected: React.FC<{
  traversalId: any;
}> = ({ traversalId }) => {
  const dispatch = useDispatch();
  const conclusions = useSelector(
    (state: RootState) => state.conclusion && state.conclusion.conclusions
  );
  useEffect(() => {
    dispatch(actions.traversalConclusionsGetRequest(traversalId));
  }, [dispatch, traversalId]);

  if (!conclusions) {
    return null;
  }

  return (
    <div id="Traversal">
      {conclusions
        .filter((c: any) => !c.silent)
        .map((conc: any) => (
          <div key={conc.assetId}>
            {conc.assetId}: {conc.displayText}
          </div>
        ))}
    </div>
  );
};
