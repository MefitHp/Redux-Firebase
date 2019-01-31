import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/authActions'
import { Redirect } from 'react-router-dom'


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { signIn } = this.props
        signIn(this.state)
        e.preventDefault()
    }

    render() {
        const { authError, auth } = this.props
        const { handleSubmit, handleChange } = this
        if (auth.uid) return <Redirect to="/" />
        return (
            <div className="container">
                <form className="white" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                    <div className="red-text center">
                        {authError && <p>{authError}</p>}
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)