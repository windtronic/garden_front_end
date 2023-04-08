import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PlantListings() {
  const { id } = useParams();
  const [plantDetails, setPlantDetails] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/plants/${id}/`);
        setPlantDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlantDetails();
  }, [id]);

  if (!plantDetails) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>{plantDetails.name}</h2>
      <p>Row Spacing: {plantDetails.row_spacing}</p>
      <p>Seed Depth: {plantDetails.seed_depth}</p>
      <p>Sunlight Needs: {plantDetails.sunlight_needs}</p>
      <p>Season: {plantDetails.season}</p>
      <p>Water Needs: {plantDetails.water_needs}</p>
      <p>Frost Tolerance: {plantDetails.frost_tolerance}</p>
      <p>Germination Time: {plantDetails.germination_time}</p>
      <p>Harvest Times: {plantDetails.harvest_times}</p>
      <p>Grow from Seed: {plantDetails.grow_from_seed ? "Yes" : "No"}</p>
      <p>Grow from Transplant: {plantDetails.grow_from_transplant ? "Yes" : "No"}</p>
      <p>Plant Needs Fertilization: {plantDetails.plant_needs_fertilization ? "Yes" : "No"}</p>
      <p>Date to Plant: {plantDetails.date_to_plant}</p>
    </div>
  );
}
