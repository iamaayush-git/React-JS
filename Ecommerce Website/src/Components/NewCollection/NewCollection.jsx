import "./NewCollection.css"
import new_collections from "../assets/new_collections";
import Item from "../Item/Item.jsx"; 
function NewCollection(){
    return(
        <div className="collection_main">
            <h2>New Collection</h2>
            <hr />
            <div className="new_items">
                {
                    new_collections.map((value,i)=>{
                        return <Item key={i}
                        name={value.name}
                        image={value.image}
                        old_price={value.old_price}
                        new_price={value.new_price}/>
                    })
                }
            </div>
        </div>
    )
}
export default NewCollection;