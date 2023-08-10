import { Link } from "react-router-dom"

const News=()=>{
    return(
        <div className="news">
            <div className="news1">
            <h1 className="newshead">Newsletter</h1>
            <div className="news2">
                <input className="newsinput" placeholder="your@email.com"></input>
                <button className="newsbtn">Subscribe</button>
            </div>
            </div>
        </div>
    )
}
const Bottom=()=>{
    return(
        <div className="bottom"> 
            <div>
                <ul className="bottomlist">
                    <Link to='/'><li className="bottomli">About</li></Link>
                    <Link to='/'><li className="bottomli">Store Locator</li></Link>
                    <Link to='/'><li className="bottomli">FAQs</li></Link>
                    <Link to='/'><li className="bottomli">News</li></Link>
                    <Link to='/'><li className="bottomli">Careers</li></Link>
                    <Link to='/'><li className="bottomli">ContactUs</li></Link>
                </ul>
            </div>
            <h1 className="design">Design by&nbsp;&nbsp;&nbsp;\/</h1>
        </div>
    )
}
const Footer=()=>{
    return(
        <div>
            <News/>
            <Bottom/>
        </div>
    )
}
export default Footer