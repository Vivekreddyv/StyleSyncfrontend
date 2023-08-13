import { Link, useNavigate } from 'react-router-dom'
import logo from '../utils/logo.png'
import Cart from './cart'
import { useEffect, useState } from 'react'
const Nav =()=>{
    const navigate=useNavigate()
    const handlelogout=()=>{
        localStorage.removeItem("authtoken")
        navigate('./login')
    }
    const [isopen,setIsopen]=useState(false)
    const [size,setSize]=useState(false)
    const handlehamburger=()=>{
        setIsopen(!isopen)
    }
    const mob=()=>{
        if(window.innerWidth>720){
            setSize(true)
        }
        else{
            setSize(false)
        }
    }
    useEffect(()=>{
        mob()
    })
    return(
        <div>
            <div className='nav'>
            <Link to='/'>
            <div style={{display:'flex'}}>
                <img className='logo' src={logo} alt=""></img>
                {!size?"":
                <div>
                    {(localStorage.getItem("authtoken"))?
                <div>
                    <ul className='navlist'>
                    <Link to='/myorders'><li className='navli'>My Orders</li></Link>
                    <Link to='/myaccount'><li className='navli'>My Account</li></Link>
                    </ul>
                </div>
                :""}
                </div>}
            </div>
            </Link>
            {size?
            <div>
            <ul className='navlist'>
                <Link to='/categories/all'><li className='navli'>CATEGORIES</li></Link>
                {(!localStorage.getItem("authtoken"))?
                <div className='loginsignup'>
                    <Link to='/signup'><li className='navli'>SIGNUP</li></Link>
                <Link to='/login'><li className='navli'>LOGIN</li></Link>
                </div>
                :<div>
                    <li className='navli' style={{fontSize:'1.3rem',marginTop:'0.3rem'}} onClick={handlelogout}>Log Out</li>
                    </div>}
                
                <li style={{listStyle:'none',marginTop:'0.5rem'}}><Cart/></li>
            </ul>
        </div>
            :<div style={{display:'flex',alignItems:'center'}}>
                <button className='mobcart'><Cart/></button>
                <button onClick={handlehamburger} className='hamburger'><i class="fa-solid fa-bars"></i></button>
            </div>}
            
            
            
        </div>
        <div className={`hamburgermenu${isopen?'':'close'}`}>
        <button className='hamburgerclose' onClick={handlehamburger}><i class="fa-solid fa-xmark"></i></button>
            <div className='hamburgermenudiv'>
            <Link to='/categories/all'><li style={{marginLeft:'7vw',fontSize:'2rem'}} className='navli'>CATEGORIES</li></Link>
                    {(!localStorage.getItem("authtoken"))?
                    <div className='loginsignupmob'>
                        <Link to='/signup'><li style={{fontSize:'2rem'}} className='navli'>SIGNUP</li></Link>
                    <Link to='/login'><li style={{fontSize:'2rem'}} className='navli'>LOGIN</li></Link>
                    </div>
                    :<div>
                        <li className='navli' style={{marginTop:'0.3rem',fontSize:'2rem'}} onClick={handlelogout}>Log Out</li>
                        </div>}
                        {(localStorage.getItem("authtoken"))?
                <div>
                    <ul className='navlistmob'>
                    <Link to='/myorders'><li style={{fontSize:'2rem'}} className='navlimob'>My Orders</li></Link>
                    <Link to='/myaccount'><li style={{fontSize:'2rem'}} className='navlimob'>My Account</li></Link>
                    </ul>
                </div>
                :""}
            </div>
        </div>
        </div>
    )
}
export default Nav