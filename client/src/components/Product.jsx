export const Product = (props) => {
    const onAddToCart = () => {
        console.log(added)
    }

    const productStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '200px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        boxShadown: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }

    const buttonStyle = {
        backgroundColor: '#28a745',
        oolor: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        cursor: 'pointer',
    }

    return(
        <>
            <div style={productStyle}> 
                <h3>{props.data.name}</h3>
                <p>${props.data.price}</p>
                <button style={buttonStyle} onClick={onAddToCart}>
                    Add to Cart
                </button>
                {console.log(props.data)}
            </div>
        </>
    )
}