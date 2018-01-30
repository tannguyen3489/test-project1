import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({children}) => (
    <div className='container'>
        {/*<h1>React Redux Starter Kit</h1>*/}
        {/*<IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>*/}
        {/*{' · '}*/}
        {/*<Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>*/}
        {/*{' · '}*/}
        {/*<Link to='/test1' activeClassName='page-layout__nav-item--active'>Test1</Link>*/}
        <div className='page-layout__viewport'>
            {children}
        </div>
    </div>
)
PageLayout.propTypes = {
    children: PropTypes.node,
}

export default PageLayout
