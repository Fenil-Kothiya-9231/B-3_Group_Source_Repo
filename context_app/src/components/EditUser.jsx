import { useState } from "react";
import UserForm from './UserForm';
// import { Formik } from 'formik';
// import { Button, Spinner } from 'react-bootstrap';
// import { isDisabled } from "@testing-library/user-event/dist/utils";

export const EditUser = () => {
    const [id, setId] = useState("");
    const [user,setUser] = useState({})
    const url = "https://users-acontext-api.onrender.com/users";

    const handleSubmit = (value,{ resetForm }) => {
      const comObj = {}
      if(user.name !== value.name){
        comObj.name = value.name
      }
      if(user.city !== value.city){
        comObj.city = value.city
      }
      if(user.email !== value.email){
        comObj.email = value.email
      }
      if(user.phoneNumber.join("") !== value.phoneNumber.join("")){
        comObj.phoneNumber = value.phoneNumber
      }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comObj)
    
          };
        fetch(url + '/' + `${id}`, requestOptions)
        resetForm({ values: "" })
        setUser({})
        setId("")
    }

    return (
        <>
            <input type="text" onChange={(e) => {
                setId(e.target.value)
            }} value={id} disabled={user.id ? (
                true
              ) : null} />
            <button onClick={async () => {
                // console.log("-----------",id)
                const response = await fetch(url + '/' + `${id}`);
                const jsonResponse = await response.json()
                setUser(jsonResponse)
                
            }} disabled={user.id ? (
                true
              ) : null} >Submit</button>
           {user.id ? (
        <div>
        <UserForm user={user} submit={handleSubmit}/>
      </div>
      ) : null}
        </>
    )
}


