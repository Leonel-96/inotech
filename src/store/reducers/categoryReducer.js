export default function(state=[],action){

    switch(action.type){

        case 'ADD_CATEGORIES':
            let newState = [].concat(state)

            newState.push(action.payload)

            return newState
            default:
                return state
    }

}