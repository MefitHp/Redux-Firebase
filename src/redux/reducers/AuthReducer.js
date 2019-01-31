import toastr from 'toastr'
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return { ...state, authError: 'Login error' }

        case 'LOGIN_SUCCESS':
            return { ...state, authError: null }

        case 'SIGNOUT_SUCCESS':
            console.log('Sign out success')
            return state

        case 'SIGNUP_SUCCESS':
            toastr.success('User created')
            console.log('Signup success')
            return { ...state, authErr: null }

        case 'SIGNUP_ERR':
            console.log('Signup error')
            return { ...state, authErr: action.err.message }

        default:
            return state
    }

}

export default authReducer