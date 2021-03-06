/// <reference path="../Application.ts" />

namespace typedoc {
  /**
   * Simple point interface.
   */
  export interface Point {
    x: number;
    y: number;
  }

  /**
   * Event name of the pointer down event.
   */
  export var pointerDown = 'mousedown';

  /**
   * Event name of the pointer move event.
   */
  export var pointerMove = 'mousemove';

  /**
   * Event name of the pointer up event.
   */
  export var pointerUp = 'mouseup';

  /**
   * Position the pointer was pressed at.
   */
  export var pointerDownPosition: Point = { x: 0, y: 0 };

  /**
   * Should the next click on the document be supressed?
   */
  export var preventNextClick = false;

  /**
   * Is the pointer down?
   */
  export var isPointerDown = false;

  /**
   * Is the pointer a touch point?
   */
  export var isPointerTouch = false;

  /**
   * Did the pointer move since the last down event?
   */
  export var hasPointerMoved = false;

  /**
   * Is the user agent a mobile agent?
   */
  export var isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  document.documentElement.classList.add(isMobile ? 'is-mobile' : 'not-mobile');

  if (isMobile && 'ontouchstart' in document.documentElement) {
    isPointerTouch = true;
    pointerDown = 'touchstart';
    pointerMove = 'touchmove';
    pointerUp = 'touchend';
  }

  document.addEventListener(pointerDown, (e) => {
    isPointerDown = true;
    hasPointerMoved = false;
    const t =
      pointerDown == 'touchstart'
        ? (e as TouchEvent).targetTouches[0]
        : (e as MouseEvent);
    pointerDownPosition.y = t.pageY || 0;
    pointerDownPosition.x = t.pageX || 0;
  });

  document.addEventListener(pointerMove, (e) => {
    if (!isPointerDown) return;
    if (!hasPointerMoved) {
      const t =
        pointerDown == 'touchstart'
          ? (e as TouchEvent).targetTouches[0]
          : (e as MouseEvent);
      const x = pointerDownPosition.x - (t.pageX || 0);
      const y = pointerDownPosition.y - (t.pageY || 0);
      hasPointerMoved = Math.sqrt(x * x + y * y) > 10;
    }
  });

  document.addEventListener(pointerUp, () => {
    isPointerDown = false;
  });

  document.addEventListener('click', (e) => {
    if (preventNextClick) {
      e.preventDefault();
      e.stopImmediatePropagation();
      preventNextClick = false;
    }
  });
}
