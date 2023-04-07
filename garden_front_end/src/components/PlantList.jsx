// import { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import '../styles/venues.css'
// import { Link } from "react-router-dom";


// export default function Venues() {
    
//     let navigate = useNavigate()
//     const [plants, setPlants] = useState([])

//     useEffect(() => {
//         const renderPlants = async () => {
//           const response = await axios.get(`http://localhost:8000/plants`);
//           setPlants(response.data);
//           console.log(response.data)
         
//         };
//         renderPlants()
//     }, [])
    
   
//     if (!plants) {
//         return <h1> loading please wait</h1>
        
//     } else {

//     return (
                
//         <div className="venue-list">
            
//             {plants.map((venue) => (
//                 <Link to={`/plantDetails/${venue.id}`} key={venue.id}>
//                     <div className="venue-card" style={{backgroundImage:`url('${venue.image_url}')` }} >
//                         <div className="img-caption">
//                         <h2 className="title-venue-one">{venue.name}</h2> 
//                         <p className="address-venue-one">{venue.address}</p>    
//                         </div>                  
//                     </div>
//                 </Link>
//                 ))}
            
//         </div>
//         )
//     }
// }