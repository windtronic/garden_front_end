import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Plants() {
  const [plants, setPlants] = useState([]);
  const [newPlantName, setNewPlantName] = useState("");
  const [updatedPlantName, setUpdatedPlantName] = useState("");
  const [editingPlantId, setEditingPlantId] = useState(null);

  const getPlants = async () => {
    const response = await axios.get(`http://localhost:8000/plants/`);
    setPlants(response.data);
  };

  useEffect(() => {
    getPlants();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/plants/${id}/`);
    await getPlants();
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    const newPlant = {
      user: 8, 
      name: newPlantName,
    };
    await axios.post(`http://localhost:8000/plants/`, newPlant);
    setNewPlantName("");
    await getPlants();
  };
  
  const handleUpdate = async (event, id, updates) => {
    event.preventDefault();
    const updatedPlant = {
      user: 8, 
      ...updates,
    };
    await axios.put(`http://localhost:8000/plants/${id}/`, updatedPlant);
    setEditingPlantId(null);
    setUpdatedPlantName("");
    await getPlants();
  };

  return (
    <div className="plant-list">
      <form onSubmit={handleCreate}>
        <input
          type="text"
          value={newPlantName}
          onChange={(event) => setNewPlantName(event.target.value)}
          placeholder="Plant name"
        />
        <button className="plant-button" type="submit">
          Create Plant
        </button>
      </form>
      {plants.map((plant) => (
        <div key={plant.id} className="plant-card">
          <div className="plant-card-content">
            <Link to={`/plant_listings/${plant.id}`} className="plant-link">
              <h2 className="plant-name">{plant.name}</h2>
            </Link>
            <p>{plant.description}</p>
          </div>
          <div className="plant-card-buttons">
            <button
              className="plant-button delete-button"
              onClick={() => handleDelete(plant.id)}
            >
              Delete
            </button>
            <button
              className="plant-button edit-button"
              onClick={() => setEditingPlantId(plant.id)}
            >
              Edit
            </button>
          </div>
          {editingPlantId === plant.id && (
            <form
              className="plant-update-form"
              onSubmit={(event) =>
                handleUpdate(event, plant.id, { name: updatedPlantName })
              }
            >
              <input
                type="text"
                className="plant-name"
                placeholder="New plant name"
                value={updatedPlantName}
                onChange={(event) => setUpdatedPlantName(event.target.value)}
              />
              <button className="plant-button" type="submit">
                Update
              </button>
            </form>
          )}
        </div>
      ))}
    </div>
  );
  
  
}









