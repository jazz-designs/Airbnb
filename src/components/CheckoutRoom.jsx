import React from "react";
import { useState } from "react";

const CheckoutRoom = ({
  pname,
  image,
  price,
  rating,
  desc,
  street,
  landmark,
  bedrooms,
  guests,
  clickedIndex,
  setClickedIndex,
}) => {
  const [checkoutPage, setCheckoutPage] = useState(true);
  const [stays, setStays] = useState(0);
  const [adultStaying, setAdultStaying] = useState(0);
  const [childrenStaying, setChildrenStaying] = useState(0);
  const [animation, setAnimation] = useState(false);

  const handleConfirm = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
      setClickedIndex(null);
    }, 1500);
  };

  return (
    <section className="chekcoutCard z-10">
      {checkoutPage ? (
        <div className="w-[23vw] p-4">
          <img src={image} className="h-70 w-80 rounded-lg mt-2" />

          <div className="mt-4 flex flex-row justify-between pr-1">
            <p className="font-semibold text-lg text-[#303030]">{pname}</p>
          </div>
          <p className="text-md mt-4 text-[#959a9f]">{desc}</p>
          <p className="text-md mt-2 text-[#959a9f] flex gap-1">
            <img src="location.svg" className="h-5 w-5" /> {street} {landmark}
          </p>
          <div className="flex w-full justify-between my-3 items-center px-3">
            <button className="text-lg text-black rounded-full py-1 px-5 bg-gray-100 cursor-pointer mt-2">
              ${price}
            </button>
            <button
              className="text-lg bg-black text-white rounded-full py-1 px-3 cursor-pointer border border-white hover:bg-white hover:border-black mt-2 hover:text-black transition-all"
              onClick={() => setCheckoutPage(false)}
            >
              Continue
            </button>
          </div>
          <img
            src="cance.svg"
            className="absolute top-1.5 right-1.5 rounded-full cursor-pointer w-5 h-5"
            onClick={(e) => {
              e.stopPropagation();
              setClickedIndex(null);
            }}
          />
        </div>
      ) : (
        <div className="p-10 w-[18vw] flex flex-col align-middle justify-center items-center">
          <div className="mb-5">
            <label className="text-sm font-medium block mb-1">Total days</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStays(Math.max(0, stays - 1))}
                className="border rounded px-3 py-1"
              >
                −
              </button>
              <span className="w-8 text-center">{stays + 1}</span>
              <button
                type="button"
                onClick={() => setStays(Math.min(29, stays + 1))}
                className="border rounded px-3 py-1"
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-5">
            <label className="text-sm font-medium block mb-1">Adults</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setAdultStaying(Math.max(0, adultStaying - 1))}
                className="border rounded px-3 py-1"
              >
                −
              </button>
              <span className="w-8 text-center">{adultStaying}</span>
              <button
                type="button"
                onClick={() => setAdultStaying(Math.min(30, adultStaying + 1))}
                className="border rounded px-3 py-1"
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-5">
            <label className="text-sm font-medium block mb-1">Childrens</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setChildrenStaying(Math.max(0, childrenStaying - 1))
                }
                className="border rounded px-3 py-1"
              >
                −
              </button>
              <span className="w-8 text-center">{childrenStaying}</span>
              <button
                type="button"
                onClick={() =>
                  setChildrenStaying(Math.min(30, childrenStaying + 1))
                }
                className="border rounded px-3 py-1"
              >
                +
              </button>
            </div>
          </div>
          <p className="m-2">Total: {price * (stays + 1)}</p>
          <button
            className="text-xl bg-black text-white rounded-full py-2 px-4 cursor-pointer border border-white hover:bg-white hover:border-black mt-2 hover:text-black transition-all"
            onClick={(e) => {
              e.stopPropagation();
              handleConfirm();
            }}
          >
            Checkout
          </button>
          <img
            src="cance.svg"
            className="absolute top-1.5 right-1.5 rounded-full cursor-pointer w-5 h-5"
            onClick={(e) => {
              e.stopPropagation();
              setClickedIndex(null);
            }}
          />
        </div>
      )}
      {animation && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inset-0 flex items-center justify-center bg-white w-50 h-50 bg-opacity-50 z-50">
          <img src="/success.gif" alt="Success" className="w-50 h-50" />
        </div>
      )}
    </section>
  );
};

export default CheckoutRoom;
