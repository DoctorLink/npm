export interface SummaryCallbacks {
  close: () => void;
  jump: (algoId: any, nodeId: any) => void;
}
