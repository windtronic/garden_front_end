import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const getPlants = async () => {
      const response = await axios.get(`http://localhost:8000/plants/`);
      console.log(response.data)
      setPlants(response.data);
    };
    getPlants();
  }, []);

  if (!plants) {
    return <h1>Loading, please wait...</h1>;
  } else {
    return (
      <div className="plant-list">
        {plants.map((plant) => (
          <Link to={`/plant_listings/${plant.id}`} key={plant.id}>
          <button className="plant-button">{plant.name}</button>
          </Link>
        ))}
      </div>
    );
  }
}


