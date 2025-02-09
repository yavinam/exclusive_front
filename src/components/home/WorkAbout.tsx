import { FaCaravan } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { ImHeadphones } from "react-icons/im";



const WorkAbout = () => {
    return (
        <>

            <section>
                <div className="container my-[100px] mx-auto">
                    <div className='flex flex-wrap gap-[40px] md:gap-2 lg:gap-5 justify-center'>
                        <div className='md:basis-[30%] flex flex-col gap-2 text-center items-center border-2 md:px-[10px] py-[30px] lg:py-[50px] border-transparent duration-300 ease-in-out rounded-md hover:border-black hover:bg-red-400'>
                            <span className='border-4 border-zinc-400 rounded-full max-w-fit text-[20px] bg-black text-white p-[10px]'><FaCaravan /></span>
                            <h1 className='text-[25px] md:text-[20px] font-semibold mt-2'>Free And Fast Delivery</h1>
                            <h4>Free delivery for all orders over $140</h4>
                        </div>
                        <div className='md:basis-[30%] flex flex-col gap-2 text-center items-center border-2 py-[30px] lg:py-[50px] border-transparent duration-300 ease-in-out rounded-md hover:border-black hover:bg-red-400'>
                            <span className='border-4 border-zinc-400 rounded-full max-w-fit text-[20px] bg-black text-white p-[10px]'><ImHeadphones /></span>
                            <h1 className='text-[25px] md:text-[20px] font-semibold mt-2'>24/7 Customer Service</h1>
                            <h4>Friendly 24/7 customar support</h4>
                        </div>
                        <div className='md:basis-[30%] flex flex-col gap-2 text-center items-center border-2  py-[30px] lg:py-[50px] border-transparent duration-300 ease-in-out rounded-md hover:border-black hover:bg-red-400'>
                            <span className='border-4 border-zinc-400 rounded-full max-w-fit text-[20px] bg-black text-white p-[10px]'><GoShieldCheck /></span>
                            <h1 className='text-[25px] md:text-[20px] font-semibold mt-2'>Money Back Guarantee</h1>
                            <h4>We return money within 30 days</h4>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default WorkAbout;