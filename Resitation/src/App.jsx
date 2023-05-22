import { useEffect, useState } from "react";
import "./App.css"


const Form=()=>{
  const [input,setInput]=useState({fastName :"",email:"",password:""});
  const [flag,setFlage]=useState(false);
  const InputHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const submit=(e)=>{
    e.preventDefault();
    if(!input.fastName  && !input.email  && !input.password){
      alert("All fields are mandatory");
    }
    else{
      setFlage(true)
    }
    console.log(input);


  }
  useEffect(()=>{
    console.log("registered");
  },[flag])
  return (
    <>
      <div className=" container">
        <div>
          <pre style={{backgroundColor:"white"}}>
            {flag ? (
              <h3>hello {input.fastName},you have registered successfully</h3>
            ) : (
              ""
            )}
          </pre>
        </div>
        <div className="form">
          <form>
            <h1>Registation Form</h1>
            <div>
              <input
                type="text"
                placeholder="enter your name"
                value={input.fastName}
                name="fastName"
                onChange={InputHandler}
                style={{ width: 250, height: 40, marginTop: 20 }}
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="enter your name"
                value={input.email}
                name="email"
                onChange={InputHandler}
                style={{ width: 250, height: 40, marginTop: 20 }}
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="enter your name"
                value={input.password}
                name="password"
                onChange={InputHandler}
                style={{ width: 250, height: 40, marginTop: 20 }}
              ></input>
            </div>
            <div>
              <button onClick={submit} style={{marginTop:20}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
