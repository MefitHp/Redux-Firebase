export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //Make an async call

        dispatch({ type: 'CREATE_PROJECT', project: project })

    }
}