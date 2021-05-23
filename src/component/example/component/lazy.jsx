/*
React.lazy 和 Suspense 技术还不支持服务端渲染。
如果你想要在使用服务端渲染的应用中使用，我们推荐 Loadable Components 这个库
 */

import React, {Suspense, useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {SyncOutlined} from "@ant-design/icons";

const Test = (props)=>{
    const [imgUrl,setImgUrl] = useState('https://pic4.zhimg.com/80/v2-2f3362119b3683e23d108895a042b81b_1440w.jpg')
    useEffect(()=>{
        setTimeout(()=>{
            setImgUrl('https://pic4.zhimg.com/80/v2-c1244c055f22d15c551f88de3103403b_1440w.png')
        },2000)
    },[])
    return <div style={{height: 300, width: 300}}>
        <img src={imgUrl} style={{height: '100%'}} />
    </div>
}

const LazyComponent =  React.lazy(()=> new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({
            default: ()=> <Test />
        })
    },2000)
}))

function Lazy(props) {
    return <div className="context_box"  style={ { display: "flex", justifyContent: "center", alignItems: "center", height: 600 } }   >
        <Suspense fallback={ <div className="icon" ><SyncOutlined  spin  /></div> } >
            <LazyComponent />
        </Suspense>
    </div>
}

export default withRouter(Lazy)