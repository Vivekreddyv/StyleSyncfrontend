import { Link } from "react-router-dom"
import Nav from './nav.js'
import Footer from './footer.js'

const Error=()=>{
    return(
        <div>
            <Nav/>
            <Link to='/'><h4 style={{margin:'7rem 5rem',fontSize:'2rem',textDecoration:'underline'}}><i class="fa-solid fa-angle-left"></i>Home</h4></Link>
            <h3 style={{margin:'2rem 5rem',fontSize:'2rem'}}>SOMETHING WENT WRONG!</h3>
            <h3 style={{margin:'2rem 5rem',fontSize:'2rem'}}>please reload the page or click the above home button</h3>
            <Footer/>
        </div>
    )
}
export default Error