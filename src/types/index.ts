export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  brand: string[];
  category: string[];
  images:string[];
}
export interface ICustomer {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
}
export interface ICartProduct {
  productId: number;   
  customerId: number;  
  quantity: number;   
  price: number;      
  title: string;    
  image: string;     
}

export interface CartItem {
    id: number;
    title: string;
    price: number;
    qty: number;
    thumbnail: string;
}

export interface RootState {
    cart: {
        ca: CartItem[];
    };
}

