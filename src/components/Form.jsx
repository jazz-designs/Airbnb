import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://cgcwfeojgyeysplltgcu.supabase.co",
  "sb_publishable_TgIR6_0lD5x0Bi4R4gz18Q_-rw7SYCH",
);

export default function Form({ setShowForm }) {
  const [pname, setPname] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [ptype, setPtype] = useState("Apartment");
  const [image, setImage] = useState(null);
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [bedrooms, setBedrooms] = useState(2);
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }
    if (!pname || !state || !zip || !street) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.storage
        .from("rooms")
        .upload(`room-${Date.now()}.jpg`, image);

      if (error) {
        alert("Image upload failed: " + error.message);
        setLoading(false);
        return;
      }

      const { data: urlData } = supabase.storage
        .from("rooms")
        .getPublicUrl(data.path);

      const newRoom = {
        pname: pname,
        image: urlData.publicUrl,
        desc: desc,
        ptype: ptype,
        price: parseInt(price),
        state: state,
        zip: zip,
        street: street,
        landmark: landmark,
        bedrooms: bedrooms,
        nights: nights,
        guests: guests,
      };

      const { error: dbError } = await supabase.from("rooms").insert([newRoom]);

      if (dbError) {
        alert("Failed to save room: " + dbError.message);
        setLoading(false);
        return;
      }

      setLoading(false);
      setShowForm(false);
    } catch (err) {
      alert("Something went wrong: " + err.message);
      setLoading(false);
    }
  };

  return (
    <form className="absolute bg-white border translate-x-[-50%] translate-y-[-50%] z-10 p-10 left-1/2 top-1/2 rounded-2xl flex w-auto justify-center gap-x-12 max-h-[90vh] overflow-y-auto">
      <div>
        <div className="mb-5">
          <input
            type="text"
            className="bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-3 py-2.5"
            placeholder="Name of the property"
            required
            onChange={(e) => setPname(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <textarea
            rows="4"
            className="bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5"
            placeholder="Write appropriate description..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-5">
          <select
            value={ptype}
            className="block w-full px-3 py-2.5 bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg"
            onChange={(e) => setPtype(e.target.value)}
          >
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Lodge">Lodge</option>
          </select>
        </div>

        <div className="mb-5">
          <input
            type="number"
            className="block w-full px-3 py-2.5 bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg"
            placeholder="Price per night"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <select
            value={state}
            className="block w-full px-3 py-2.5 bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg"
            onChange={(e) => setState(e.target.value)}
          >
            <option disabled value="">
              Choose your state
            </option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CG">Chhattisgarh</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu & Kashmir</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UK">Uttarakhand</option>
            <option value="WB">West Bengal</option>
          </select>
        </div>

        <div className="mb-5">
          <input
            type="text"
            className="block w-full px-3 py-2.5 bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg"
            placeholder="ZIP code"
            onChange={(e) => setZip(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            className="bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-3 py-2.5"
            placeholder="Street"
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            className="bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-3 py-2.5"
            placeholder="Landmark (optional)"
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className="mb-5">
          <label className="text-sm font-medium block mb-1">Bedrooms</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
              className="border rounded px-3 py-1"
            >
              −
            </button>
            <span className="w-8 text-center">{bedrooms}</span>
            <button
              type="button"
              onClick={() => setBedrooms(Math.min(5, bedrooms + 1))}
              className="border rounded px-3 py-1"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-5">
          <label className="text-sm font-medium block mb-1">
            Minimum night stays
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setNights(Math.max(1, nights - 1))}
              className="border rounded px-3 py-1"
            >
              −
            </button>
            <span className="w-8 text-center">{nights}</span>
            <button
              type="button"
              onClick={() => setNights(Math.min(30, nights + 1))}
              className="border rounded px-3 py-1"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mb-5">
          <label className="flex flex-col items-center justify-center w-full h-64 bg-neutral-100 border border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-neutral-200">
            <div className="flex flex-col items-center justify-center text-gray-600 pt-5 pb-6">
              <p className="mb-2 text-sm">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs">
                At least one clear picture of the property
              </p>
              {image && (
                <p className="text-xs mt-2 text-green-600">
                  {image.name} selected
                </p>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>

        <label className="flex items-center mb-5 cursor-poiter">
          <input
            type="checkbox"
            className="w-4 h-4 border rounded cursor-pointer"
            required
          />
          <p className="ms-2 text-sm font-medium select-none cursor-pointer">
            I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              terms and conditions
            </a>
            .
          </p>
        </label>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="text-white mr-3 bg-[#E00C41] border border-transparent hover:bg-red-500 font-medium rounded-lg text-sm px-4 py-2.5 disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
