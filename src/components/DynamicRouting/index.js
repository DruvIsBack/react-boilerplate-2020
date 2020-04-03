import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import * as PropTypes from "prop-types";

const DynamicRouting = (props)=>{
    return (
        <Route
            path={props.path}
            exact={props.exact}
            component={()=>(
                <Fragment>
                        {props.isComponentVariable?<props.component/>:props.component}
                </Fragment>
            )}
        />
    );
};

DynamicRouting.prototype = {
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    component: PropTypes.oneOf([
        PropTypes.element,
        PropTypes.object,
        PropTypes.any
    ]).isRequired,
    isComponentVariable: PropTypes.bool.isRequired
};
DynamicRouting.defaultProps = {
    path: false,
    exact: true,
    isComponentVariable: false
};

export default DynamicRouting;
