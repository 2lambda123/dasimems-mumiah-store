import {
    USER_INPUT
} from "../_actions"

const user_reducer = (state, action) => {
    return {...state}
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default user_reducer