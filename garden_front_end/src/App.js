import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useState, } from "react";
import Header from './components/Header'
import Main from './components/Main'
import Calendar from './components/Calendar'
import Plants from './components/Plants'
import PlantListings from './components/PlantListings'
import CompanionPlanting from './components/CompanionPlanting'
import Weather from './components/Weather'
import GardenLayout from './components/GardenLayout'
import Footer from './components/Footer'


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
            <Route path="/plant/:id" element={<PlantListings />} />
            <Route path="/plantList/:id" element={<PlantListings />} />
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


