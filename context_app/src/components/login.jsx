import {useState } from "react";
  
const url = "https://address-book-0wtp.onrender.com"
export const Login = () => {
    const [phonenumber, setPhonenumber]  = useState('')
    const [password , setPassword] = useState('')
    let isLogged  = false
    const handleSubmit = () => {
        isLogged = true
        const obj = {
            "phoneNumber" : phonenumber,
            "password" : password
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
          };
          fetch(`${url}/login/v1`, requestOptions)
    }
    return (
        <>
         <div>
         <label for="phonenumber"> Phone Number:</label> 
         <input
          id="phonenumber"
          type="text"
          autocomplete="off"
          value={phonenumber}
          onChange={(e) => {
            setPhonenumber(e.target.value);
          }}
         />
         </div>
        <br />
         <div>
         <label for="password"> PassWord:</label> 
         <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
         />
         </div>
         <button onClick={handleSubmit}>
            Login
         </button>
         </>

     )
}