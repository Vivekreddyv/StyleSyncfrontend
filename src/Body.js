import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import img1 from './utils/main1.jpg'
import img2 from './utils/main2.jpg'
import img3 from './utils/main3.jpg'
import img4 from './utils/main4.jpg'
import img5 from './utils/main5.jpg'
import img6 from './utils/main6.jpg'
import Productcard from './components/productcard'
import {items} from './productsdata'
import Trendingslider from './components/trendingslider'

const Body=()=>{
    const [productdat,setProductdat]=useState(items)
    const filterproduct=()=>{
        const filtereddata=items.filter((data)=>data.id < 9)
        setProductdat(filtereddata)
        }
    const [size,setSize] = useState('')
    useEffect(()=>{
        filterproduct()
    },[])
    const sizefunc=()=>{
      const siz=window.innerWidth >=720?'17rem':'91vw';
      setSize(siz)
    }
    useEffect(()=>{
        sizefunc()
    })
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <div>
            <div className='featured'>
                <div className='featured1'>
                <Link to='/categories/furniture'>
                <div className='tiles1'>
                    <img className='featuredimg1'src={img1} alt=""></img>
                    <h1 className='featuredtext'>Live Comfortably</h1>
                </div>
                </Link>
                <Link to='/categories/skin-care'>
                <div className='tiles2'>
                <img className='featuredimg2'src={img2} alt=""></img>
                    <h1 className='featuredtext'>Skincare</h1>
                </div>
                </Link>
                </div>
                <div className='tiles3n4'>
                <Link to='/categories/kitchen'>
                    <div className='tiles3'>
                    <img className='featuredimg2'src={img3} alt=""></img>
                        <h1 className='featuredtext'>Kitchen</h1>
                    </div>
                </Link>
                <Link to='/categories/electronics'>
                    <div className='tiles3'>
                    <img className='featuredimg2'src={img4} alt=""></img>
                        <h1 className='featuredtext'>Electronics</h1>
                    </div>
                </Link>
                </div>
            </div>
            <div>
            <div className='proudproduct'>
            <div className='proudproduct1'>
            <h1 className='produproducthead'>Products we are proud of</h1>
        <div className='proudproduct2'>
            {productdat.map((data)=>(
                <Productcard key={data.id} size={size} props={data}/>
            ))}
            </div>
            </div>
            </div>
            </div>
            <div className='banner1'>
                <div className='banner2'>
                    <h1 className='bannerhead'>Creative harmonious living</h1>
                    <p className='bannerpara'>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
                    <Link to='./categories/all'>
                    <button className='shopnow'>SHOP NOW</button>
                    </Link>
                </div>
                    <img className='bannerimg1'src={img5} alt=''></img>
            </div>
            <Trendingslider/>
            <div className='banner3'>
            <img className='bannerimg2'src={img6} alt=''></img>
                <div className='banner4'>
                    <h1 className='bannerhead'>Comfortable & Elegante Living</h1>
                    <p className='bannerpara'>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
                    <Link to='./categories/all'>
                    <button className='shopnow'>SHOP NOW</button>
                    </Link>
                </div>
            </div>
        </div>
        
        
    )
}
export default Body