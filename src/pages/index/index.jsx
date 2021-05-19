import React from "react";
import {Route, useRouteMatch, withRouter} from 'react-router-dom'

import 'src/pages/index/index.scss'

import IndexMenu from "src/component/index-menu";
import IndexContent from "../../component/index-content";

function Index(props) {
    return (
        <div className="index-container">
            <div className='content-card__container'>
                <IndexMenu/>
                <Route path={props.match.path} component={IndexContent} />
            </div>
        </div>
    )
}

export default withRouter(Index)
