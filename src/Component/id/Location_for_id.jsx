import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Location_for_id = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [id_data, setId_data] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetch_for_id = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3000/api/location/${id}`);
        const data = await res.json();
        console.log(data.results);
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
  return <div>{loading && <p>Loading...</p>}</div>;
};
export default Location_for_id;
