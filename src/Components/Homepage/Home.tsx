import MainCategeory from "../Categeory/MainCategeory/MainCategeory";
import Card2 from "./Card2/Card2";
import Slider from "./Carousel/Carousel";
import Fotter from "./Footer/Footer";
import MiddleData from "./Middle/MiddleData";
function Home(){
return(
  <div>
    <Slider/>
    <Card2/>  
    <MiddleData/>
    <Fotter/>
  </div>
)
}
export default Home;