const initState = {
    projects: [
        { id: '1', title: 'Project 1', content: 'lorem ipsum bla bla' },
        { id: '2', title: 'Project 2', content: 'lorem ipsum bla bla' },
        { id: '3', title: 'Project 3', content: 'lorem ipsum bla bla' }
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer