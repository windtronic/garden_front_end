import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PlantListings() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [plantListings, setPlantListings] = useState(null);
  const [plant, setPlant] = useState(null);
  const [newPlantListing, setNewPlantListing] = useState({
    plant: id,
    name: "",
    row_spacing: "",
    seed_depth: "",
    sunlight_needs: "",
    season: "",
    water_needs: "",
    frost_tolerance: "",
    germination_time: "",
    harvest_times: "",
    grow_from_seed: false,
    grow_from_transplant: false,
    plant_needs_fertilization: false,
    date_to_plant: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/plant_listings/?plant=${id}`
        );
        setPlantListings(
          response.data.filter((listing) => listing.plant === Number(id))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  const handleNewPlantListingSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:8000/plant_listings/`, {
      ...newPlantListing,
      plant: id,
    });
    setNewPlantListing({
      plant: id,
      name: "",
      row_spacing: "",
      seed_depth: "",
      sunlight_needs: "",
      season: "",
      water_needs: "",
      frost_tolerance: "",
      germination_time: "",
      harvest_times: "",
      grow_from_seed: false,
      grow_from_transplant: false,
      plant_needs_fertilization: false,
      date_to_plant: "",
    });
    navigate("/plants");
  };

  const handleNewPlantListingChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewPlantListing((prevState) => {
      if (type === "checkbox") {
        return { ...prevState, [name]: checked };
      } else {
        return { ...prevState, [name]: value };
      }
    });
  };

  if (!plantListings) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="plant-listing-page">
        {plantListings.length > 0 && (
          <div key={plantListings[0].id} className="plant-info-box">
            <h2>{plantListings[0].name}</h2>
            <p>Row Spacing: {plantListings[0].row_spacing}</p>
            <p>Seed Depth: {plantListings[0].seed_depth}</p>
            <p>Sunlight Needs: {plantListings[0].sunlight_needs}</p>
            <p>Season: {plantListings[0].season}</p>
            <p>Water Needs: {plantListings[0].water_needs}</p>
            <p>Frost Tolerance: {plantListings[0].frost_tolerance}</p>
            <p>Germination Time: {plantListings[0].germination_time}</p>
            <p>Harvest Times: {plantListings[0].harvest_times}</p>
            <p>
              Grow from Transplant:{" "}
              {plantListings[0].grow_from_transplant ? "Yes" : "No"}
            </p>
            <p>
              Grow from Seed: {plantListings[0].grow_from_seed ? "Yes" : "No"}
            </p>
            <p>
              Plant Needs Fertilization:{" "}
              {plantListings[0].plant_needs_fertilization ? "Yes" : "No"}
            </p>
            <p>Date to Plant: {plantListings[0].date_to_plant}</p>
          </div>
        )}
        <div className="create-plant-listing-box">
          <form onSubmit={handleNewPlantListingSubmit}>
            <input
              type="text"
              value={newPlantListing.name}
              onChange={handleNewPlantListingChange}
              name="name"
              placeholder="Plant name"
            />
            <input
              type="text"
              value={newPlantListing.row_spacing}
              onChange={handleNewPlantListingChange}
              name="row_spacing"
              placeholder="Row spacing"
            />
            <input
              type="text"
              value={newPlantListing.seed_depth}
              onChange={handleNewPlantListingChange}
              name="seed_depth"
              placeholder="Seed depth"
            />
            <input
              type="text"
              value={newPlantListing.sunlight_needs}
              onChange={handleNewPlantListingChange}
              name="sunlight_needs"
              placeholder="Sunlight needs"
            />
            <input
              type="text"
              value={newPlantListing.season}
              onChange={handleNewPlantListingChange}
              name="season"
              placeholder="Season"
            />
            <input
              type="text"
              value={newPlantListing.water_needs}
              onChange={handleNewPlantListingChange}
              name="water_needs"
              placeholder="Water Needs"
            />
            <input
              type="text"
              value={newPlantListing.frost_tolerance}
              onChange={handleNewPlantListingChange}
              name="frost_tolerance"
              placeholder="Frost Tolerance"
            />
            <input
              type="text"
              value={newPlantListing.germination_time}
              onChange={handleNewPlantListingChange}
              name="germination_time"
              placeholder="Germination Time"
            />
            <input
              type="text"
              value={newPlantListing.harvest_times}
              onChange={handleNewPlantListingChange}
              name="harvest_times"
              placeholder="Harvest Times"
            />
            <input
              type="text"
              value={newPlantListing.date_to_plant}
              onChange={handleNewPlantListingChange}
              name="date_to_plant"
              placeholder="Date to Plant"
            />
            Grow from Transplant:
            <select
              value={newPlantListing.grow_from_transplant}
              onChange={handleNewPlantListingChange}
              name="grow_from_transplant"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            Grow from Seed:
            <select
              value={newPlantListing.grow_from_seed}
              onChange={handleNewPlantListingChange}
              name="grow_from_seed"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            Plant Needs Fertilization:
            <select
              value={newPlantListing.plant_needs_fertilization}
              onChange={handleNewPlantListingChange}
              name="plant_needs_fertilization"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <button onClick={handleNewPlantListingSubmit}>
              Create New Plant Listing
            </button>
          </form>
        </div>
      </div>
    );
  }
}
