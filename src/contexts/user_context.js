import React, {  useContext, useReducer, useEffect  } from 'react'

import reducer from '../reducers/user_reducer'
import { USER_INPUT } from '../_actions'

const initialState = {
   name: '',
   email: '',
   password: '',
   password_confirmation: '',
   accept_terms: false
}


const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        if(name === 'accept_terms') {
            value = e.target.checked
        }
        dispatch({type: USER_INPUT, payload: {name, value} })
    }

    const validateState = () => {
        return state.password === state.password_confirmation
        && state.accept_terms
        && state.password.length > 3
    }

    const onSubmit = (e) => {
        e.preventDefault()
        alert(`Hello ${state.name} you have successfully registered`)
    }

    return (
        <UserContext.Provider 
            value={{
                ...state, 
                onChange, 
                validateState, 
                onSubmit
        }}>
            {children}   
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
