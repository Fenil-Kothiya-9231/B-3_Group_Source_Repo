import React from "react";
// import {getInitialFormValues} from "./Reducer.js"
import UserForm  from './UserForm';
// import { Formik } from 'formik';

export const AddUser = () => {
const url = "https://users-acontext-api.onrender.com"

    const handleSubmit = (user,{resetForm}) => {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
    
          };
          fetch(`${url}/users`, requestOptions)
          resetForm({ values: "" })
      }
      return(
        <UserForm submit={handleSubmit}/>
      )
}