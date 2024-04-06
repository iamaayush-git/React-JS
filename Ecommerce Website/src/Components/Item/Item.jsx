import "./Item.css"

function Item({name,old_price,new_price,image}){
    console.log(image);
    return(
        <>
        <div className="item">
            <img id="data_img" src={image} alt="" />
            <div className="name">
                <p>{name}</p>
            </div>
            <div className="item_price">
                <div className="old_price">
                    <p>${old_price}</p>
                </div>
                <div className="new_price">
                    <p>${new_price}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Item;