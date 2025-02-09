import Girls from "../../assets/images/Girls.png";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

import { TbHomeHeart } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSackDollar } from "react-icons/fa6";

import Team1 from "../../assets/images/Team1.png";
import Team2 from "../../assets/images/Team2.png";
import Team3 from "../../assets/images/Team3.png";

import { FaCaravan } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { ImHeadphones } from "react-icons/im";

const About = () => {
  return (
    <div>
      <section>
        <div className="container mt-[150px]">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex flex-col gap-4 lg:basis-[48%]">
              <h1 className="text-[30px] font-semibold">Our Story</h1>
              <p>
                Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
              </p>
              <p>
                Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.
              </p>
            </div>
            <div className="lg:basis-[48%]">
              <img className="w-full" src={Girls} alt="Girls" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-[50px]">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="border-2 border-slate-500 rounded-md flex flex-col gap-3 items-center py-10 basis-[48%] lg:basis-[23%] duration-300 ease-in-out hover:bg-red-500">
              <span className="border-[8px] border-slate-400 rounded-full bg-black text-white text-[30px] p-1">
                <TbHomeHeart />
              </span>
              <h3 className="text-[30px] font-bold">10.5k</h3>
              <h5>Sellers active on our site</h5>
            </div>
            <div className="border-2 border-slate-500 rounded-md flex flex-col gap-3 items-center py-10 basis-[48%] lg:basis-[23%] duration-300 ease-in-out hover:bg-red-500">
              <span className="border-[8px] border-slate-400 rounded-full bg-black text-white text-[30px] p-1">
                <CiDollar />
              </span>
              <h3 className="text-[30px] font-bold">33k</h3>
              <h5>Monthly Product Sale</h5>
            </div>
            <div className="border-2 border-slate-500 rounded-md flex flex-col gap-3 items-center py-10 basis-[48%] lg:basis-[23%] duration-300 ease-in-out hover:bg-red-500">
              <span className="border-[8px] border-slate-400 rounded-full bg-black text-white text-[30px] p-1">
                <HiShoppingBag />
              </span>
              <h3 className="text-[30px] font-bold">45.5k</h3>
              <h5>Customers active on our site</h5>
            </div>
            <div className="border-2 border-slate-500 rounded-md flex flex-col gap-3 items-center py-10 basis-[48%] lg:basis-[23%] duration-300 ease-in-out hover:bg-red-500">
              <span className="border-[8px] border-slate-400 rounded-full bg-black text-white text-[30px] p-1">
                <FaSackDollar />
              </span>
              <h3 className="text-[30px] font-bold">25k</h3>
              <h5>Annual gross sale on our site</h5>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto mt-[50px]">
          <div className="w-full">
            <div className="flex gap-6 flex-wrap justify-center">
              <div className="w-[90%] lg:w-[23%]">
                <img className="w-full" src={Team1} alt="Tom Cruise" />
                <div className="flex flex-col gap-2 items-center">
                  <h2 className="text-[25px] font-semibold">Tom Cruise</h2>
                  <p>Founder & Chairman</p>
                  <div className="flex items-center gap-3">
                    <span><CiTwitter /></span>
                    <span><FaInstagram /></span>
                    <span><RiLinkedinLine /></span>
                  </div>
                </div>
              </div>
              <div className="w-[90%] lg:w-[23%]">
                <img className="w-full" src={Team2} alt="Emma Watson" />
                <div className="flex flex-col gap-2 items-center">
                  <h2 className="text-[25px] font-semibold">Emma Watson</h2>
                  <p>Managing Director</p>
                  <div className="flex items-center gap-3">
                    <span><CiTwitter /></span>
                    <span><FaInstagram /></span>
                    <span><RiLinkedinLine /></span>
                  </div>
                </div>
              </div>
              <div className="w-[90%] lg:w-[23%]">
                <img className="w-full" src={Team3} alt="Will Smith" />
                <div className="flex flex-col gap-2 items-center">
                  <h2 className="text-[25px] font-semibold">Will Smith</h2>
                  <p>Product Designer</p>
                  <div className="flex items-center gap-3">
                    <span><CiTwitter /></span>
                    <span><FaInstagram /></span>
                    <span><RiLinkedinLine /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section>
                <div className="container my-[100px] mx-auto">
                    <div className='flex flex-wrap gap-[40px] md:gap-2 lg:gap-5 justify-center'>
                        <div className='md:basis-[30%] flex flex-col gap-2 text-center items-center border-2 md:px-[10px] py-[30px] lg:py-[50px] border-transparent duration-300 ease-in-out rounded-md hover:border-black hover:bg-red-500'>
                            <span className='border-4 border-zinc-400 rounded-full max-w-fit text-[20px] bg-black text-white p-[10px]'><FaCaravan /></span>
                            <h1 className='text-[25px] md:text-[20px] font-semibold mt-2'>Free And Fast Delivery</h1>
                            <h4>Free delivery for all orders over $140</h4>
                        </div>
                        <div className='md:basis-[30%] flex flex-col gap-2 text-center items-center border-2 py-[30px] lg:py-[50px] border-transparent duration-300 ease-in-out rounded-md hover:border-black hover:bg-red-500'>
                            <span className='border-4 border-zinc-400 rounded-full max-w-fit text-[20px] bg-black text-white p-[10px]'><ImHeadphones /></span>
                            <h1 className='text-[25px] md:text-[20px] font-semibold mt-2'>24/7 Customer Service</h1>
                            <h4>Friendly 24/7 customar support</h4>
                        </div>
                        <div className='md:basis-[30%] flex flex-col gap-2 text-center items-center border-2  py-[30px] lg:py-[50px] border-transparent duration-300 ease-in-out rounded-md hover:border-black hover:bg-red-500'>
                            <span className='border-4 border-zinc-400 rounded-full max-w-fit text-[20px] bg-black text-white p-[10px]'><GoShieldCheck /></span>
                            <h1 className='text-[25px] md:text-[20px] font-semibold mt-2'>Money Back Guarantee</h1>
                            <h4>We return money within 30 days</h4>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
};

export default About;
