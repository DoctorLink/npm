import React from 'react';
import styled from "styled-components";
import { barLabelWidth, barWidth, barHeight, barInterval, minimumRiskColor, changeableRiskColor } from "./chartSettings";

const StyledRect = styled.rect`
    transition: width 0.3s, x 0.3s;
`

const RiskBar = ({ risk, y }) => {
    if (isNaN(risk.current)) {
        return null;
    }
    const { minimum, current } = risk;
    const changeable = current - minimum;
    const minimumWidth = `${minimum.toFixed(1)}%`
    const changeableWidth = `${changeable.toFixed(1)}%`
    return (
        <svg x={barLabelWidth} y={y} width={barWidth}>
            <title>Current: {current}%, minimum: {minimum}%</title>
            <StyledRect fill={minimumRiskColor} width={minimumWidth} height={barHeight} x={0} />
            <StyledRect fill={changeableRiskColor} width={changeableWidth} height={barHeight} x={minimumWidth} />
        </svg>
    )
}

const LabelledRiskBar = ({ risk, index }) => {
    const padding = (barInterval - barHeight) / 2;
    const y = index * barInterval + padding;
    return (
        <g>
            <text x={0} y={y + barHeight / 2} alignmentBaseline="middle">{risk.name}</text>
            <RiskBar risk={risk} y={y} />
        </g>
    )
}

export const RiskBars = ({risks, x, y}) => {
    return (
        <svg x={x} y={y}>
            {risks.map((risk, i) => <LabelledRiskBar key={risk.name} risk={risk} index={i} />)}
        </svg>
    )
}