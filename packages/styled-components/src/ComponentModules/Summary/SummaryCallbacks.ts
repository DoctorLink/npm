type ChatJump = (algoId: any, nodeId: any, assetId: any) => void;
type TraversalJump = (algoId: any, nodeId: any) => void;
type Jump = ChatJump | TraversalJump;

export interface SummaryCallbacks {
  close: () => void;
  jump: Jump;
}
