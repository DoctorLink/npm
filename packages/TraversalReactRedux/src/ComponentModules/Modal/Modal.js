import React, { useEffect, useRef } from 'react';
import { replaceLineBreaks } from '../../Helpers';
import { defaultModalActions, defaultModalComponents } from './defaults';

export const Modal = ({ modal, actions = defaultModalActions, components = defaultModalComponents }) => {
    const comps = { ...defaultModalComponents, ...components };
    const ref = useRef();

    const handleClickOutside = (event) => {
        if (ref && ref.current && !ref.current.contains(event.target) && window.innerWidth - event.screenX > 20)
            actions.close()
    }

    const handleKeydown = (event) => {
        if (event.keyCode === 27)
            actions.close()
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (<comps.Wrapper>
        {(modal) && [
            <comps.DelayExit key='global'>
                <comps.BodyOverflowHidden />
                <comps.TransparentCurtain>
                    <comps.Wrap>
                        <comps.Container>
                            <comps.Modal ref={ref}>
                                <comps.Header>
                                    <comps.Title>{modal.title}</comps.Title>
                                    <comps.Close onClick={actions.close} />
                                </comps.Header>
                                <comps.Body dangerouslySetInnerHTML={{ __html: replaceLineBreaks(modal.content) }} />
                            </comps.Modal>
                        </comps.Container>
                    </comps.Wrap>
                </comps.TransparentCurtain>
            </comps.DelayExit>
        ]}
    </comps.Wrapper>);
}