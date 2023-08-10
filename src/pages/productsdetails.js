import { useParams } from "react-router-dom"
import {items} from '../productsdata.js'
import { createContext, useEffect, useState } from "react"
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import Trendingslider from '../components/trendingslider.js'

export const CartContext=createContext([])
const Productdesc=()=>{
    const [cartitems,setCartitems]=useState([])
    const [Quantity,setQuantity] = useState(1)
    const addproduct=(item,Quantity)=>{
        const existing=(cartitems.find((data)=>data.id===item.id))
        console.log(existing)
        if (existing){
            setCartitems((prevCartitems)=>
            prevCartitems.map((data)=>data.id===item.id?{...data,quantity:data.quantity+Quantity}:data))
            setQuantity(1)
        }else{
        setCartitems((prevCartitems)=>[...prevCartitems,{...item,quantity:Quantity}])
        setQuantity(1)
        }
    }
    const {id}=useParams()
    
    const item=items.filter((data)=>data.id===parseInt(id))
    const {img,price,otherImgs,specs,texture,weight,size}=item[0]
    const [image,setImage]=useState(img)
    const imgchange=(newimg)=>{
        setImage(newimg)
    }
    const increase=()=>{
        if(Quantity >= 1){
            setQuantity(Quantity+1)
        }
    }
    const decrease=()=>{
        if(Quantity>1){
            setQuantity(Quantity-1)
        }
    }
    const calcquantity=()=>{
        return(
            (Quantity*price*82).toLocaleString('EN-IN')
        )
    }
    useEffect(()=>{
        window.scrollTo(0,0)
        imgchange(img)
    },[id,img])
    return(
        <CartContext.Provider value={cartitems}>
        <div>
            <Nav/>
            <h1 className="productdescname">{item[0].description}</h1>
            <div className="productdesc1">
                <div>
            <div>
                <img className="mainimg" src={image} alt=""></img>
            </div>
            <div className="productdesc2">
                <img className="hoverimg" onMouseOver={()=>imgchange(img)} src={img} alt=""></img>
                <img className="hoverimg" onMouseOver={()=>imgchange(otherImgs[0])} src={otherImgs[0]} alt=""></img>
                <img className="hoverimg" onMouseOver={()=>imgchange(otherImgs[1])} src={otherImgs[1]} alt=""></img>
            </div>
            </div>
            <div className="productdesc3">
                <p className="productdescription">{specs}</p>
                <div>
                    <div className="productdesc4">
                    <h2 className="quantityhead">Quantity</h2>
                    <div className="productdesc5">
                        <button className="quantbtn" onClick={decrease}>-</button>
                        <p className="quantity">{Quantity}</p>
                        <button className="quantbtn" onClick={increase}>+</button>
                        </div>
                    <p className="totalquantity"><span className="rupee"><i class="fa-solid fa-indian-rupee-sign"></i></span>&nbsp;&nbsp;{calcquantity(Quantity)}</p>
                    </div>
                </div>
                <div className="productdesc6">
                    <button className="addcart" onClick={()=>addproduct(item[0],Quantity)} >ADD TO CART</button>
                    <button className="buynow">BUY NOW</button>
                </div>
            </div>
            </div>
                <div className="productdesc7">
                    <div className="productdesc8">
                        <h3 className="textureweightsize">Texture:</h3>
                        <p className="textureweightsizedesc">{texture}</p>
                    </div>
                    <div className="productdesc8">
                        <h3 className="textureweightsize">Weight:</h3>
                        <p className="textureweightsizedesc">{weight}</p>
                    </div>
                    <div className="productdesc8">
                        <h3 className="textureweightsize">Size:</h3>
                        <p className="textureweightsizedesc">{size}</p>
                    </div>
                </div>
            <Trendingslider/>
            <Footer/>
        </div>
        </CartContext.Provider>
    )
}
export default Productdesc