import React from 'react';
import styled from "styled-components";
import { RiskBars } from "./RiskBars";
import { fontSize, barInterval, gridlineLabelHeight, barLabelWidth, barWidth } from "./chartSettings";
import { ChartKey } from "./ChartKey";
import { GridLines } from "./GridLines";

const StyledSvg = styled.svg`
    font-size: ${fontSize};
    width: 100%;
    max-width: 400px;
    display: block;
    margin: auto;
`

const RiskChart = ({ risks }) => {
    const chartHeight = risks.length * barInterval;
    const keyHeight = barInterval * 1.7;
    const keyTop = gridlineLabelHeight + chartHeight + 6;
    const svgHeight = keyTop + keyHeight;
    const svgWidth = barLabelWidth + barWidth + 8;
    return (
        <StyledSvg viewBox={[0, 0, svgWidth, svgHeight]}>
            <title>Your health risks</title>
            <GridLines x={barLabelWidth} y={0} width={barWidth} lineLength={chartHeight} />
            <RiskBars risks={risks} x={0} y={gridlineLabelHeight} />
            <ChartKey x={0} y={keyTop} />
        </StyledSvg>
    )
}

export default RiskChart;
