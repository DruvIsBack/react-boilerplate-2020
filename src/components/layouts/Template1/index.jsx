import React from 'react';
import {MDBContainer} from "mdbreact";
import styled from 'styled-components';

import { Container, Heading } from 'styled-minimal';
import {Header} from "./header";
import {Footer} from "./footer";

const StyledContainer = styled(Container)`
  align-items: center;
  text-align: center;

  h1,
  a {
    color: #fff;
    line-height: 1;
  }

  a {
    text-decoration: underline;
  }
`;

const Index = (props) => (
    <MDBContainer className="mt-5 text-center">
        <Header/>
        <StyledContainer>
            {props.children}
        </StyledContainer>
        <Footer/>
    </MDBContainer>
);

export default Index;
