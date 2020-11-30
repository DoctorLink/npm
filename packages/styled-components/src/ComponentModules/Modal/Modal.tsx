import React, { useEffect, useRef } from 'react';
import { replaceLineBreaks } from '@doctorlink/traversal-core';
import { defaultModalActions, defaultModalComponents } from './defaults';
import { ModalModel } from '@doctorlink/traversal-core';
import { ModalCallbacks } from './ModalCallbacks';
import { ModalComponents } from './ModalComponents';

export const Modal: React.FC<{
  modal: ModalModel | null;
  actions?: ModalCallbacks;
  components?: Partial<ModalComponents>;
}> = ({
  modal,
  children,
  actions = defaultModalActions,
  components = defaultModalComponents,
}) => {
  const comps = { ...defaultModalComponents, ...components };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref &&
        ref.current &&
        !ref.current.contains(event.target as HTMLElement) &&
        window.innerWidth - event.screenX > 20
      )
        actions.close();
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) actions.close();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [actions]);

  return (
    <comps.Wrapper>
      {modal && [
        <comps.DelayExit key="global">
          <comps.GlobalStyle />
        </comps.DelayExit>,
        <comps.BackDrop key="backdrop" />,
        <comps.TransparentCurtain key="curtain">
          <comps.Wrap>
            <comps.Container>
              <comps.ModalWindow ref={ref}>
                <comps.Header>
                  <comps.Title>{modal.title}</comps.Title>
                  <comps.Close onClick={actions.close} />
                </comps.Header>
                {modal.content && (
                  <comps.Body
                    dangerouslySetInnerHTML={{
                      __html: replaceLineBreaks(modal.content),
                    }}
                  />
                )}
                {!modal.content && <comps.Body>{children}</comps.Body>}
              </comps.ModalWindow>
            </comps.Container>
          </comps.Wrap>
        </comps.TransparentCurtain>,
      ]}
    </comps.Wrapper>
  );
};
