import React from "react";
import {Route, useRouteMatch, withRouter} from 'react-router-dom'

import 'src/pages/index/index.scss'

import IndexMenu from "src/component/other/index-menu";
import IndexContent from "../../component/other/index-content";

import {Provider} from "react-redux";

function Index(props) {
    return (
        <div className="index-container">
            <div className='content-card__container'>
                {/*可选参数*/}
                <Route path={`${props.match.url}/:componentPath?`} component={IndexMenu} />
                <Route path={`${props.match.url}/:componentPath`} component={IndexContent} />
            </div>
        </div>
    )
}

export default withRouter(Index)
