import React from 'react';
import styled from "styled-components";
import { RiskBars } from "./RiskBars";
import { fontSize, barInterval, gridlineLabelHeight, barLabelWidth, barWidth } from "./chartSettings";
import { ChartKey } from "./ChartKey";
import { GridLines } from "./GridLines";

const StyledSvg = styled.svg`
    font-size: ${fontSize};
    overflow: visible;
    width: 100%;
`

const RiskChart = ({ risks }) => {
    const chartHeight = risks.length * barInterval;
    const keyHeight = barInterval * 2;
    const keyTop = gridlineLabelHeight + chartHeight + 20;
    const svgHeight = keyTop + keyHeight - 10;
    return (
        <StyledSvg height={svgHeight}>
            <title>Your health risks</title>
            <GridLines x={barLabelWidth} y={0} width={barWidth} lineLength={chartHeight} />
            <RiskBars risks={risks} x={0} y={gridlineLabelHeight} />
            <ChartKey x={0} y={keyTop} />
        </StyledSvg>
    )
}

export default RiskChart;
