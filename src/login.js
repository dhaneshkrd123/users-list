import React, { useEffect, useState } from 'react';
import './style.css';

import { Link } from "react-router-dom";
import {service} from './service';

const Login=({history})=>{
 
    const[values,setvalues]=useState({
        username:'',
        password:'',
    })
    const[loginFlag,setLoginFlag]=useState(false)
    const[errors,setErrors]=useState({
    username:'',
    password:''
    })
    useEffect(()=>{
        service.userlistAll();
    },[])
const handleChange=(e)=>{
const{name,value}=e.target
    setvalues({
   ...values,
   [name]:value 
})
}
const staticValidate = () => {
  let errors = {}
  let formIsValid = true;

  if (!values.username.trim()) {
      formIsValid = false
      errors.username = 'Enter Username '
  } else {
     
          errors.username = ''
      
  }
  if (!values.password.trim()) {
    formIsValid = false
    errors.password = 'Enter Password '
} else {
   
        errors.password = ''
    
}

  
  setErrors(errors);
  return formIsValid;
}
const submitHandler=(e)=>{
    e.preventDefault();
  if(staticValidate()){
   
  
   
        let array= JSON.parse(localStorage.getItem('users'))
       
        let element=array && array.find(obj => obj.username === values.username);
      
        if(element!=null){
            if(element && element.password===values.password){
                        
                        localStorage.setItem('islogin',true)
                        alert("successful")
                        history.push({ 
                            pathname: '/home'
                        });

            }
            else{
            alert('incorrect login')
            }
        }
        else{
            alert('incorrect username')
        }
        }
       
        
               
            

            
            
            

        
    
  
}

return(
    <div>
<h1>Login</h1>
<form>
  <div class="row">
    <label for="username">Username</label>
    <input type="text" name="username" autocomplete="off" placeholder="Username" onChange={handleChange}/>
  
  </div>
  <div class="row">
    <label for="password">Password</label>
    <input type="password" name="password" onChange={handleChange}/>
  </div>
  <button type="submit" onClick={submitHandler}>Login</button>
<a href='/adduser'>Add User</a>

</form>

</div>
)
}
export default Login;