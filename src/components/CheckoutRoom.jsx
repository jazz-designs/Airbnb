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
  return (
    <section className="chekcoutCard  z-10">
      {checkoutPage ? (
        <>
          <img src={image} className="h-70 w-80 rounded-lg mt-2"></img>

          <div className="mt-4 flex flex-row justify-between pr-1">
            <p className="font-semibold text-lg text-[#303030]">{pname}</p>
          </div>
          <p className="text-md mt-4 text-[#959a9f]">{desc}</p>
          <p className="text-md mt-2 text-[#959a9f] flex gap-1">
            <img src="location.svg" className="h-5 w-5" /> {street} {landmark}
          </p>
          {/* <div className="flex mt-3 gap-2">
        <p className="text-xs bg-[#ad5e72] text-white rounded-lg px-2 pt-0.5 flex gap-1 items-center">
          <img src="bed.svg" className="h-5 w-5" />
          Bedrooms {bedrooms}
        </p>
        <p className="text-xs bg-black text-white rounded-lg px-2 pt-0.5 flex gap-1 items-center">
          <img src="guests.svg" className="h-5 w-5" />
          Maximum Guests {guests}
        </p>
      </div> */}
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
          ></img>
        </>
      ) : (
        <div>
          <div className="mb-5">
            <label className="text-sm font-medium block mb-1">Total days</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStays(Math.max(1, stays - 1))}
                className="border rounded px-3 py-1"
              >
                −
              </button>
              <span className="w-8 text-center">{stays}</span>
              <button
                type="button"
                onClick={() => setStays(Math.min(30, stays + 1))}
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
                onClick={() => setAdultStaying(Math.max(1, adultStaying - 1))}
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
          <div>
            <div className="mb-5">
              <label className="text-sm font-medium block mb-1">
                Total days
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setChildrenStaying(Math.max(1, childrenStaying - 1))
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
          </div>
        </div>
      )}
    </section>
  );
};

export default CheckoutRoom;
