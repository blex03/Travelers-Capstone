import { useNavigate } from 'react-router-dom';

export const CartButton = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/checkout');
  };

  return (
    <button
      onClick={handleLoginClick}
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Cart
    </button>
  );
};
