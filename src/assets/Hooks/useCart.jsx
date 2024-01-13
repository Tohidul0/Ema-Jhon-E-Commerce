import { useEffect, useState } from "react";
import { localStoreCard } from "../../../utilities/fakedb";
import useShop from "./useShop";

 const useCart = () =>{

    const [shops,setShops]=useShop();
    const [cart, setCart] = useState([]);


    let available = []

  useEffect(()=>{
    const localStrData= localStoreCard()

    //console.log(localStrData)
    for (const id in localStrData)
    {
      const addedData = shops.find(shop => shop.id === id)
      if(addedData){
        const quantity = localStrData[id];
        addedData.quantity=quantity;
        available.push(addedData)
      //console.log(addedData);
      }
    }
    //console.log(available)
    setCart(available)
    //console.log("achiree vai acchiii")

},[cart])
 console.log(cart);
return [cart, setCart];

    
  
 }
  

 export default useCart;

