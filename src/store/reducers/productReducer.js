export default function(state=[],action){

    switch(action.type){

        case 'ADD_PRODUCTS':
            let newState =[].concat(state)

            newState.push(action.payload)
            
            return newState
           break;
            default:
                return state
    }

}