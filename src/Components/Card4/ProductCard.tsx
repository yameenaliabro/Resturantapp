import { Button,Card,Rate, Typography } from "antd";
import Meta from "antd/es/card/Meta";

interface iprops {
    title : string,
    id:number,
    imageUrl:string,
    toppings:string,
    rate:number,
    loading:boolean
}
function ProductCard(  {  id,
    title,
    imageUrl,
    toppings,
    rate,
    loading}:
    iprops){
  const { Text } = Typography;

return(
    <div>
 <Card
      className="product-card-item"
      bordered={false}
      cover={<img alt={title} src={imageUrl} />}
      loading={loading}
    >
      <div>
        <Rate disabled defaultValue={rate} />
        <Meta title={title} description={toppings} />
      </div>
      <div className="action">
      </div>
    </Card>
    </div>
)
}
export default ProductCard;