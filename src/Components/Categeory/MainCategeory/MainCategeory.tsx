import { Card, Image,Button} from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import image from "./Img/1.jpg"
import image1 from "./Img/2.jpg"
import image2 from "./Img/3.jpg"
import image3 from "./Img/4.jpg"
import "./main.css"
function MainCategeory(){
return(
    <div>
        <div className="set-heading">
            <h2>Select Categeory</h2>
        </div>
        <div className="container2">
    <Card
    hoverable
    bordered={false}
    style={{ width: 350 }}
  >
    <Link to="/check/spicy/burger">
       <Image src={image} style={{
        width:300
       }}/>
       </Link>
    <Meta title="Spicy Burger" description="check spicy burger in for your " />
   <Link to="/check/spicy/burger">
    <Button type="link">ViewCategeory</Button>
    </Link>
  </Card>
  <Card
    hoverable
    style={{ width: 350 }}
  >
    <Link to="/check/fresh/vegtable"><Image src={image1}  style={{
        width:300,
        height : 300
       }}/></Link>
    <Meta title="Vegatable" description="check vegatabel in fresh in for your" />
    <Button type="link">ViewCategeory</Button>
  </Card>  
  <Card
    hoverable
    style={{ width: 350}}
  >
    <Link to="/check/snack/food"><Image src={image2}    style={{
        width:300,
        height:300
       }}/></Link>
    <Meta title="check snack fresh food for you" description="www.instagram.com" />
    <Link to="/check/snack/food"><Button type="link">ViewCategeory</Button></Link>
  </Card>
  <Card
    hoverable
    style={{ width: 350}}
  >
    <Link to="/check/fresh/vegetable"><Image src={image3}   style={{
        width:300
       }}/></Link>
    <Meta title="Europe Street beat" description="www.instagram.com" />
    <Button type="link">ViewCategeory</Button>
  </Card>
  </div>
  </div>
)
}
export default MainCategeory;