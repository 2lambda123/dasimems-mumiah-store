import {
    USER_INPUT
} from "../_actions"

const user_reducer = (state, action) => {

    if(action.type === USER_INPUT){
        const {name, value} = action.payload
        return {...state, [name]: value }
    }
    
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default user_reducer