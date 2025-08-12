import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../features/Taskslice.jsx";
import { useState } from 'react';

import { ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>₹{item.price} × {item.quantity}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 bg-gray-200 rounded">-</button>
                <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-2 bg-gray-200 rounded">+</button>
                <button onClick={() => { dispatch(removeFromCart(item.id)); toast.warning(`${item.name} removed from cart! 🛒`, {icon: "🛍️"}); }} className="px-3 bg-red-500 text-white rounded">Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-4 flex justify-between">
            <h3 className="text-xl font-bold">Total: ₹{totalAmount}</h3>
            <button 
              onClick={() => setShowPayment(true)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Proceed to Pay
            </button>
          </div>
        </>
      )}

      {showPayment && (
        <div className="mt-6 p-4 bg-white rounded shadow-lg w-96">
          <h3 className="font-bold mb-3">Fake Payment</h3>
          <input type="text" placeholder="Card Number" className="border w-full p-2 mb-2 rounded" />
          <input type="text" placeholder="Name on Card" className="border w-full p-2 mb-2 rounded" />
          <div className="flex gap-2">
            <input type="text" placeholder="MM/YY" className="border w-1/2 p-2 rounded" />
            <input type="text" placeholder="CVV" className="border w-1/2 p-2 rounded" />
          </div>
          <button 
            onClick={() => { alert("Payment Successful!"); dispatch(clearCart()); setShowPayment(false); }}
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded"
          >
            Pay ₹{totalAmount}
          </button>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={1800}
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover={false}
        toastClassName="ios-toast"
        bodyClassName="ios-toast-body"
      />
    </div>
    
  );
};

export default Cart;
