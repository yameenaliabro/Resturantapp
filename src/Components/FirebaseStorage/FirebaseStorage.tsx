import { Button } from "antd";
import {getStorage,ref} from "firebase/storage"
import image from "./Img/1.jpg"
function Storage(){
    let storage = getStorage()
    let add = ()=>{
const mountains  = ref(storage,image)
console.log(mountains)
    }
return(
    <div>
<Button onClick={add}>add</Button>
    </div>
)
}
export default Storage;