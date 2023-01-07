import React, {  useContext, useReducer, useEffect  } from 'react'

import reducer from '../reducers/user_reducer'

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
    return (
        <UserContext.Provider value='user context'>{children}</UserContext.Provider>
    )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
