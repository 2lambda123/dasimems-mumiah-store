import React, {  useContext, useReducer, useEffect  } from 'react'
import axios from 'axios'

import reducer from '../reducers/user_reducer'
import { USER_INPUT } from '../_actions'
import { baseUrl } from '../utils/constant'

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

    const onRegSubmit =  async(state) => {
      axios.put(`${baseUrl}/register`, state)
      .then((res) => {
          if(res.status === 201) {
            console.log("Reg successful")
          } else {
              console.log("error occured")
          }
      })
      .catch((err) => {
          console.log(err)
      })
    }

    return (
        <UserContext.Provider 
            value={{
                ...state, 
                onChange, 
                onRegSubmit
        }}>
            {children}   
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
