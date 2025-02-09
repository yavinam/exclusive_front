import { useState, ChangeEvent, FormEvent } from "react";
import { TbPhoneCall } from "react-icons/tb";
import { CiMail } from "react-icons/ci";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_CHAT_ID;
 

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const text = `📩 Yangi Xabar! \n\n👤 Ism: ${formData.name}\n📧 Email: ${formData.email}\n📞 Telefon: ${formData.phone}\n📝 Xabar: ${formData.message}`;
        
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text })
            });
            
            if (!response.ok) throw new Error("Failed to send message");
            
            alert("Xabar yuborildi!");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
            alert("Xabar yuborishda xatolik yuz berdi!");
        }
    };

    return (
        <section>
            <div className="container mt-[150px] mb-[50px] mx-auto px-[10px]">
                <div className='flex justify-between gap-2 flex-wrap'>
                    <div className='basis-[100%] lg:basis-[47%] shadow-lg p-10 flex flex-col gap-5 text-[14px]'>
                        <div className='flex flex-col gap-2 border-b-2 border-slate-300 pb-5'>
                            <h2 className='flex items-center gap-2 text-[20px] font-semibold'>
                                <span className='bg-red-500 p-2 rounded-full text-white text-[16px]'><TbPhoneCall /></span>
                                Call To Us
                            </h2>
                            <p>We are available 24/7, 7 days a week</p>
                            <h4>Phone : +880 19599-48542</h4>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='flex items-center gap-2 text-[20px] font-semibold'>
                                <span className='bg-red-500 p-2 rounded-full text-white text-[16px]'><CiMail /></span>
                                Write to Us
                            </h2>
                            <p>Fill out our form and we will contact you within 24 hours.</p>
                            <h3>Email: kmtanvir1111@gmail.com</h3>
                            <h3>Emails: support@exclusive.com</h3>
                        </div>
                    </div>
                    <div className='shadow-lg p-10 basis-[100%] lg:basis-[47%]'>
                        <form onSubmit={handleSubmit} className='basis-[60%] flex flex-wrap justify-between gap-2'>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} 
                                className='bg-slate-100 py-2 outline-none px-2 border-2 border-slate-200 rounded-sm basis-[100%] duration-300 ease-in-out hover:border-black' 
                                placeholder='Your Name' required />

                            <input type="email" name="email" value={formData.email} onChange={handleChange} 
                                className='bg-slate-100 py-2 outline-none px-2 border-2 border-slate-200 rounded-sm basis-[100%] duration-300 ease-in-out hover:border-black' 
                                placeholder='Your Email' required />

                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} 
                                className='bg-slate-100 outline-none px-2 border-2 py-2 border-slate-200 rounded-sm basis-[100%] duration-300 ease-in-out hover:border-black' 
                                placeholder='Your Phone' required />

                            <textarea name="message" value={formData.message} onChange={handleChange} 
                                className='bg-slate-100 py-2 outline-none px-2 border-2 border-slate-200 rounded-sm basis-[100%] h-[150px] mt-5 duration-300 ease-in-out hover:border-black' 
                                placeholder='Your Message' required />

                            <button type="submit" className='w-full text-end mt-10'>
                                <span className='text-end px-8 py-3 rounded-md border-black border-2 duration-300 ease-in-out hover:bg-red-500'>
                                    Send Message
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;