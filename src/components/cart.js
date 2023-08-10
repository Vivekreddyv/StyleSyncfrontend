import { useContext, useEffect } from "react"
import {CartContext} from "../pages/productsdetails"
import { useState } from "react"
import { Offcanvas, Button } from 'react-bootstrap';
import img from '../utils/emptycart.png'



const Cart=()=>{
    const cartitems =useContext(CartContext)
    const [cart,setCart] = useState([cartitems])
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const handleincrement=(itemid)=>{
  setCart((prevcart)=>
  prevcart.map((data)=>
  data.id===itemid?{...data,quantity:data.quantity+1}:data
  )
  )
 }
 const handledecrement=(itemid)=>{
  setCart((prevcart)=>
  prevcart.map((data)=>
  data.id===itemid?{...data,quantity:data.quantity>1?data.quantity-1:1}:data
  ))
 }
 const deleteproduct=(itemid)=>{
  setCart((prevcart)=>
  prevcart.filter((data)=>
  data.id!==itemid))
 }
 const handleprice = (itemid) => {
  const item = cart.find((data) => data.id === itemid);
  return item ? item.quantity * 82*item.price : 0;
};
const totalprice=()=>{
  return cart.reduce((total,data)=>total+data.quantity*data.price*82,0)
}
useEffect(()=>{
  setCart(cartitems)
},[cartitems])
useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem("products"));
  if (savedCart && Array.isArray(savedCart)) {
    setCart(savedCart);
  }
}, []);
const handlecheckout=async(e)=>{
  e.preventDefault()
  const response=await fetch('https://stylesync-x9qb.onrender.com/api/orderdata',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email:localStorage.getItem("useremail"),orderdata:cart})
  })
  const json=await response.json()
  if(!json.success){
    alert('something went wrong')
  }
  if(json.success){
    setCart([])
  }
}
  return (
    <>
      <Button style={{color:'black',fontSize:'1.15rem',marginBottom:'15px',backgroundColor:'white',border:'none'}} variant="primary" onClick={handleShow}>
      <i  class="fa-solid fa-cart-shopping"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" style={{width:'520px'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1 style={{fontFamily:'blinker',fontWeight:'700',fontSize:'1.3rem',marginLeft:'0.5rem',marginTop:'1rem'}}>Your Shopping Cart({cart.length})</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       {cart.length===0? <div className="emptycart">
            <img style={{width:'12rem',height:'12rem'}} src={img} alt=""></img>
            <h1 style={{fontFamily:'blinker',fontSize:'1.3rem',fontWeight:'600',marginTop:'1rem'}}>Your cart is empty</h1>
            <button onClick={()=>setShow(false)} style={{fontSize:'1.1rem',border:'1px solid black',width:"10rem",height:'2.8rem',borderRadius:'3%',marginTop:'0.5rem'}}>Keep Browsing</button>
        </div>:(
        <div className="cart">
            {cart.map((data)=>(
                <div key={data.id} style={{border:'1px solid black',borderRadius:'1%',display:'flex',marginBottom:'1rem',marginLeft:'0.1rem'}}>
                    <img className="cartimg" src={data.img} alt=""></img>
                    <div style={{width:'100%',backgroundColor:'#f2f2f2',display:'flex',justifyContent:'space-between',padding:'0.8rem 1.3rem 0 1.3rem'}}>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                        <p style={{fontFamily:'blinker',fontSize:'1.4rem',width:'10rem',fontWeight:'600'}}>{data.description}</p>
                        <div style={{display:'flex'}}>
                             <button onClick={()=>handledecrement(data.id)} style={{width:'1.8rem',height:'1.8rem',backgroundColor:'black',color:'white',fontSize:'1rem'}}>-</button>
                             <p style={{width:'1.8rem',height:'1.8rem',border:'2px solid black',fontSize:'1rem',textAlign:'center'}}>{data.quantity}</p>
                             <button onClick={()=>handleincrement(data.id)} style={{width:'1.8rem',height:'1.8rem',backgroundColor:'black',color:'white'}}>+</button>
                        </div>
                        
                    </div>
                    <div>
                        <p style={{fontSize:'1.3rem',fontWeight:'700'}}><span style={{fontSize:'1.1rem'}}><i class="fa-solid fa-indian-rupee-sign"></i></span>&nbsp;{handleprice(data.id).toLocaleString('EN-IN')}</p>
                        <button onClick={()=>deleteproduct(data.id)} style={{border:'none',backgroundColor:'#e5e5e5',margin:'2rem 0 0 3rem',fontSize:'1.5rem'}}><i class="fa-solid fa-trash"></i></button>
                    </div>
                    </div>
                    
                </div>
            ))}
            <div style={{position:'absolute',bottom:'0',height:'11.5rem',width:'88%',borderTop:'2px black solid',display:'flex',justifyContent:'space-between',backgroundColor:'white'}}>
        <div style={{marginTop:'1.5rem'}}>
          <p style={{fontFamily:'blinker',fontSize:'1.6rem',fontWeight:600,marginBottom:'0'}}>Subtotal</p>
          <p style={{fontSize:'1.3rem',fontWeight:'700'}}><span style={{fontSize:'1.1rem'}}><i class="fa-solid fa-indian-rupee-sign"></i></span>&nbsp;{totalprice().toLocaleString('EN-IN')}</p>
        </div>
        <div>
          <button onClick={handlecheckout} className="checkout">Go to Checkout</button>
        </div>
       </div>
        </div>
       )}
       
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Cart