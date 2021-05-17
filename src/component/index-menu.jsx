import "src/component/index-menu.scss"

import {DownOutlined, RightOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {getChildrenByOptionId, getOptions} from "src/utils/js-tools";
import {Table} from "antd";
const {Column} = Table

function IndexMenu (props) {
    // 选项列表
    const [options,setOptions] = useState([])
    // 已选选项
    const [selectedOptionId, setSelectedOptionId] = useState(null)
    // 已展开项
    const [expandedOptionId, setExpandedOptionId] = useState(null)
    // 左侧已展开项表格数据
    const [expandedTableData, setExpandedTableData] = useState([])

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
                let tempOptions = JSON.parse(JSON.stringify(options))
                let option = tempOptions.find(n=>n.id === expandedOptionId)
                option.childrenSelectedId = record.id
                setOptions(tempOptions)

            }, // 点击行
            onDoubleClick: event => {},
            onContextMenu: event => {},
            onMouseEnter: event => {}, // 鼠标移入行
            onMouseLeave: event => {},
        };
    }
    const leftOptionIcoClick = (e,mark,id)=>{
        if (e) {
            e.stopPropagation();
        }
        switch (mark) {
            case 'down':{
                setExpandedOptionId(null)
                setExpandedTableData([])
                break;
            }
            case 'right':{
                // 获取当前表格数据
                let list = getChildrenByOptionId(id)
                setSelectedOptionId(id)
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
                            <div style={{display: expandedOptionId === option.id ? 'block' : 'none'}}>
                                {
                                    expandedTableData.length > 0 ?
                                        <Table
                                            dataSource={expandedTableData}
                                            pagination={false}
                                            showHeader={false}
                                            size='small'
                                            scroll={{y:'300px'}}
                                            rowKey='id'
                                            onRow={tableRowEvent}
                                            rowClassName= {(record, index) => {
                                                return record.id === option.childrenSelectedId ? 'row-active' : null
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

export default IndexMenu