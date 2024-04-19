import './App.css';
import image from "./graduation 1.png"
import image2 from "./image 1.png"
import image3 from "./logo.jpg"
import React, {useState,useEffect} from "react" ;
import axios from "axios";
import Loading from './Loading'; //loading



function App() {
  const[username,setFullName]=useState('');
  const[email,setEmail]=useState('');
  const[phonenumber,setPhoneNumber]=useState('');
  const[password,setCreatePaassword]=useState('');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');
  const emailInput = document.getElementById('email');
  const phonenumberInput = document.getElementById('phonenumber');
  const emailError = document.getElementById('emailError');
  const phonenumberError = document.getElementById('phonenumberError');
  const[errors, setErrors] =useState([])
  let err="";
  const[loading,setloading]=useState(false);//loading




  const onFullName = (event)=>{
    setFullName(event.target.value);
   }
   const onCreatePaassword = (event)=>{
    setCreatePaassword(event.target.value);
   }
   const onPhoneNumber = (event)=>{
    setPhoneNumber(event.target.value);
   }
   const onEmail = (event)=>{
    setEmail(event.target.value);
   }

  

   const handleSubmit = async(e) => {
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setCreatePaassword('');
    setloading(true);//loading

    try {
      const response = await axios.post('https://466b-116-75-119-35.ngrok-free.app/user/registerUser', {
        username: username,
        email:email,
        phonenumber:phonenumber,
        password: password
      });
  
      console.log(response.data)
    } catch (error) {
      console.error('Register failed', error);
    }
  }  

  const Validate = () => {   //validate tha data
    const error = {};

    if(!username) {
      error.username ="fullname is Required";
   
   }else {
        error.username ="";
   }
    
    if(!email) {
      error.email ="Email is Required";
   
   }else {
        error.email ="";
   }
   if(!phonenumber) {
    error.phonenumber ="phonenumber is Required";
 
 }else {
      error.phonenumber ="";
 }
   if(!password) {
       error.password = "Password is Required";
    }else {
      error.password = "";
    } 
     return error;
    }



  return (
    <div className="part2">
      
    <div className="part1" >
    <div className="color" >
      <img className="a" src={image} alt="logo"/>
   <h1 className="a1">AMS</h1>
    </div>
    <div>
      <img  src={image2} alt="a1" className="img2"/>
    </div>
    </div>
    {loading?(<Loading/>):(//loading
    <form className='for' onSubmit={handleSubmit}>
      <div className="registre">
      <h1 className='c1'>Create New Account</h1><br/>
       <input className="i" type="text" onChange={onFullName} placeholder="Full Name"/><br/><br/><br/>
    <input className="i" type="email" onChange={onEmail} placeholder="Email"/><br/><br/><br/>
    <input className="i" type="numbers" onChange={onPhoneNumber} placeholder="Phone Number"/><br/><br/><br/>
    <input className="i" type="enter the password" onChange={onCreatePaassword} placeholder="Paassword"/><br/><br/><br/>
    <div className='create'><button className="button" type="submit" onClick={handleSubmit}>Create</button><p className='err'>{err}</p>
   <div className="log"><p>Alredy have an account?<a className='ml-10 text'>Login</a></p>
    <p className='ml-10 text'>OR</p>
    <div className='last'><div><img className="aa" src={image3} alt="logoo"/></div>&nbsp;<div><span>Sign With google</span></div></div>
    </div>
    </div>
    </div>
    </form>
    )};
    </div>
  );
}

export default App;