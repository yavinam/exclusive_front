import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IProduct } from "../../types/index";

export interface ICartProduct extends IProduct {
  amount: number;
}

export interface CartState {
  cart: ICartProduct[];
  wishlist: IProduct[];
}

const cartStore = localStorage.getItem("cart");
const wishlistStore = localStorage.getItem("wishlist");

const initialState: CartState = {
  cart: cartStore ? JSON.parse(cartStore) : [],
  wishlist: wishlistStore ? JSON.parse(wishlistStore) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state, action: PayloadAction<IProduct>) {
      let index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index < 0) {
        state.cart.push({ ...action.payload, amount: 1 });
        toast("Added to cart successfully");
      } else {
        state.cart.splice(index, 1);
        toast("Removed from cart");
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementAmountCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementAmountCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
   clearCart(state, action) {
  state.cart = state.cart.filter((item) => item.id !== action.payload); 
  localStorage.setItem("cart", JSON.stringify(state.cart));
  toast("Product removed from cart");
},

    addToWishlist(state, action: PayloadAction<IProduct>) {
      let index = state.wishlist.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        state.wishlist.push(action.payload);
        toast("Added to wishlist");
      } else {
        toast("Already in wishlist");
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    deleteWishlistItem(state, action: PayloadAction<number>) {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      toast("Item removed from wishlist");
    },
  },
});

export const {
  toggleCart,
  incrementAmountCart,
  decrementAmountCart,
  clearCart,
  addToWishlist,
  deleteWishlistItem,
} = cartSlice.actions;

export default cartSlice.reducer;
