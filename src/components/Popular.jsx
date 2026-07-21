import PopularCard from "./Popularcard";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import MangloreRooms from "./MangloreRooms";
const supabase = createClient(
  "https://cgcwfeojgyeysplltgcu.supabase.co",
  "sb_publishable_TgIR6_0lD5x0Bi4R4gz18Q_-rw7SYCH",
);

export default function Popular({ setStreet }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase.from("rooms").select("*");
      console.log(data);
      if (error) {
        console.error(error);
        return;
      }

      setRooms(data);
    };

    fetchRooms();
  }, []);

  const streets = [...new Set(rooms.map((room) => room.street))].slice(0, 3);

  useEffect(() => {
    if (streets.length > 0) {
      setStreet(streets);
    }
  }, [streets, setStreet]);

  return (
    <>
      <section className="mt-10 ml-13">
        <h2 className="text-lg font-medium flex gap-2 items-center">
          Popular home around you{" "}
          <img
            src="arrow.svg"
            className="h-7 w-7 bg-gray-100 p-1 rounded-full"
          />
        </h2>
        <PopularCard room={rooms} />
      </section>
      <section className="mt-10 ml-13">
        <h2 className="text-lg font-medium flex gap-2 items-center">
          Available rooms in Manlore{" "}
          <img
            src="arrow.svg"
            className="h-7 w-7 bg-gray-100 p-1 rounded-full"
          />
        </h2>
        <MangloreRooms room={rooms} />
      </section>
    </>
  );
}
