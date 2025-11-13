import { useState, useEffect } from "react";
import temp from "../images/temp_logo.jpg";
import { Link } from "@mui/material";

const Navbar = () => {
  const [inputItem, setInputItem] = useState(null);
  const [externalData, setExternalData] = useState([
    { image: { icon_url: { temp } }, name: "test" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!inputItem) return;
    const delayDebounce = setTimeout(() => {
      handleSearch();
    }, 600);
    return () => clearTimeout(delayDebounce);
  }, [inputItem]);
  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/api/search?query=${inputItem}`
      );
      const data = await res.json();
      setLoading(false);
      setExternalData(data.results);
    } catch (error) {
      setError(error.massage);
    }
  };
  console.log(externalData);
  return (
    <div
      className={`w-330 text-[white] rounded-lg px-2 mt-2 bg-${
        isFocused && "[grey]"
      }`}
    >
      <div className="h-20 flex items-center">
        <Link href="/" className="text-2xl">
          myv.
        </Link>
        <div className="relative flex items-center justify-end w-full">
          <svg
            viewBox="0 0 24 24"
            fill="grey"
            className="size-4 left-6 relative"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            value={inputItem || ""}
            onChange={(e) => setInputItem(e.target.value)}
            className={`${
              isFocused ? "w-full" : "w-64"
            } border-gray-300 transition-all duration-300 ease-in-out h-9 bg-[white] text-[black] rounded-lg pl-7 outline-0`}
            placeholder="Search you game"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <div className="w-50">
            <Link href="/log_in" className="pl-5">
              Log in
            </Link>
            <Link href="sign_up" className="pl-5">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className={`${!isFocused && "hidden"}`}>
        {loading && <p>Loading...</p>}
        {externalData.map((item, index) => (
          <div key={index} className={`flex gap-3`}>
            <div className="pb-1">
              <img
                className="h-full w-20 rounded-lg"
                src={item.image.icon_url}
              />
            </div>
            <div>
              <h1>{item.name}</h1>
              <p>{item.deck}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
//478dc71d037549c58732b720314df28d gamebrain api key
//382f90b0 omdb api key
//08eef91c5a865641cc85ae7b771d4002f78ef3cb gaint bomb api key
