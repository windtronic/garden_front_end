import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function PlantListings() {
  const { id } = useParams();
  const [plantListings, setPlantListings] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/plant_listings/${id}/`);
        console.log([response.data]);
        setPlantListings(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!plantListings) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h2>{plantListings.name}</h2>
        <p>Row Spacing: {plantListings.row_spacing}</p>
        <p>Seed Depth: {plantListings.seed_depth}</p>
        <p>Sunlight Needs: {plantListings.sunlight_needs}</p>
        <p>Season: {plantListings.season}</p>
        <p>Water Needs: {plantListings.water_needs}</p>
        <p>Frost Tolerance: {plantListings.frost_tolerance}</p>
        <p>Germination Time: {plantListings.germination_time}</p>
        <p>Harvest Times: {plantListings.harvest_times}</p>
        <p>Grow from Seed: {plantListings.grow_from_seed ? "Yes" : "No"}</p>
        <p>Grow from Transplant: {plantListings.grow_from_transplant ? "Yes" : "No"}</p>
        <p>Plant Needs Fertilization: {plantListings.plant_needs_fertilization ? "Yes" : "No"}</p>
        <p>Date to Plant: {plantListings.date_to_plant}</p>
      </div>
    );
  }
}
