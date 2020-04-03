import React from 'react';
import Index from "../components/layouts/Template1";
import styled from "styled-components";

const StyledContainer = styled.div`
  align-items: center;
  color: red;
`;

export const HomePage = () => (
    <Index>
        <StyledContainer>
        Im Home page...
        </StyledContainer>
    </Index>
);
