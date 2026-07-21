import { useState } from "react";
import Form from "./Form";
export default function Header() {
  const [showForm, setShowForm] = useState(false);
  return (
    <header className="grid w-full grid-cols-3 py-10 px-30  ">
      <h2 className="text-[#E00C41] font-bold text-2xl">airbnb</h2>
      <nav className="flex justify-around gap-20">
        <a href="#" className="headerLinks">
          <img src="homeicon.png" className="h-10 w-10"></img>
          Home
        </a>
        <a href="#" className="headerLinks">
          <img src="experience.png" className="h-10 w-10"></img>Experiences
        </a>
        <a href="#" className="headerLinks">
          <img src="balloon.png" className="h-10 w-10"></img>Services
        </a>
      </nav>
      <div className="flex justify-end gap-10 items-center">
        <button
          onClick={() => setShowForm(true)}
          className="text-sm cursor-pointer transition-all hover:bg-white hover:border hover:text-black rounded-3xl p-3 bg-[#E00C41] text-white"
        >
          Become a host
        </button>
      </div>
      {showForm && <Form setShowForm={setShowForm} />}
    </header>
  );
}
