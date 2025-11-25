import { useState } from "react";
import { Link } from "@mui/material";
import { useEffect } from "react";

const Result = ({ isFocused, externalData }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, [isFocused]);
  return (
    <div className={`${!isFocused && "hidden"}`}>
      {!externalData || externalData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        externalData.map((item, index) => (
          <Link
            href={`/${item.resource_type}/${item.guid}/`}
            key={index}
            underline="none"
            color="white"
          >
            <div className={`flex gap-3 bg-stone-800 mb-2 border-1-solid`}>
              <div className="pb-1 pointer-events-none">
                <img
                  className="h-full w-20 rounded-lg "
                  src={item.image.icon_url}
                />
              </div>
              <div>
                <h1>{item.name}</h1>
                <p>{item.deck}</p>
                <p>{item.resource_type}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};
export default Result;
