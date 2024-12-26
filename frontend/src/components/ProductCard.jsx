import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
  const { addCart } = useAppStore();
  const navigate = useNavigate();

  const productName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 20) + "...";
    }
    return name;
  };

  const handleSubmit = () => {
    toast.success("Product submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="flex items-center bg-white relative flex-col justify-between p-[10px] shadow-md sm:shadow-new rounded-[4px]">
      <div className="h-[150px] sm:h-[200px]">
        <img
          src={item.image}
          onClick={() => navigate(`/product/${item.id}`)}
          className="w-full h-full object-cover cursor-pointer"
          alt=""
        />
      </div>
      <div className="py-[8px] flex flex-col gap-[4px]">
        <h2
          className="cursor-pointer"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          {productName(item.title)}
        </h2>
        <h2 className="text-center">
          {"PKR  "}
          <span className="text-red-500">{Math.ceil(item.price * 81)}</span>
        </h2>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => addCart(item, navigate)}
          className="rounded-[4px] border-[2px] hover:bg-black hover:text-white hover:border-0 border-slate-400 px-[20px] py-[5px]"
        >
          Add To Cart
        </button>
        <button
          onClick={handleSubmit}
          className="rounded-[4px] bg-blue-500 text-white px-[20px] py-[5px] hover:bg-blue-700"
        >
          Submit
        </button>
      </div>

      <div className="absolute top-2 left-2 rounded-[50%] w-[30px] h-[30px] flex items-center justify-center text-[13px] font-[400] text-white bg-pink-500">
        {item.rating.count}
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
