import { useState } from "react";
export default function Searchbar({ streets = [] }) {
  const [startDate, setStartDate] = useState(new Date());
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  return (
    <section className="flex justify-center bg-[#fbfbfb] relative">
      <div className="grid grid-cols-3 w-fit dropdownmenudiv shadow-[0px_15px_20px_-1px_rgba(0,0,0,0.1)] rounded-full">
        <details className="dropdown rounded-full pr-0 rounded-r-none pl-2">
          <summary className="btn m-1 sumbtn rounded-2xl rounded-r-none ">
            Where
          </summary>
          <ul className="menu dropdown-content bg-white rounded-box z-1 w-3xs p-2 shadow-inner ">
            {streets && streets.length > 0 ? (
              streets.map((street, index) => (
                <li key={index}>
                  <a>{street}</a>
                </li>
              ))
            ) : (
              <li>
                <a>Loading...</a>
              </li>
            )}
          </ul>
        </details>

        <details className="dropdown pl-0 rounded-full rounded-l-none rounded-r-none ">
          <summary className="btn m-1 sumbtn rounded-l-none rounded-2xl">
            When
          </summary>
          <ul className="menu dropdown-content rounded-box z-1 w-3xs p-2 shadow-inner bg-white">
            <li>
              <input
                type="date"
                className="input rounded-md"
                onChange={(e) => console.log(e.target.value)}
              />
            </li>
          </ul>
        </details>
        <details className="dropdown pl-0 rounded-full rounded-l-none ">
          <summary className="btn m-1 sumbtn rounded-l-none rounded-2xl">
            Who
            <div className=" bg-[#E00C41] rounded-full relative left-35 bottom-1 p-3 flex justify-center items-center ">
              <img src="search.svg " alt="search" className="z-10 w-6 h-6" />
            </div>
          </summary>
          <ul className="menu dropdown-content rounded-box z-1 w-3xs p-2 shadow-inner bg-white">
            <li>
              <div className="flex justify-between p-3">
                <label className="text-md  block mb-1 mr-1 ">Adults</label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                    className="border-none px-3 py-1.5 rounded-full bg-gray-100 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="w-4 text-center">{adultCount}</span>
                  <button
                    type="button"
                    onClick={() => setAdultCount(Math.min(30, adultCount + 1))}
                    className="border-none rounded-full px-3 py-1.5 bg-gray-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="flex justify-between p-3">
                <label className="text-md  block mb-1 mr-1 ">Children</label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() =>
                      setChildrenCount(Math.max(1, childrenCount - 1))
                    }
                    className="border-none px-3 py-1.5 rounded-full bg-gray-100 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="w-4 text-center">{childrenCount}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setChildrenCount(Math.min(30, childrenCount + 1))
                    }
                    className="border-none rounded-full px-3 py-1.5 bg-gray-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-between p-3">
                <label className="text-md  block mb-1 mr-1 ">Infants</label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setInfantCount(Math.max(1, infantCount - 1))}
                    className="border-none px-3 py-1.5 rounded-full bg-gray-100 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="w-4 text-center">{infantCount}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setInfantCount(Math.min(30, infantCount + 1))
                    }
                    className="border-none rounded-full px-3 py-1.5 bg-gray-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
}
