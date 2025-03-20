import '../CartItem.css'

export const CartItem = (props) => {
    const onDelete = () => {
        console.log("Deleted Item")
    }

    return(
        <>
            <div className="cart-item">
                <div className="item-details">
                    <h3>{props.data.name}</h3>
                    <h4>${props.data.price}</h4>
                </div>
                <button className="delete-button" onClick={onDelete}>X</button>
            </div>
        </>
    )
}