export const Product = (props) => {
    const onAddToCart = async () => {
        const username = localStorage.getItem('username');
        console.log(username)
        const productId = props.data._id;
        console.log(productId)

        if (!username) {
            alert("You're not logged in");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/update-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    shopping_cart: [productId], // Add product ID to shopping cart
                }),
            });

            if (response.ok) {
                console.log("Product added to cart successfully");
            } else {
                console.error("Failed to add product to cart");
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

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
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white'
    };

    const buttonStyle = {
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        cursor: 'pointer',
    };

    return (
        <>
            <div style={productStyle}>
                <h3>{props.data.name}</h3>
                <p>${props.data.price.toFixed(2)}</p>
                <button style={buttonStyle} onClick={onAddToCart}>
                    Add to Cart
                </button>
                {console.log(props.data)}
            </div>
        </>
    );
};
