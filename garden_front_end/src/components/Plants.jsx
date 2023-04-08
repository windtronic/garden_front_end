import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const getPlants = async () => {
      const response = await axios.get(`http://localhost:8000/plants`);
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
          <div key={plant.id}>
            <Link to={`/plant/${plant.id}`}>
              <p>{plant.name}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}


