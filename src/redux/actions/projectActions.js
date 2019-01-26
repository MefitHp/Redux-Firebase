export const createProject = (project) => {
    return (dispatch, getState) => {
        //Make an async call

        dispatch({ type: 'CREATE_PROJECT', project: project })

    }
}