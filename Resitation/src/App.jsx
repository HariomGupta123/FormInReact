import { useState } from "react";
import "./App.css"


const Form=()=>{
  const [input,setInput]=useState({firstName :"",email:"",password:""});
  const [errors,setError]=useState([])
  const validEmail=(email)=>{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  const InputHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const submit=(e)=>{
    e.preventDefault();
    {/*if(!input.fastName  || !input.email  || !input.password){
      alert("All fields are mandatory");
    }*/}
    setError([])
   
    const newError=[];
    if (input.firstName.trim() === "") {
      newError.push("name is reqiured");
    }
    if(!validEmail(input.email)){
      newError.push("Invalid email format.");
    }
    if(input.password.length < 6){
      newError.push("the lenght of password should be 6 character")
    }
    if(newError.length >0){
      setError(newError);
      
    }
    
      
  console.log(errors)
    console.log(input);
  

  }
  
  return (
    <>
      <div style={{ position: "relative", height: 70, width: 700 }}>
        {errors && (
          <div>
            <ul>
              {errors.map((error, index) => (
                <li>
                  <span key={index}>{error}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" container">
        <div className="form">
          <form onSubmit={submit}>
            <h1>Registation Form</h1>
            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="enter your name"
                value={input.firstName}
                name="firstName"
                onChange={InputHandler}
                style={{ width: 250, height: 40, marginTop: 20 }}
              ></input>
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                placeholder="Enter valid email address"
                value={input.email}
                name="email"
                onChange={InputHandler}
                style={{ width: 250, height: 40, marginTop: 20 }}
              ></input>
            </div>
            <div>
              <label>Password:</label>
              <input
                type="text"
                placeholder="Enter greater then 6 charater"
                value={input.password}
                name="password"
                onChange={InputHandler}
                style={{ width: 250, height: 40, marginTop: 20 }}
              ></input>
            </div>
            <div>
              <button type="submit" style={{ marginTop: 20 }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
