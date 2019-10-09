import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavigationButtons from "../NavigationButtons";
import { ProgressBar } from "./ProgressBar";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
`

export const CarouselNavigation = ({ routes }) => {
    if (!(routes instanceof Array)) {
        throw new Error("'routes' must be an array of strings.");
    }

    const { pathname } = useLocation();
    const routeIndex = routes.indexOf(pathname);
    const previousRoute = routes[routeIndex - 1];
    const nextRoute = routes[routeIndex + 1];
    return (
        <StyledNav>
            <ProgressBar routes={routes} pathname={pathname} />
            <NavigationButtons previousRoute={previousRoute} nextRoute={nextRoute} />
        </StyledNav>
    )
}