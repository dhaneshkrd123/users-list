import {userlist} from './users.js';
const axios = require('axios');
const qs = require('querystring');

// const config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Access-Control-Allow-Origin': true,
//     crossorigin: true,
//   },
// };
function userlistAll() {
    
 let array=userlist;
 fetch('https://randomuser.me/api/0.8/?results=20')
 .then(res => res.json())
 .then(
     (result) => {
    
   
      let a=  (result.results && result.results.filter(item => { return (item.user)}) || []).map(a => a.user);
     a=array.concat(a)
     let users=JSON.parse(localStorage.getItem('users'))
     if(users && users.length>=0){
      users.push(a)
     
    }
     else{
        users=[]
        users.push(a)
     }
     users=users.flat()
  localStorage.setItem('users',JSON.stringify(users)) 
       return a;
     },
     (error) => {
         return [];
         });
     }
 
    
  
  export const service={
      userlistAll
  }
