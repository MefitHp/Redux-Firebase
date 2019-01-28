export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //Make an async call
        const firestore = getFirestore()

        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Mefit',
            authorLastName: 'Hernández',
            authorId: 1234,
            createdAt: new Date()
        }).then(() => dispatch({ type: 'CREATE_PROJECT', project: project }))
            .catch(err => dispatch({ type: 'CREATE_PROJECT_ERROR', err }))
    }
}