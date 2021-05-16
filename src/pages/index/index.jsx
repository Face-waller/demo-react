import React, {Component} from "react";
import {withRouter} from 'react-router-dom'

import 'src/pages/index/index.scss'
import {getOptions, getChildrenByOptionId} from "../../utils/js-tools";
import {DownOutlined, RightOutlined} from "@ant-design/icons";
import {Table} from "antd";

const { Column } = Table;

class Index extends Component{
    state = {
        // 选项列表
        options: [],
        // 已选选项
        selectedOptionId: null,
        // 已展开项
        expandedOptionId: null,
        // 左侧已展开项表格数据
        expandedTableData: [],
    }
    componentWillMount() {
        let options = getOptions()
        this.setState({
            options: options
        })
    }
    componentDidMount() {
        let id = this.state.options[0] ? this.state.options[0].id : null
        this.setState({
            selectedOptionId: id,
        })
        this.leftOptionClick(null,id)
    }
    leftOptionClick = (e,id)=> {
        let {expandedOptionId} = this.state
        this.setState({
            selectedOptionId: id
        })
        if (id === expandedOptionId) {
            this.leftOptionIcoClick(null,'down', id)
        } else {
            this.leftOptionIcoClick(null,'right', id)
        }
    }
    leftOptionIcoClick = (e,mark,id)=>{
        switch (mark) {
            case 'down':{
                this.setState({
                    expandedOptionId: null,
                    expandedTableData: [],
                })
                break;
            }
            case 'right':{
                // 获取当前表格数据
                let list = getChildrenByOptionId(id)
                this.setState({
                    selectedOptionId: id,
                    expandedOptionId: id,
                    expandedTableData: list,
                })
                break;
            }
            default:
                break;
        }
    }
    render() {
        let {
            options,
            selectedOptionId,
            expandedOptionId,
            expandedTableData,
        } = this.state
        return (
        <div className="index-container">
            <div className='content-card__container'>
                <div className='content-container__left'>
                    {
                        options.length ?
                        options.map(option=>
                            <div
                                onClick={e=> this.leftOptionClick(e,option.id)}
                                key={option.id}
                                className={`content-container__left--item ${selectedOptionId === option.id ? 'active' : null}`}>
                                <div className='item-title'>
                                    {
                                        expandedOptionId === option.id ?
                                            <DownOutlined onClick={e=> this.leftOptionIcoClick(e,'down',option.id)} />
                                            : <RightOutlined onClick={e=> this.leftOptionIcoClick(e,'right',option.id)} />
                                    }
                                    <span className='content-container__item--label'>{option.name}</span>
                                </div>
                                <div style={{display: expandedOptionId === option.id ? 'block' : 'none'}}>
                                    {
                                        expandedTableData.length > 0 ?
                                        <Table
                                            dataSource={expandedTableData}
                                            pagination={false}
                                            defaultExpandAllRows
                                            showHeader={false}
                                            size='small'
                                            scroll={{y:'300px'}}
                                            rowKey='id'
                                            expandRowByClick
                                            rowClassName= {(record, index) => 'table-row__no-bottom'}
                                            expandable={{
                                                expandIcon: ({ expanded, onExpand, record }) =>
                                                record.children && record.children.length > 0 ?
                                                    expanded ?
                                                    <button type="button"
                                                            className="ant-table-row-expand-icon ant-table-row-expand-icon-expanded"
                                                            aria-label="Collapse row"
                                                            onClick={e => {
                                                                // 防止事件冒泡到react合成时间上
                                                                e.stopPropagation()
                                                                onExpand(record, e)
                                                            }}
                                                    />
                                                    : <button type="button"
                                                             className="ant-table-row-expand-icon ant-table-row-expand-icon-collapsed"
                                                             aria-label="Expand row"
                                                             onClick={e => {
                                                                 // 防止事件冒泡到react合成时间上
                                                                 e.stopPropagation()
                                                                 onExpand(record, e)
                                                             }}
                                                        />
                                                 : null
                                            }}
                                        >
                                            <Column
                                                title="name"
                                                dataIndex="name"
                                                render={(text, record) => {
                                                    return (
                                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                                            <span>{text}</span>
                                                        </div>
                                                    )
                                                }}
                                            />
                                        </Table>
                                        : <div style={{marginLeft: 10}}>暂无数据...</div>
                                    }
                                </div>
                            </div>
                        )
                        : null
                    }
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(Index)
