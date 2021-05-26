import {connect} from "react-redux";
import React from "react";
import {Button, Col, Input, List, Row} from "antd";

import ActionTypes from 'src/component/example/redux/redux-saga-example/actions/action-types'

function UserList(props) {
    const userInputChange = (event)=> {
        props.dispatch({
            type: ActionTypes.SET_INPUT_USER,
            inputUserName: event.target.value
        });
    }
    const addHandler = ()=> {
        if (props.inputUserName)
            props.dispatch({
                type: ActionTypes.SET_USER_ADD,
                inputUserName: props.inputUserName,
            });
    }
    return (
        <div>
            <Row type="flex" justify="start">
                <Col span={4}>
                    <Input size="small" value={props.inputUserName} placeholder="用户名"
                           onChange={(event) => userInputChange(event)}/>
                </Col>
                <Col span={1}>
                    <Button type="primary" onClick={() => addHandler()} size="small">Add</Button>
                </Col>
            </Row>
            <List
                header={<div>用户名</div>}
                bordered
                dataSource={props.userList}
                renderItem={(item,index) => (<List.Item key={index}>{item}</List.Item>)}
            />
        </div>
    );
}

function mapStateToProps(store) {
    return {
        inputUserName: store.userStore.inputUserName,
        userList: store.userStore.userList,
    }
}

export default connect(mapStateToProps)(UserList)