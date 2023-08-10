import { items } from "../productsdata"
import { useEffect, useState } from "react"
import Productcard from "../components/productcard"
import { Link, useParams } from "react-router-dom"
import Nav from "../components/nav.js"
import Footer from '../components/footer.js'
const ProductCards=(category)=>{ 
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    useEffect(()=>{
        sizefunc()
    })
    const {id}=useParams()
    const [productdata,setProductdata]=useState(items)
    const [size,setSize] = useState('')
    const [filtername,setFiltername]=useState("ALL")
    const filterproduct=(category)=>{
        if(category==="all"){
            setProductdata(items)
            setFiltername("ALL")
        }else{
        const filtereddata=items.filter((data)=>data.category===category)
        setProductdata(filtereddata)
        const filteredname=category.toUpperCase()
        setFiltername(filteredname)
        }
    }
    const sizefunc=()=>{
        const siz=window.innerWidth >=720?'17rem':'91vw';
        setSize(siz)
      }
    useEffect(()=>{
        filterproduct(id);
    },[id])
  
    return(
        <div className="products1">
        <div className="products2">
            <div className="products3">
                <Link to='/'><h4 className="homeproducts"><i class="fa-solid fa-angle-left"></i>Home</h4></Link>
                <h2 className="productshead">{filtername}</h2>
            </div>
            <div className="products4">
                <button className="filterbtn" onClick={()=>filterproduct("all")}>All</button>
                <button className="filterbtn" onClick={()=>filterproduct("furniture")}>Furnitures</button>
                <button className="filterbtn" onClick={()=>filterproduct("electronic")}>Electronics</button>
                <button className="filterbtn" onClick={()=>filterproduct("lamp")}>Lamps</button>
                <button className="filterbtn" onClick={()=>filterproduct("kitchen")}>Kitchen</button>
                <button className="filterbtn" onClick={()=>filterproduct("chair")}>Chairs</button>
                <button className="filterbtn" onClick={()=>filterproduct("skin-care")}>Skin Care</button>
            </div>
        <div className="products5">
            {productdata.map((data)=>(
                <Productcard key={data.id} size={size} props={data}/>
            ))}
        </div>
        </div>
        </div>
    )
}
const Products=()=>{
    return(
        <div>
            <Nav/>
            <ProductCards/>
            <Footer/>
        </div>
    )
}
export default Products