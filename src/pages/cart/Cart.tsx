import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { clearCart } from "../../redux/features/cart-slice";
import { IProduct } from "../../types";
import { IoTrashOutline } from "react-icons/io5";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData: IProduct[] = useSelector((state: RootState) => state.cart.cart);

  const totalPrice = cartData.reduce((sum, item) => sum + item.price, 0);

  if (cartData.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Savatcha</h2>
      <div className="space-y-4">
        {cartData.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white dark:bg-zinc-800"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500">Narx: ${product.price}</p>
              </div>
            </div>
            <button
              onClick={() => product.id && dispatch(clearCart(product.id))}
              className="text-red-500 hover:text-red-700 p-2 rounded-md"
            >
              <IoTrashOutline className="text-2xl" />
            </button>
          </div>
        ))}
        <div className="text-right font-bold text-lg mt-4">
          Umumiy narx: ${totalPrice.toFixed(2)}
        </div>
        <div className="text-right mt-6">
          <button
            onClick={() => navigate("/checkout")} 
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-500"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
