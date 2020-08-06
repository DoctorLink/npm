/**
 * Injected History line for Traversals/ChatTraversals POST method.
 */
export interface InjectedHistory {
  /**
   * The Traversal this history came from (optional).
   */
  traversalId?: string;
  /**
   * The Question Asset Id of the history.
   */
  assetId: number;
  /**
   * The Answer Asset Id of the history.
   */
  answerId: number;
  /**
   * The value of the answer. (Optional)
   */
  value?: string;
  /**
   * The type of injection.
   * Preanswer: Answer the question silently.
   * Prepopulate: Display the answer with the injected answer selected/value.
   */
  injectedHistoryType: 'preanswer' | 'prepopulate';
  /**
   * Answered is checked or value is present.
   */
  isAnswered: boolean;
}

/**
 * Request Body for Traversals/ChatTraversals POST method.
 */
export interface TraversalsBaseCreate {
  /**
   * The Product Id to use.
   */
  productId: number;
  /**
   * Select a Language (optional).
   */
  language?: string;
  /**
   * Select a Release (optional).
   */
  release?: string;
  /**
   * Select an Algo to start at (optional).
   */
  algoId?: number;
  /**
   * Select a Node to start at (optional).
   */
  nodeId?: number;
  /**
   * Include a Member Reference (optional).
   */
  memberReference?: string;
  /**
   * Inject History (Optional).
   */
  injectedHistory?: InjectedHistory[];
}

/**
 * Request Body for Traversals/ChatTraversals respond POST method.
 */
export interface TraversalsBaseRespond {
  /**
   * The Node ID of the response.
   */
  nodeId: number;
  /**
   * The Question's Asset ID of the repsonse.
   */
  questionId: number;
  /**
   * The Answer ID of the response.
   */
  answerId: number;
  /**
   * The value of the response,
   * if the [[ControlType]] is,
   * Text, Number or Date
   */
  value?: string;
}

/**
 * Request Body for Traversals/ChatTraversals revisit POST method.
 */
export interface TraversalsBaseRevisit {
  /**
   * The Node ID to revisit.
   */
  nodeId: number;
  /**
   * The Algo ID to revisit.
   */
  algoId: number;
}

/**
 * The Control Type of a [[TraversalsResponseAnswer]] or [[ChatTraversalsResponseAnswer]]
 */
export type ControlType = 'Checkbox' | 'Radio' | 'Number' | 'Date' | 'Text';
