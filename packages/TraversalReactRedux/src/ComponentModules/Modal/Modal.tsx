import React, { useEffect, useRef } from 'react';
import { replaceLineBreaks } from '../../Helpers';
import { defaultModalActions, defaultModalComponents } from './defaults';

export const Modal: React.FC<{
  modal: any;
  actions?: any;
  components?: any;
  children?: any;
}> = ({
  modal,
  children,
  actions = defaultModalActions,
  components = defaultModalComponents,
}) => {
  const comps = { ...defaultModalComponents, ...components };
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        ref &&
        ref.current &&
        !ref.current.contains(event.target) &&
        window.innerWidth - event.screenX > 20
      )
        actions.close();
    };

    const handleKeydown = (event: any) => {
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
          <comps.BodyOverflowHidden />
        </comps.DelayExit>,
        <comps.BackDrop key="backdrop" />,
        <comps.TransparentCurtain key="curtain">
          <comps.Wrap>
            <comps.Container>
              <comps.Modal ref={ref}>
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
              </comps.Modal>
            </comps.Container>
          </comps.Wrap>
        </comps.TransparentCurtain>,
      ]}
    </comps.Wrapper>
  );
};
