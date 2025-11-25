import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Character_for_id = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [id_data, setId_data] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetch_for_id = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3000/api/character/${id}`);
        const data = await res.json();
        setId_data(data.results);
      } catch (error) {
        setError(error.message);
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetch_for_id();
  }, [id]);
  console.log(id_data);
  return (
    <div className="flex justify-center">
      <div className="flex gap-7 w-70%">
        {loading && <p>COMING...</p>}
        <div>
          <img
            className="w-50 h-full"
            src={id_data.image?.original_url}
            alt={id_data.name}
          />
        </div>
        <div>
          <p className="text-5xl mb-5">{id_data.name}</p>
          <div className="h-1 w-full rounded-full mb-8 color-[red]" />
          <p>{id_data.deck}</p>
        </div>
      </div>
    </div>
  );
};
export default Character_for_id;
