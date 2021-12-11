import React ,{useState} from 'react';
import './style3.css';
const Adduser=({history})=>{
    const[values,setvalues]=useState({
        gender:'male',
        name:{
         title:'mr',
         first:'',
         last:''
        },
         email:'',
         username:'',
         password:'',
         dob:'',
         phone:''
     })
     const[errors,seterrors]=useState({
       passwordequal:''
     })
     const[loginFlag,setLoginFlag]=useState(false)
 // useEffect(()=>{
 //    localStorage.setItem('users',JSON.stringify([]))
 // },[])
 const handleChange=(e)=>{
 let{name,value}=e.target
 
 if(name==='first' || name==='title' || name==='last'){
  
    
  let valuen=values.name;
  valuen[name]=value;
  value=valuen;
  name='name'
  
 }
     setvalues({
    ...values,
    [name]:value 
 })
 }

 const submitHandler=(e)=>{
 
     
 
   if(values.username!='' && values.password!=''){
     let users=JSON.parse(localStorage.getItem('users'))
    if(users && users.length>=0){
     users.push(values)
      alert("Succcessfully Registered")
      history.push({ 
       pathname: '/'
      });
   }
    else{
       users=[]
       users.push(values)
    }
    users=users.flat()
 localStorage.setItem('users',JSON.stringify(users))
   }
   else{
   errors.passwordequal='passwords are not equal'
   }
 }
 
 
 return(
     <div>
 <h1>Register</h1>
 <form >
 <div class="row">
     <label for="gender">Gender</label>
     <select name='gender' value={values.gender} onChange={handleChange}>
      <option value='male' >Male</option>
      <option value='female'>Female</option>
     </select>
   
   </div>
 <div class="row">
     <label for="name">Name</label>
     <select name='title'  onChange={handleChange}>
     <option value='mr' >Mr</option>
      <option value='ms'>Ms</option>
     </select>
     <input type="text" name="first" autocomplete="off" placeholder="First name" onChange={handleChange}/>
     <input type="text" name="last" autocomplete="off" placeholder="Last name"  onChange={handleChange}/>
   </div>
   <div class="row">
     <label for="email">Email</label>
     <input type="email" name="email" autocomplete="off" value={values.email} placeholder="email@example.com" onChange={handleChange}/>
   
   </div> <div class="row">
     <label for="username">Username</label>
     <input type="text" name="username" value={values.username} onChange={handleChange}/>
   </div>
   <div class="row">
     <label for="password">Password</label>
     <input type="password" name="password" value={values.password} onChange={handleChange}/>
   </div>
   <div class="row">
     <label for="dob">Date of Birth</label>
     <input type="date" name="dob"  value={values.dob} onChange={handleChange}/>
   </div>
   <div class="row">
     <label for="phone">Phone</label>
     <input type="text" name="phone"  value={values.phone} onChange={handleChange}/>
   </div>
   <button onClick={submitHandler}>Register</button>

 </form>
 
 </div>
 )
 
}
export default Adduser;