import img1 from "./Img/1.jpg"
import img2 from "./Img/2.jpg"
import img3  from "./Img/3.jpg"
import {Button, Carousel,Image} from "antd"
function Slider(){
return(
    <div>
        <Carousel
        fade={true}
        autoplay>
            <div>
                <Image src={img3} style={{
                    height:450,
                    width:1530
                }}/>
            </div>
            <div>
                <Image src={img1}  style={{
                    height:450,
                    width:1530
                }}/>
            </div> <div> 
                <Image src={img2} style={{
                    height:450,
                    width:1530
                }}/>
            </div>

        </Carousel>
        
        
    </div>
)
}
export default Slider;