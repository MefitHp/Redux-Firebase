import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signup" activeClassName="active">Register</NavLink></li>
            <li><NavLink to="/signin" activeClassName="active">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
