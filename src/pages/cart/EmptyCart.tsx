import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 h-[500px] sm:h-[600px]">
     
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-4"
      >
        <ShoppingCart size={80} className="text-gray-400 dark:text-gray-600" />
      </motion.div>

     
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-4"
      >
        Your Cart is Empty
      </motion.h1>

    
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-[80%]"
      >
        Looks like you haven't added anything to your cart yet. Start shopping now!
      </motion.p>

     
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 sm:px-5 py-2 sm:py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-500 transition duration-300 text-sm sm:text-base font-medium"
        onClick={() => navigate("/")}
      >
        Go to Shop
      </motion.button>
    </div>
  );
};

export default EmptyCart;
