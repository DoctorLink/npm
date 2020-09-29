type ChatJump = (algoId: number, nodeId: number, assetId: number) => void;
type TraversalJump = (algoId: number, nodeId: number) => void;
type Jump = ChatJump | TraversalJump;

export interface SummaryCallbacks {
  close: () => void;
  jump: Jump;
}
