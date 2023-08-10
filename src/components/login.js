import { Link, useNavigate } from "react-router-dom"
import Footer from "./footer.js"
import Nav from "./nav.js"
import { useState } from "react"

const Login=()=>{
    const[credentials,setCredentials]=useState({email:"",password:""})
    const navigate=useNavigate()
    const handlevalue=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handlesubmit=async()=>{
        const response=await fetch('https://stylesync-bie1.onrender.com/api/loginuser',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json=await response.json()
        if(!json.success){
            alert('enter valid credentials')
        }
        if(json.success){
            localStorage.setItem("useremail",credentials.email)
            localStorage.setItem("authtoken",json.authtoken)
            navigate('/')
        }
    }
    return(
        <div>
        <Nav/>
        <div className="login">
        <div className="login1">
            <div>
                <div style={{marginBottom:'2rem',marginLeft:'10vw'}}>
                    <h4 style={{fontSize:'1.5rem'}}><span style={{fontWeight:'700',fontSize:'1.7rem'}}>Email:</span>&nbsp;test123@gmail.com</h4>
                    <h4 style={{fontSize:'1.5rem'}}><span style={{fontWeight:'700',fontSize:'1.7rem'}}>Password:</span>&nbsp;test1234</h4>
                </div>
            <div>
                <h1 className="headinglogin">Email address</h1>
                <input className="inputlogin" type="email" name="email" value={credentials.email} onChange={handlevalue}></input>
            </div>
            <div>
                <h1 className="headinglogin">Password</h1>
                <input className="inputlogin" type="password" name="password" value={credentials.password} onChange={handlevalue}></input>
            </div>
            <div>
            <button className="loginbtn1" onClick={handlesubmit}>Login</button>
            <Link to='/signup'><button className="loginbtn2">New User</button></Link>
            </div>
            </div>
        </div> 
        </div>
        <Footer/>
    </div>
    )
}
export default Login