import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PlantListings() {
  const { id } = useParams();
  const [plantListings, setPlantListings] = useState([]);
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
        console.log([response.data]);
        setPlantListings(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

 const handleNewPlantListingSubmit = async (event) => {
  event.preventDefault();
  await axios.post(`http://localhost:8000/plant_listings/`, {...newPlantListing,plant: id});
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
        <div className="plant-info-box">
          <h2>{plantListings.name}</h2>
          <p>Row Spacing: {plantListings.row_spacing}</p>
          <p>Seed Depth: {plantListings.seed_depth}</p>
          <p>Sunlight Needs: {plantListings.sunlight_needs}</p>
          <p>Season: {plantListings.season}</p>
          <p>Water Needs: {plantListings.water_needs}</p>
          <p>Frost Tolerance: {plantListings.frost_tolerance}</p>
          <p>Germination Time: {plantListings.germination_time}</p>
          <p>Harvest Times: {plantListings.harvest_times}</p>

          <p>
            {" "}
            Grow from Transplant:
            <select
              value={newPlantListing.grow_from_transplant}
              onChange={handleNewPlantListingChange}
              name="grow_from_transplant"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </p>
          <p>
            Grow from Seed:
            <select
              value={newPlantListing.grow_from_seed}
              onChange={handleNewPlantListingChange}
              name="grow_from_seed"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </p>

          <p>
            Plant Needs Fertilization:
            <select
              value={newPlantListing.plant_needs_fertilization}
              onChange={handleNewPlantListingChange}
              name="plant_needs_fertilization"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </p>

          <p>Date to Plant: {plantListings.date_to_plant}</p>
        </div>
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
              placeholder="Water needs"
            />
            <input
              type="text"
              value={newPlantListing.frost_tolerance}
              onChange={handleNewPlantListingChange}
              name="frost_tolerance"
              placeholder="Frost tolerance"
            />
            <input
              type="text"
              value={newPlantListing.germination_time}
              onChange={handleNewPlantListingChange}
              name="germination_time"
              placeholder="Germination time"
            />
            <input
              type="text"
              value={newPlantListing.harvest_times}
              onChange={handleNewPlantListingChange}
              name="harvest_times"
              placeholder="Harvest times"
            />
            <input
              type="text"
              value={newPlantListing.date_to_plant}
              onChange={handleNewPlantListingChange}
              name="date_to_plant"
              placeholder="Date to Plant"
            />
            <button type="submit">Create New Plant Listing</button>
          </form>
        </div>
      </div>
    );
  }
}
