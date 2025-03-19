export const Categories = () => {
    
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
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        gap: '10px'
    }

    const onClickCategory = () => {
        console.log("category selected")
    }

    return(
        <>
            <h2>Categories</h2>
            <div style={containerStyle}>
                <button style={productStyle} onClick={onClickCategory}>
                    <p>Weapons</p>
                    <p>image</p>
                </button>
                <button style={productStyle} onClick={onClickCategory}>
                    <p>Costumes</p>
                    <p>image</p>
                </button>
                <button style={productStyle} onClick={onClickCategory}>
                    <p>Powers</p>
                    <p>image</p>
                </button>
            </div>
        </>
    )
}