export interface MembersCreate {
  memberReference: string;
}

export interface MembersResponse {
  memberReference: string;
  memberId: string;
  clientId: string;
  traversalIds: string[];
}

export interface MembersPermanentHistoryResponse {
  assetId: number;
  answerId: number;
  value: string;
  traversalId: string;
  createdDate: string;
}
