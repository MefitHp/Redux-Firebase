import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../redux/actions/authActions';

const SignedInLinks = (props) => {
    const { logOut } = props
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/" onClick={logOut}>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">MH</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)
