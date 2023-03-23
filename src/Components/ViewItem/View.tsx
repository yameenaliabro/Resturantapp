import { Button } from "antd";
import {Modal} from "antd"
import { useState } from "react";
import ViewAddItem from "../CartData/ViewAddItem/ViewAddItem";
function View(){
    const[open,setOpen] = useState<boolean>(false)
    let done = ()=>{
        setOpen(false)
    }
 return(
    <>
    <Button type="default" onClick={() => setOpen(true)}>
      ViewProduct
    </Button>
    <Modal
      title="Your Item Added"
      centered
      open={open}
      footer={
<Button onClick={done}>Done</Button>
      }
      width={1000}
    >
        <ViewAddItem/>
    </Modal>
  </>
);
}
export default View;