import React from "react";
import { useNavigate } from "react-router-dom";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useAppStore } from "../../store/appStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartCard = ({ item }) => {
  const { removeCart, addCartQty, removeCartQty } = useAppStore();

  const productName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 20) + "...";
    }
    return name;
  };

  const navigate = useNavigate();

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
    <div className="grid grid-cols-4 h-full bg-white gap-[5px] border-b-[1px] pb-[10px] w-full">
      <div className="h-[80px] w-[80px]">
        <img
          onClick={() => navigate(`/product/${item.product.id}`)}
          src={item.product.image}
          className="h-full w-full cursor-pointer object-contain"
          alt=""
        />
      </div>{" "}
      <div className="overflow-hidden">
        <h2
          onClick={() => navigate(`/product/${item.product.id}`)}
          className="cursor-pointer text-[16px] text-slate-600"
        >
          {productName(item.product.title)}
        </h2>
      </div>
      <div className="flex h-full justify-center">
        <div
          onClick={() => {
            item.quantity === 1
              ? removeCart(item.product.id)
              : removeCartQty(item.product.id);
          }}
          className="flex relative bg-white md:h-[30px] md:w-[30px] h-[24px] w-[24px] items-center justify-center rounded-full border-[1px] p-[2px] text-center text-[35px] shadow-xl"
        >
          <span className="translate-x-[-50%] absolute translate-y-[-50%] top-[50%] left-[50%]">
            <HiMinus size={12} />
          </span>
        </div>
        <h2 className="px-2 font-semibold">{item?.quantity}</h2>
        <div>
          <button
            onClick={() => addCartQty(item.product.id)}
            className="flex bg-white relative md:h-[30px] md:w-[30px] h-[24px] w-[24px] items-center justify-center rounded-full border-[1px] p-[2px] text-center text-[18px] shadow-xl"
          >
            <span className="translate-x-[-50%] absolute translate-y-[-50%] top-[50%] left-[50%]">
              <HiPlus size={12} />
            </span>
          </button>
        </div>
      </div>
      <div className="flex text-right max-w-[120px] flex-col justify-between">
        <h2 className="ml-[20px] text-center font-semibold text-slate-600">
          {"PKR "}
          <span className="text-black">
            {Math.ceil(item.product.price * 81)}
          </span>
        </h2>
        <h2
          onClick={() => removeCart(item.product.id)}
          className="cursor-pointer text-right text-red-500"
        >
          Remove
        </h2>
      </div>
      <div className="col-span-4 mt-2 text-center">
        <button
          onClick={handleSubmit}
          className="rounded-[4px] bg-blue-500 text-white px-[20px] py-[5px] hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartCard;
