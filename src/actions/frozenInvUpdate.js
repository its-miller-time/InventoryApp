// this file is an action creator 
// action creators return actions 
// An action is an object with at least 
// one property: type
// The action (object with a type property)
    // is then going ot be handed to the dispatch
    // The dispatch will send that action 
    // to all reducers 



export default(operation, indexToChange)=>{
    return {
        type: 'updateFrozen',
        payload: {
            operation,
            indexToChange
        }
    }
}