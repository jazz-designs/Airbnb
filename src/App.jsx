import React from "react";
import Header from "./components/Header.jsx";
import Searchbar from "./components/Searchbar.jsx";
import Popular from "./components/Popular.jsx";
import { useState } from "react";

export default function App() {
  const [street, setStreet] = useState([]);
  return (
    <>
      <section className="pb-12 bg-[#fbfbfb] border border-b-gray-300">
        <Header />
        <Searchbar streets={street} />
      </section>
      <Popular setStreet={setStreet} />
    </>
  );
}
