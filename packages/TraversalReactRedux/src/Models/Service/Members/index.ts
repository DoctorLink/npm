/**
 * The request body for creating a member.\
 * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_CreateAsync
 */
export interface MembersCreate {
  /**
   * External Id of the member.
   */
  memberReference: string;
}

/**
 * The response object when getting or creating a member.\
 * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_CreateAsync
 *
 * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_GetAsync
 */
export interface MembersResponse {
  /**
   * External Id of the member.
   */
  memberReference: string;

  /**
   * Internal Id of the member.
   */
  memberId: string;

  /**
   * Tenant the member belongs to.
   */
  clientId: string;

  /**
   * Traversals linked to this member.
   */
  traversalIds: string[];
}

/**
 * The response object when getting a member's permanent history.\
 * https://dev-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_GetPermanentHistoryAsync
 */
export interface MembersPermanentHistoryResponse {
  /**
   * Identifier for a specific asset within asset builder.
   */
  assetId: number;

  /**
   * Identifier of the answer used; null if it's not an answer.
   */
  answerId?: number;

  /**
   * The value of the answer given.
   */
  value: string;

  /**
   * The ID of the traversal this history originated from.
   */
  traversalId: string;

  /**
   * DateTime Perm history was created.
   */
  createdDate: string;
}
