import React, {Fragment} from 'react';
import {MDBBtn} from "mdbreact";
import {Link, NavLink} from "react-router-dom";

export const Header = (props) => (
    <Fragment>
        Im Header
        <ul>
            <li><NavLink to={'/'} activeClassName={'active'}>Home</NavLink></li>
            <li><NavLink to={'/login'} activeClassName={'active'}>Login</NavLink></li>
        </ul>
    </Fragment>
);
