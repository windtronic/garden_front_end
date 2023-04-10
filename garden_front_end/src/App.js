import './App.css';
import {Routes, Route} from 'react-router-dom'
// import { useState, } from "react";
import Header from './components/Header'
import Main from './components/Main'
// import Calendar from './components/Calendar'
import Plants from './components/Plants'
import PlantListings from './components/PlantListings'
// import CompanionPlanting from './components/CompanionPlanting'
// import Weather from './components/Weather'
import GardenLayout from './components/GardenLayout'



function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div>
          
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/garden_layout" element={<GardenLayout />} />
            <Route path="/plants/:id" element={<PlantListings />} />
            <Route path="/plant_listings/:id" element={<PlantListings />} />
        </Routes>

        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;


