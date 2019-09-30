import React from 'react';
import styled from "styled-components";
import { axisColor, barTop, origin, chartRight } from "./chartSettings";

const StyledLine = styled.line`
    stroke: ${axisColor};
    stroke-width: 0.4;
    stroke-dasharray: 1 1;
`

const Group = styled.g`
    transform: translate(0px, ${p => p.translate}px);
    transition: transform 0.3s;
`

const MultilineText = ({x, y, lines = []}) => (
    <text x={x} y={y}>
        {lines.map((line, i) => <tspan key={i} x={x} dy={i === 0 ? "0" : "1.3em"}>{line}</tspan>)}
    </text>
)

const OverallWellbeingLine = ({ percent, y }) => (
    <Group translate={y - barTop}>
        <StyledLine x1={origin.x} x2={chartRight} y1={barTop} y2={barTop} />
        <MultilineText x={chartRight + 1.5} y={barTop + 1} lines={[ `${percent}%`, "overall", "wellbeing" ]} />
    </Group>
)

export { OverallWellbeingLine };
