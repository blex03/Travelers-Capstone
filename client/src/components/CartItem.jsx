import '../CartItem.css'

export const CartItem = (props) => {
    const onDelete = async () => {
        //await fetch(`${import.meta.env.VITE_API_URL}/items/${localStorage.username}/${props.data._id}`)
        props.deleteFunction(props.data._id)
    }

    return(
        <>
            <div className="cart-item">
                <div className="item-details">
                    <h3>{props.data.name}</h3>
                    <h3>${props.data.price.toFixed(2)}</h3>
                </div>
                <button className="delete-button" onClick={onDelete}>X</button>
            </div>
        </>
    )
}