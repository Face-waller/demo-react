import {connect} from "react-redux";
import React from "react";
import {Button, Col, Input, List, Row} from "antd";

import ActionTypes from 'src/component/example/redux/redux-saga-example/actions/action-types'

function UserList(props) {
    const userInputChange = (event)=> {
        debugger
        props.dispatch({
            type: ActionTypes.INPUT_USER,
            inputUser: {
                userName: event.target.value
            }
        });
    }
    const addHandler = ()=> {
        if (props.inputUser.userName)
            props.dispatch({
                type: ActionTypes.USER_ADD,
                inputUser: props.inputUser,
            });
    }
    return (
        <div>
            <Row type="flex" justify="start">
                <Col span={4}>
                    <Input size="small" value={props.inputUser.userName} placeholder="用户名"
                           onChange={(event) => userInputChange(event)}/>
                </Col>
                <Col span={1}>
                    <Button type="primary" onClick={() => addHandler()} size="small"
                            loading={props.status === ActionTypes.USER_ADD}>Add</Button>
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
        inputUser: store.userStore.inputUser,
        userList: store.userStore.userList,
    }
}

export default connect(mapStateToProps)(UserList)