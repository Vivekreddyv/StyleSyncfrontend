import { useState } from "react"
import Footer from "./footer.js"
import Nav from "./nav.js"
import { Link, useNavigate } from "react-router-dom"


const Signup=()=>{
    const [credentials,setCredentials]= useState({name:"",email:"",password:""})
    const navigate=useNavigate()
    const handlevalue=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch('https://stylesync-x9qb.onrender.com/api/signup',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
        })
        const json=await response.json()
        if(!json.success){
            alert("enter valid credentials")
        }
        else{
            navigate('/login')
        }
    }
    
    return(
        <div>
            <Nav/>
            <div className="signup">
            <div className="signup1">
                <div>
                <div>
                    <h1 className="heading">Name</h1>
                    <input className="input" type="text" name="name" value={credentials.name} onChange={handlevalue}></input>
                </div>
                <div>
                    <h1 className="heading">Email address</h1>
                    <input className="input" type="email" name="email" value={credentials.email} onChange={handlevalue}></input>
                </div>
                <div>
                    <h1 className="heading">Password</h1>
                    <input className="input" type="password" name="password" value={credentials.password} onChange={handlevalue}></input>
                </div>
                <div>
                <button className="signupbtn1" onClick={handlesubmit}>Submit</button>
                <Link to='/login'><button className="signupbtn2">Already a user</button></Link>
                </div>
                </div>
            </div> 
            </div>
            <Footer/>
        </div>
    )
}
export default Signup