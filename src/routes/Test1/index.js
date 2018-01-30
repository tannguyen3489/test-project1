import {injectReducer} from '../../store/reducers'

export default (store) => ({
    path: 'test1',
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const Counter = require('./containers/Test1Container').default
            const reducer = require('./modules/test1').default

            /*  Add the reducer to the store on key 'test1'  */
            injectReducer(store, {key: 'test1', reducer})

            /*  Return getComponent   */
            cb(null, Counter)

            /* Webpack named bundle   */
        }, 'test1')
    }
})
