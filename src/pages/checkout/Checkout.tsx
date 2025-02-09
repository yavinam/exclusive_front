import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartItem, RootState } from "../../types";

import { CiSquareCheck } from "react-icons/ci";

import Bkash from "../../assets/images/Bkash.png";
import Visa from "../../assets/images/Visa.png";
import Nagad from "../../assets/images/Nagad.png";
import MasterCart from "../../assets/images/Mastercard.png";

const Checkout: React.FC = () => {
    const cartProduct: CartItem[] = useSelector((state: RootState) => state.cart.ca) || [];

    const total = cartProduct.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
    
    return (
        <section>
            <div className="container mt-[150px] mb-[50px]">
                <h1 className='text-[35px] font-semibold'>Billing Details</h1>
                <div className='flex justify-between gap-2 flex-wrap mt-[40px]'>
                    <div className='md:basis-[48%]'>
                        <form className='flex flex-col gap-4'>
                            {['First Name', 'Company Name', 'Street Address', 'Apartment, floor, etc.(optional)', 'Town/City', 'Phone Number', 'Email Address'].map((label, index) => (
                                <div key={index} className='flex flex-col gap-1'>
                                    <label className='text-slate-500'>{label}</label>
                                    <input
                                        className='bg-slate-100 outline-none rounded-md py-2 px-3 border-2 border-slate-300 duration-300 hover:border-black'
                                        type={label.includes('Email') ? 'email' : label.includes('Phone') ? 'number' : 'text'}
                                    />
                                </div>
                            ))}
                        </form>
                        <div className='mt-5'>
                            <p className='flex items-center gap-4'>
                                <span className='text-[30px] text-red-500'><CiSquareCheck /></span>
                                Save this information for faster check-out next time
                            </p>
                        </div>
                    </div>
                    <div className='md:basis-[48%] flex flex-col gap-6 mt-5'>
                        <div className='flex flex-col gap-4'>
                            {cartProduct.length > 0 ? (
                                cartProduct.map((item) => (
                                    <div key={item.id} className='flex items-center gap-2 justify-between shadow-sm shadow-black px-2 py-1 duration-500 ease-in-out hover:-translate-y-2'>
                                        <div className='flex items-center gap-3 basis-[60%]'>
                                            <Link to={`/shop/${item.id}`}><img src={item.thumbnail} alt={item.title} className='h-[50px]' /></Link>
                                            <h4>{item.title}</h4>
                                        </div>
                                        <span className='basis-[10%]'>{item.qty}*</span>
                                        <h4 className='basis-[20%] text-end'>${item.price.toFixed(2)}</h4>
                                    </div>
                                ))
                            ) : (
                                <p className="text-red-500">Cart is empty!</p>
                            )}
                        </div>
                        <div className='flex items-center justify-between border-b-2 border-slate-300 pb-2 duration-300 hover:border-black'>
                            <h3 className='font-semibold'>Subtotal</h3>
                            <h4>${total.toFixed(2)}</h4>
                        </div>
                        <div className='flex items-center justify-between border-b-2 border-slate-300 pb-2 duration-300 hover:border-black'>
                            <h3 className='font-semibold'>Shipping</h3>
                            <h4>Free</h4>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold'>Total</h3>
                            <h4>${total.toFixed(2)}</h4>
                        </div>
                        <form className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2 justify-between'>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" id='bank' name="payment_method" value="BANK" />
                                    <label htmlFor="bank">Bank</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    {[Bkash, Visa, MasterCart, Nagad].map((img, index) => (
                                        <img key={index} src={img} alt="Payment Method" />
                                    ))}
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="radio" id='cash' name="payment_method" value="CASH" />
                                <label htmlFor="cash">Cash on Delivery</label>
                            </div>
                        </form>
                        <button className='py-3 px-8 rounded-md border-2 border-black duration-300 hover:bg-red-500'>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
