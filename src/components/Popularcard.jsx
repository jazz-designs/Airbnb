import { useState } from "react";
import CheckoutRoom from "./CheckoutRoom";
export default function PopularCard({ room }) {
  const [clickedIndex, setClickedIndex] = useState(null);
  return (
    <div className="flex flex-row popcard overflow-x-auto scroll-smooth scrollbar-hide">
      {room.map((item, index) => (
        <div
          key={index}
          className="mr-3"
          onClick={() => setClickedIndex(index)}
        >
          <img
            src={item.image}
            className="rounded-3xl h-42.5 w-47.5 min-h-42.5 min-w-47.5 mt-4 cursor-pointer "
          />
          <p className="text-sm font-semibold mt-2 mb-.5 ml-2">{item.pname}</p>
          <p className="text-xs ml-2">
            ${item.price} for a night. {item.rating}
          </p>
          {clickedIndex === index && (
            <CheckoutRoom
              pname={item.pname}
              image={item.image}
              price={item.price}
              rating={item.rating}
              desc={item.desc}
              street={item.street}
              landmark={item.landmark}
              bedrooms={item.bedrooms}
              guests={item.guests}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          )}
        </div>
      ))}
    </div>
  );
}
