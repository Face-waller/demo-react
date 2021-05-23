/*
为了方便使用，Redux 的作者封装了一个 React 专用的库 React-Redux
实际项目中，你应该权衡一下，是直接使用 Redux，还是使用 React-Redux。
后者虽然提供了便利，但是需要掌握额外的 API，并且要遵守它的组件拆分规范。

UI组件:
React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）。
因为不含有状态，UI 组件又称为"纯组件"，即它纯函数一样，纯粹由参数决定它的值。
UI 组件有以下几个特征
    只负责 UI 的呈现，不带有任何业务逻辑
    没有状态（即不使用this.state这个变量）
    所有数据都由参数（this.props）提供
    不使用任何 Redux 的 API

容器组件:
    负责管理数据和业务逻辑，不负责 UI 的呈现
    带有内部状态
    使用 Redux 的 API

UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。

如果一个组件既有 UI 又有业务逻辑，那怎么办？
回答是，将它拆分成下面的结构：
    外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。
--> http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

React-Redux 规定，
    所有的 UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。

connect():
    用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来
    （1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数

    （2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。

    import { connect } from 'react-redux'

    const VisibleTodoList = connect(
      mapStateToProps,
      mapDispatchToProps
    )(TodoList)

    connect方法接受两个参数：mapStateToProps 和 mapDispatchToProps。
    它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），
    后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。

<Provider> 组件:
    connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数

一种解决方法是将state对象作为参数，传入容器组件。但是，这样做比较麻烦，尤其是容器组件可能在很深的层级，一级级将state传下去就很麻烦。

React-Redux 提供Provider组件，可以让容器组件拿到state。
    import { Provider } from 'react-redux'
    let store = createStore(todoApp);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )

 */

import React from "react";
import {withRouter} from "react-router-dom";
import connect from "react-redux/lib/connect/connect";
import {createStore} from "redux";
import actions from "src/component/example/redux/react-redux-example/actions";
import reducer from "src/component/example/redux/react-redux-example/reducer";
import {Provider} from "react-redux";

const store = createStore(reducer)

function mapStateToProps(state) {
    return {
        foo: state.foo,
        count: state.count,
    }
}

function mapDispatchToProps(dispatch) { // 默认传递参数就是dispatch
    return {
        onClick: (type) => {
            dispatch(type);
        }
    };
}

// 容器组件
function TodoList(props) {
    const {foo,onClick} = props
    return <div>
        <div>{foo}</div>
        <button onClick = {onClick(actions.increase)}>点击increase</button>
        <button onClick = {onClick(actions.decrease)}>点击decrease</button>
    </div>
}

TodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)

function ReactReduxExample(props) {
    return <Provider store={store}>
        <TodoList />
    </Provider>
}

export default withRouter(ReactReduxExample)
