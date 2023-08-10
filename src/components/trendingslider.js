import Trendingitems from "./trendingitems"

const Trendingslider=()=>{
    const slideleft=()=>{
        let slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft - 245
    }
    const slideright=()=>{
        let slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft + 239
    }
    return(
        <div>
            <div className="slider1">
                <h1 className="sliderhead">Trending Now</h1>
                <div className="slider2">
            <button className="sliderbtn" onClick={slideleft}><i class="fa-solid fa-arrow-left"></i></button>
            <button className="sliderbtn" onClick={slideright}><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            </div>
        <div id="slider" className="slider3">
            <Trendingitems/>
        </div>
        </div>
    )
}
export default Trendingslider