import "src/component/other/index-menu.scss"

import {DownOutlined, RightOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {getChildrenByOptionId, getOptions} from "src/utils/js-tools";
import {Table} from "antd";
import {withRouter} from "react-router-dom";
const {Column} = Table

function IndexMenu (props) {
    // 选项列表
    const [options,setOptions] = useState([])
    // 已选选项id
    const [selectedOptionId, setSelectedOptionId] = useState(null)
    // 已展开项id
    const [expandedOptionId, setExpandedOptionId] = useState(null)
    // 左侧已展开项表格数据
    const [expandedTableData, setExpandedTableData] = useState([])
    // 已选表格行Id
    const [selectedTableRowId, setSelectedTableRowId] = useState(null)

    const leftOptionClick = (e,id)=> {
        setSelectedOptionId(id)
        if (id === expandedOptionId) {
            leftOptionIcoClick(null,'down', id)
        } else {
            leftOptionIcoClick(null,'right', id)
        }
    }

    const tableRowEvent = (record)=>{
        return {
            onClick: event => {
                props.history.push(`/index/${record.path}`)
            },
        };
    }
    const leftOptionIcoClick = (e,mark,id)=>{
        if (e) {
            e.stopPropagation();
        }
        switch (mark) {
            case 'down':{
                setSelectedOptionId(null)
                setExpandedOptionId(null)
                setExpandedTableData([])
                break;
            }
            case 'right':{
                // 获取当前表格数据
                let list = getChildrenByOptionId(id)
                setSelectedOptionId(null)
                setExpandedOptionId(id)
                setExpandedTableData(list)
                break;
            }
            default:
                break;
        }
    }

    useEffect(()=>{
        let options = getOptions()
        setOptions(options)
        let id = options[0] ? options[0].id : null
        setSelectedOptionId(id)
        leftOptionClick(null,id)
    },[])

    useEffect(()=>{
        let theF = options.find(n=>n.id === expandedOptionId)
        if (theF && theF.children) {
            let theOne = theF.children.find(n=>n.path === props.match.params.componentPath)
            setSelectedTableRowId(theOne ? theOne.id : null)
        }
    },[props.match.params,options,expandedOptionId])
    return (
        <div className='content-container__left'>
            {
                options.length ?
                    options.map(option=>
                        <div
                            key={option.id}
                            className={`content-container__left--item ${selectedOptionId === option.id ? 'active' : null}`}>
                            <div
                                onClick={e=> leftOptionClick(e,option.id)}
                                className='item-title'>
                                {
                                    expandedOptionId === option.id ?
                                        <DownOutlined onClick={e=> leftOptionIcoClick(e,'down',option.id)} />
                                        : <RightOutlined onClick={e=> leftOptionIcoClick(e,'right',option.id)} />
                                }
                                <span
                                    className='content-container__item--label'>
                                    {option.name}
                                </span>
                            </div>
                            <div style={{display: expandedOptionId === option.id ? 'block' : 'none',marginLeft: 12}}>
                                {
                                    expandedTableData.length > 0 ?
                                        <Table
                                            dataSource={expandedTableData}
                                            pagination={false}
                                            showHeader={false}
                                            size='small'
                                            rowKey='id'
                                            onRow={tableRowEvent}
                                            rowClassName= {(record, index) => {
                                                return (expandedOptionId === option.id && record.id === selectedTableRowId) ? 'row-active' : null
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
    )
}

export default withRouter(IndexMenu)