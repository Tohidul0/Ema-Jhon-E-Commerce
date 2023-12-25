// data sotorage in local storage when clicked each country


const fakeDb = id =>{

    let shoppingCard = {};


    // stored card----------------
   
    const storedCard= localStorage.getItem("shoping-cart");
    if(storedCard){
        shoppingCard=JSON.parse(storedCard)
    }
    
    // const item= localStorage.getItem(id)
    const item= shoppingCard[id];

    if(item){
        const newItem = item + 1;
        //localStorage.setItem(id, newItem);
        shoppingCard[id]=newItem;

    }
    else{
        //localStorage.setItem(id, 1);
        shoppingCard[id]=1;
    }
    localStorage.setItem("shoping-cart", JSON.stringify(shoppingCard))


    
}
const localStoreCard = () =>{
        
    let shoppingCard = {};


    // stored card----------------
   
    const storedCard= localStorage.getItem("shoping-cart");
    if(storedCard){
        shoppingCard=JSON.parse(storedCard)
    }
    return shoppingCard;
    }

   

export {fakeDb, localStoreCard}