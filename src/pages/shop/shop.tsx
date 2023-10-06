
import ListGroup from "../../components/itemGrid/itemGrid";

interface Shopprops{
items:[];
}



function Shop({items}:Shopprops) {
  return (
   
    <ListGroup items={items}/> 
  );
}

export default Shop;