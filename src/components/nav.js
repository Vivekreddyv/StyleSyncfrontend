import { Link, useNavigate } from 'react-router-dom'
import logo from '../utils/logo.png'
import Cart from './cart'
const Nav =()=>{
    const navigate=useNavigate()
    const handlelogout=()=>{
        localStorage.removeItem("authtoken")
        navigate('./login')
    }
    return(
        <div className='nav'>
            <Link to='/'>
            <div style={{display:'flex'}}>
                <img className='logo' src={logo} alt=""></img>
                {(localStorage.getItem("authtoken"))?
                <div>
                    <ul className='navlist'>
                    <Link to='/myorders'><li className='navli'>My Orders</li></Link>
                    <Link to='/myaccount'><li className='navli'>My Account</li></Link>
                    </ul>
                </div>
                :""}
            </div>
            </Link>
            <div>
                <ul className='navlist'>
                    {/* <Link to='/categories/all'><li className='navli'>CATEGORIES</li></Link> */}
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
            
        </div>
    )
}
export default Nav