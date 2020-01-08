import React from "react";
import { useDispatch } from "react-redux";
import InfoIcon from "../InfoIcon";
import { populateModal } from "../../Actions";

const InfoButton = ({explanation, title, inline, ...props}) => {
    if (!title) title = "Explanation"
    const dispatch = useDispatch();
    const onClick = content => dispatch(populateModal(content, title));
    return <InfoIcon explanation={explanation} inline={inline} onClick={onClick} {...props} />
}

export default InfoButton;
