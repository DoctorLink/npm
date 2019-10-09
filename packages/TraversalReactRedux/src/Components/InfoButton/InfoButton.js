import React from "react";
import { useDispatch } from "react-redux";
import InfoIcon from "../InfoIcon";
import { populateModal } from "../../Actions";

const InfoButton = ({explanation, inline, ...props}) => {
    const dispatch = useDispatch();
    const onClick = content => dispatch(populateModal(content));
    return <InfoIcon explanation={explanation} inline={inline} onClick={onClick} {...props} />
}

export default InfoButton;
