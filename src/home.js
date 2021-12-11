import React, { useState, useEffect } from "react";
import './style2.css';

const Home = ({history}) => {
  const [cart, setCart] = useState([]);
  const[values,setvalues]=useState({
      search:''
  })
  useEffect(()=>{
  let loginflag=localStorage.getItem('islogin')
  if(loginflag===true ||loginflag==='true'){

  }
  else{
      history.push('./')
  }
  },[])
  let array= JSON.parse(localStorage.getItem('users'))
  let filteredList = array && array.filter(user => { 
      return ( user.username.toLowerCase().includes(values.search.toLowerCase()))})
  const handleChange=(e)=>{
    const{name,value}=e.target
        setvalues({
       ...values,
       [name]:value 
    })
    }
  

const logout=()=>{
   
    localStorage.setItem('users',JSON.stringify([]))
    localStorage.setItem('islogin',false)
    history.push('./')
}
  return(
      <div>
          <div>
          <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Username"
            name="search" 
            onChange={handleChange}
        />
      
        <a href="" onClick={logout}>Logout</a>
          </div>
  <div class="listing-section">
   
   {filteredList && filteredList.map((user)=>{
     return(
      <div class="product">
        <div class="image-box">
          <img class="images" src={user&& user.picture ?user.picture.large:'https://www.imanami.com/wp-content/uploads/2016/03/unknown-user.jpg'}></img>
        </div>
        <div class="text-box">
          <h2 class="item">{user.username}</h2>
         
         
        </div>
           
   
      </div>
     )
   
   })
  } 
      
      
      
      
    
      
    </div>
      </div>
  
  )
};

export default Home;