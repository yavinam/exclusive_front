import { IProduct } from "../../types";
import React from "react";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { toggleCart } from "../../redux/features/cart-slice"; 

const CartButton: React.FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useDispatch();
  const cartData: IProduct[] = useSelector((state: RootState) => state.cart.cart);

 
  const isInCart = cartData.some((cart: IProduct) => cart.id === product.id);


  const handleCartToggle = () => {
    dispatch(toggleCart(product));
  };

  return (
    <button
      onClick={handleCartToggle}
      className="w-full h-[50px] px-4 py-2 bg-gray-900 text-white flex items-center justify-center rounded-md shadow-md transition-all duration-300 
      hover:bg-red-500 dark:bg-zinc-800 dark:hover:bg-zinc-600"
    >
      {isInCart ? (
        <IoCart className="text-white text-2xl" />
      ) : (
        <IoCartOutline className="text-white text-2xl" />
      )}
      <span className="ml-2 text-sm font-semibold">
        {isInCart ? "Savatchada" : "Savatchaga qo'shish"}
      </span>
    </button>
  );
};

export default React.memo(CartButton);
