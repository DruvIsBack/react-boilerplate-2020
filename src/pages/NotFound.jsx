import React from 'react';
import { MDBJumbotron, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';
import Index from "../components/layouts/Template1";

export const NotFound = () => (
    <Index>
        <MDBRow>
            <MDBCol>
                <MDBJumbotron>
                    <h2 className="h1 display-3">Oops! Invalid Request!</h2>
                    <p className="lead">
                        You try a invalid page, please try again or goto below link for Home Page.
                    </p>
                    <p className="lead">
                        <Link to={'/'}><MDBBtn color="primary">GOTO HOME</MDBBtn></Link>
                    </p>
                </MDBJumbotron>
            </MDBCol>
        </MDBRow>
    </Index>
);
