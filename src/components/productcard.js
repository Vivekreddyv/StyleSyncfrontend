import { Link } from "react-router-dom"
const Productcard=({props,size})=>{
    const inrprice=(props.price*82).toLocaleString()
    return(
        <div className="productcard">
            <Link to={`/categories/products/${props.id}`}>
                    <img style={{width: size,height: size}} src={props.img} alt=""></img>
                    <p style={{fontFamily:'blinker',fontSize:'1.1rem',marginLeft:'0.5rem',marginBottom:'1rem'}}>{props.description}</p>
                    <h4 style={{fontFamily:'blinker',fontSize:'1.4rem',marginLeft:'0.5rem',marginBottom:'0.5rem'}}><span style={{fontSize:'1.1rem'}}><i class="fa-solid fa-indian-rupee-sign"></i></span>&nbsp;&nbsp;{inrprice}</h4>
                    </Link>
         </div>
    )
}
export default Productcard