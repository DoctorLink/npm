import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import { replaceLineBreaks } from '../../Helpers'

import baseTheme from '../../Theme/base/index'
import modalTheme from '../../Theme/components/modal'

const WrapPose = posed.div({
    enter: {
        opacity: 1,
        transition: {
            default: { duration: 150 }
        }
    },
    exit: {
        opacity: 0,
        transition: {
            default: { duration: 150 }
        }
    }
});

const Wrap = styled(WrapPose)`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); 
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1;
    -webkit-animation-iteration-count: 2;
    animation-iteration-count: 2;
    zoom: 1;
    transform-style: preserve-3d;
`

const Curtain = styled.div`
    box-sizing: border-box;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0 8px;
    white-space: nowrap;

    ::before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        margin-right: -0.25em;
    }
`

const Container = styled.div`
    white-space: normal;
    cursor: auto;
    width: 100%;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    text-align: left;
`

const ContentPose = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 100,
        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

const Content = styled(ContentPose)`
    box-sizing: border-box;
    background-color: #fff;
    border-radius: ${p => p.theme.modal.borderRadius}px;
    padding:  ${p => p.theme.modal.padding}px;
    text-align: left;
    position: relative;
    max-width: 650px;
    margin: 40px auto;
    font-family: ${p => p.theme.modal.fontFamily};
    font-size: ${p => p.theme.modal.fontSize}px;
    line-height: ${p => p.theme.modal.lineHeight}px;

    @media screen and (min-width: 400px) {    
        padding: 20px 32px 32px;
    }
`

Content.defaultProps = {
    theme: { modal: modalTheme(baseTheme) }
};

const Header = styled.div`
    display: flex;
    align-items: flex-start;
`

const Title = styled.h3`
    flex: 1;
    margin: 0 0 20px;
`

const Icon = styled.svg`
    fill: none;
    stroke: black;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    cursor: pointer;
    width: 24px;
`


const Modal = ({ explanation, closeModal }) => {

    let ref = useRef();

    const handleClickOutside = (event) => {
        if (ref && ref.current && !ref.current.contains(event.target))
            closeModal()
    }

    const handleKeydown = (event) => {
        if (event.keyCode === 27)
            closeModal()
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (<PoseGroup>
        {(explanation) && [<Wrap key={'wrap'}>
            <Curtain>
                <Container>
                    <Content ref={ref}>
                        <Header>
                            <Title>Explanation</Title>
                            <Icon viewBox="0 0 24 24" onClick={closeModal}>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </Icon>
                        </Header>
                        <div dangerouslySetInnerHTML={{ __html: replaceLineBreaks(explanation) }} />
                    </Content>
                </Container>
            </Curtain>
        </Wrap>]}
    </PoseGroup>);
}

export default Modal
