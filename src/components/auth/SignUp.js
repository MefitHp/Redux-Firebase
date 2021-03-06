import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../redux/actions/authActions';


class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { signUp } = this.props
        signUp(this.state)
    }
    render() {
        const { handleSubmit, handleChange } = this
        const { auth, authErr } = this.props
        if (auth.uid) return <Redirect to="/" />
        return (
            <div className="container">
                <form className="white" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' onChange={handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' onChange={handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            {authErr ? <p>{authErr}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authErr: state.auth.authErr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)