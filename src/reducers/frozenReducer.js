
//ALL REDUCERS HAVE 2 PARAMS
// 1. current starte, usually provide a default
// 2. The action object

const seedData = [
    {
        food: 'pizza',
        quantity: 12,
    },
    {
        food: 'icecream',
        quantity: 21,
    },
    {
        food: 'frozen veggies',
        quantity: 132,
    },
]


export default (state = seedData, action) => {
    console.log("Frozen reducer is running")
    console.log(action.type, action.payload)
    if(action.type === 'updateFrozen'){
        let newState = [...state];
        if(action.payload.operation === '+'){
            newState[action.payload.indexToChange].quantity++
        } else if(action.payload.operation === '-'){
            newState[action.payload.indexToChange].quantity--
        }
        return newState;
    } else if(action.type === 'clearInv'){
        return []
    } else if(action.type === 'resetInv'){
        return seedData
    } else if(action.type === 'addItem-Frozen'){
        let newState = [...state]
        const {food, quantity} = action.payload
        newState.push({
            food,
            quantity
        })
        return newState
    }
    else {
        return state
    }
}

