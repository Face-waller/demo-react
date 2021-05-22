import React from "react";
import {withRouter} from "react-router-dom";

function FatherComponent({ children }){
    const newChildren = React.cloneElement(children, { age: 18})
    return <div> { newChildren } </div>
}

function SonComponent(props){
    return <div>hello,{props.name},你{props.age}岁了吗?</div>
}

function CloneElementApi(props) {
    return <div>
        <FatherComponent>
            <SonComponent name="alien" />
        </FatherComponent>
    </div>
}

export default withRouter(CloneElementApi)