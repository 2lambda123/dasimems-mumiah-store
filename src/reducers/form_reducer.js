import { FORM_EMAIL, FORM_NAME, FORM_PASSWORD, FORM_PHONE_NUMBER } from "../_actions";


const form_reducer =  (state, action) =>{

    var {type, payload} = action; 

    switch(type){
        case FORM_NAME:
            return {...state, name: payload}

        case FORM_EMAIL:
            return {...state, email: payload}

        case FORM_PASSWORD:
            return {...state, password: payload}

        case FORM_PHONE_NUMBER:
            return {...state, phoneNumber: payload}

        default:
            return state;
    }

}

export default form_reducer