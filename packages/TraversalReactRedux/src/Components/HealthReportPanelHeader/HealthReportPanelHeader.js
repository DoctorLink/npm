import React from "react";
import { PanelHeader, PanelBodyText } from ".."
import colors from "../../Theme/base/colors";

export default ({ children }) => (
    <PanelHeader color={colors.grey200}>
        <PanelBodyText bold>
            {children}
        </PanelBodyText>
    </PanelHeader>
);