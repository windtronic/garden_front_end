import './App.css';
import {Routes, Route} from 'react-router-dom'
// import { useState, } from "react";
import Header from './components/Header'
import Main from './components/Main'
import MyCalendar from './components/MyCalendar'
import Plants from './components/Plants'
import PlantListings from './components/PlantListings'
import CompanionPlanting from './components/CompanionPlanting'
import Weather from './components/Weather'
import GardenLayout from './components/GardenLayout'
import Register from './components/Register'
import Login from './components/Login'




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
            <Route path="/my_calendar" element={<MyCalendar initialEvents={{events: []}} />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/companion_planting" element={<CompanionPlanting />} />
            <Route path="/weather" element={<Weather />} />

        </Routes>

        </div>
      </main>
    
    </div>
  );
}

export default App;



