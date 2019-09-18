
//ALL REDUCERS HAVE 2 PARAMS
// 1. current starte, usually provide a default
// 2. The action object

const seedData = [
    {
        food: 'steak',
        quantity: 20,
    },
    {
        food: 'chicken',
        quantity: 50,
    },
    {
        food: 'fish',
        quantity: 12,
    },
    {
        food: 'crab',
        quantity: 120,
    },
]


export default (state = seedData, action) => {
    console.log("Meat reducer is running!");
    console.log(action.type)
    if(action.type === 'updateMeat'){
        let newState = [...state]
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
    } else if(action.type === 'addItem-Meat'){
        let newState = [...state]
        const {food, quantity} = action.payload
        newState.push({
            food,
            quantity
        })
        return newState
    }
    return state;
}