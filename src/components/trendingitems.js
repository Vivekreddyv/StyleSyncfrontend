import {items} from '../productsdata'
import Productcard from './productcard'

const Trendingitems=()=>{
    const filtereditems=items.filter((data)=>data.id >=8)
    return(
        <div>
        <div className='trending1'>
        <div className='trending2'>
    <div className='trending3'>
        {filtereditems.map((data)=>(
            <Productcard key={data.id} size="13.3rem" props={data}/>
        ))}
        </div>
        </div>
        </div>
        </div>
    )
}
export default Trendingitems