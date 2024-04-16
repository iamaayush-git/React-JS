import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
function ShopCatagory(props){
    const {all_product} = useContext(shopContext);
    console.log(all_product);
    return(
        <>
       
        
        </>
    )
}   
export default ShopCatagory;