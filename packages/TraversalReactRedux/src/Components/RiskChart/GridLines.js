import React from 'react';
import colors from '../../Theme/base/colors';
import { gridlineLabelHeight } from "./chartSettings";

const GridLine = ({ percent, length }) => {
    return (
        <svg x={`${percent}%`} overflow="visible">
            <text x={2} y={gridlineLabelHeight / 2} textAnchor="middle">{percent}%</text>
            <line x1={0} y1={gridlineLabelHeight} x2={0} y2={length + gridlineLabelHeight} stroke={colors.grey300} strokeWidth="1" strokeDasharray="1 2" />
        </svg>
    );
}

const intervals = [0, 25, 50, 75, 100];

const GridLines = ({x, y, width, lineLength}) => {
    return (
        <svg x={x} y={y} width={width} overflow="visible">
            {intervals.map(pc => <GridLine key={pc} percent={pc} length={lineLength} />)}
        </svg>
    );
}

export { GridLines }