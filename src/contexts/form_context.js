import React, { useContext, useReducer } from 'react'
import form_reducer from '../reducers/form_reducer'
import { SET_FORM_DETAILS } from '../_actions'

const FormContext = React.createContext()

export const initialFormState = {
  email: '',
  name: '',
  password: '',
  phoneNumber: '',
}

export const FormProvider = ({ children }) => {
  const [formState, dispatch] = useReducer(form_reducer, initialFormState)

  const changeValue = (type, payload) => {
    if (type && payload) {
      dispatch({ type, payload })
    } else {
      throw new Error('Expected two parameters')
    }
  }

  const setFormDetails = (payload) => {
    if (payload && typeof payload === 'object') {
      dispatch({ type: SET_FORM_DETAILS, payload })
    } else {
      throw new Error('One argument required and must be a typeof object')
    }
  }

  return (
    <FormContext.Provider value={{ ...formState, changeValue, setFormDetails }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => {
  return useContext(FormContext)
}

export default useFormContext
