
//ALL REDUCERS HAVE 2 PARAMS
// 1. current starte, usually provide a default
// 2. The action object

export default(state = [], action) => {
    console.log("Dairy reducer is running")
    console.log(action.type)
    if(action.type === 'updateDairy'){
        let newState = [...state]
        if(action.payload.operation === '+'){
            newState[action.payload.indexToChange].quantity++
        } else if(action.payload.operation === '-'){
            newState[action.payload.indexToChange].quantity--
        }
        return newState;
    }else if(action.type === 'clearInv'){
        return []
    } else if(action.type === 'resetInv'){
        return []
    } else if(action.type === 'addItem-Dairy'){
        let newState = [...state]
        const { food, quantity } = action.payload
        newState.push({
            food,
            quantity
        })
        return newState
    } else if(action.type === 'getInv-dairy'){
        return action.payload.data
    } else {
        return state
    }
}