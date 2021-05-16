import React, {Component} from "react";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'

import 'src/pages/index/index.css'

class Index extends Component{
    render() {
        return (
            <div>
                <div className='top-gallery'/>
                <div className="content-container">
                    <div className='content-card__container'>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Index)