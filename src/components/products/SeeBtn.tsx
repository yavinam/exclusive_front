import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
import { AiOutlineEye } from "react-icons/ai";

const SeeBtn = ({ product }: { product: IProduct }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/product/${product.id}`)}
      className="w-[45px] h-[45px] max-sm:h-[40px] max-sm:w-[40px] max-sm:text-lg rounded-full bg-white dark:bg-zinc-700 shadow-md flex items-center justify-center text-xl transition-all duration-300 hover:bg-red-400 dark:hover:bg-zinc-600 hover:text-white"
    >
      <AiOutlineEye />
    </button>
  );
};

export default SeeBtn;
