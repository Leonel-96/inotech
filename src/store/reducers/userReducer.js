export default(state=[],action) =>{  
    switch (action.type) {
        case 'LOGIN':
            let newState = [].concat(state)
            newState.push(action.payload)
            return newState
        case 'REGISTER':
            let nState = [].concat(state)
            nState.push(action.payload)
           return nState
            
        default:
            return state 
    }
}