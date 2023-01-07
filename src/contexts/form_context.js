import React, { useContext, useReducer } from 'react'
import form_reducer from '../reducers/form_reducer';

const FormContext = React.createContext();

export const initialFormState = {
    email: "",
    name: "",
    password: "",
    phoneNumber: "",
}

export const FormProvider = ({children}) => {

    const [formState, dispatch] = useReducer(form_reducer, initialFormState);

    const changeValue = (type, payload)=>{

      if(type && payload){

        dispatch({ type, payload });
        
      }else{
        throw new Error("Expected two parameters");
      }
    }

  return (
    <FormContext.Provider value={{...formState, changeValue}}>

        {children}
      
    </FormContext.Provider>
  )
}

export const useFormContext = () =>{
    return useContext(FormContext);
}

export default useFormContext
