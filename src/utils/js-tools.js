/**
 * 获取options 列表
 */
function getOptions() {
    return [
        {
            id: 1,
            name: 'React组件使用',
            children: [
                {
                    id: 1,
                    name: 'Component'
                },
                {
                    id: 2,
                    name: 'PureComponent'
                },
                {
                    id: 3,
                    name: 'memo'
                },
                {
                    id: 4,
                    name: 'forwardRef'
                },
                {
                    id: 5,
                    name: 'lazy'
                },
                {
                    id: 6,
                    name: 'Suspense'
                },
                {
                    id: 7,
                    name: 'Profiler'
                },
            ]
        },
        {
            id: 2,
            name: 'React工具类使用',
            children: [
                {
                    id: 1,
                    name: 'createElement'
                },
                {
                    id: 2,
                    name: 'cloneElement'
                },
                {
                    id: 3,
                    name: 'createContext'
                },
                {
                    id: 4,
                    name: 'createFactory'
                },
                {
                    id: 5,
                    name: 'createRef'
                },
                {
                    id: 6,
                    name: 'Children'
                },
            ]
        },
        {
            id: 3,
            name: 'Hooks使用',
            children: [
                {
                    id: 1,
                    name: 'useState'
                },
                {
                    id: 2,
                    name: 'useEffect'
                },
                {
                    id: 3,
                    name: 'useMemo'
                },
                {
                    id: 4,
                    name: 'useCallback'
                },
                {
                    id: 5,
                    name: 'useRef'
                },
                {
                    id: 6,
                    name: 'useLayoutEffect'
                },
                {
                    id: 7,
                    name: 'useReducer'
                },
                {
                    id: 8,
                    name: 'useContext'
                },
                {
                    id: 9,
                    name: 'useImperativeHandle'
                },
                {
                    id: 10,
                    name: 'useTransition'
                },
            ]
        },
        {
            id: 4,
            name: 'redux使用'
        },
    ]
}

/**
 * 根据optionId获取option的children
 * @param optionId
 * @returns {*|null}
 */
function getChildrenByOptionId(optionId) {
    let theOne = getOptions().find(n=>n.id === optionId)
    if (theOne && theOne.children) {
        return theOne.children
    } else {
        return []
    }
}

export {
    getOptions,
    getChildrenByOptionId
}