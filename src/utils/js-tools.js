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
                    name: 'Component',
                    path: 'component'
                },
                {
                    id: 2,
                    name: 'PureComponent',
                    path: 'pure-component'
                },
                {
                    id: 3,
                    name: 'memo',
                    path: 'memo'
                },
                {
                    id: 4,
                    name: 'forwardRef',
                    path: 'forward-ref'
                },
                {
                    id: 5,
                    name: 'lazy',
                    path: 'lazy',
                },
                {
                    id: 6,
                    name: 'Suspense',
                    path: 'suspense'
                },
                {
                    id: 7,
                    name: 'Profiler',
                    path: 'profiler'
                },
            ]
        },
        {
            id: 2,
            name: 'React工具类使用',
            children: [
                {
                    id: 1,
                    name: 'createElement',
                    path: 'create-element-api'
                },
                {
                    id: 2,
                    name: 'cloneElement',
                    path: 'clone-element-api',
                },
                {
                    id: 3,
                    name: 'createContext',
                    path: 'create-context-api',
                },
                {
                    id: 4,
                    name: 'createFactory',
                    path: 'create-factory-api',
                },
                {
                    id: 5,
                    name: 'createRef',
                    path: 'create-ref-api',
                },
                {
                    id: 6,
                    name: 'Children',
                    path: 'children-api'
                },
            ]
        },
        {
            id: 3,
            name: 'Hooks使用',
            children: [
                {
                    id: 1,
                    name: 'useState',
                    path: 'use-state',
                },
                {
                    id: 2,
                    name: 'useEffect',
                    path: 'use-effect',
                },
                {
                    id: 3,
                    name: 'useMemo',
                    path: 'use-memo',
                },
                {
                    id: 4,
                    name: 'useCallback',
                    path: 'use-callback',
                },
                {
                    id: 5,
                    name: 'useRef',
                    path: 'use-ref',
                },
                {
                    id: 6,
                    name: 'useLayoutEffect',
                    path: 'use-layout-effect',
                },
                {
                    id: 7,
                    name: 'useReducer',
                    path: 'use-reducer',
                },
                {
                    id: 8,
                    name: 'useContext',
                    path: 'use-context',
                },
                {
                    id: 9,
                    name: 'useImperativeHandle',
                    path: 'use-imperative-handle'
                },
                {
                    id: 10,
                    name: 'useTransition',
                    path: 'use-transition',
                },
            ]
        },
        {
            id: 4,
            name: 'redux使用',
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