import { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { useSprings, animated } from 'react-spring';
import { Link } from 'react-router-dom'


function GardenLayout() {

  const plants = [
    { id: 1, name: 'arugula', image: require('../images/arugula.png'), position: { x: 0, y: 0 } },
    { id: 2, name: 'basil', image: require('../images/basil.png'), position: { x: 100, y: 0 } },
    { id: 3, name: 'beet', image: require('../images/beet.png'), position: { x: 200, y: 0 } },
    { id: 4, name: 'borage', image: require('../images/borage.png'), position: { x: 300, y: 0 } },
    { id: 5, name: 'carrot', image: require('../images/carrot.png'), position: { x: 0, y: 100 } },
    { id: 6, name: 'cilantro', image: require('../images/cilantro.png'), position: { x: 100, y: 100 } },
    { id: 7, name: 'cucumber', image: require('../images/cucumber.png'), position: { x: 200, y: 100 } },
    { id: 8, name: 'garlic', image: require('../images/garlic.png'), position: { x: 300, y: 100 } },
    { id: 9, name: 'green bean', image: require('../images/green_bean.png'), position: { x: 0, y: 200 } },
    { id: 10, name: 'green pepper', image: require('../images/green_pepper.png'), position: { x: 100, y: 200 } },
    { id: 11, name: 'lettuce', image: require('../images/lettuce.png'), position: { x: 200, y: 200 } },
    { id: 12, name: 'milkweed', image: require('../images/milkweed.png'), position: { x: 300, y: 200 } },
    { id: 13, name: 'onion', image: require('../images/onion.png'), position: { x: 0, y: 300 } },
    { id: 14, name: 'peas', image: require('../images/peas.png'), position: { x: 100, y: 300 } },
    { id: 15, name: 'potato', image: require('../images/potato.png'), position: { x: 200, y: 300 } },
    { id: 16, name: 'red pepper', image: require('../images/red_pepper.png'), position: { x: 300, y: 300 } },
    { id: 17, name: 'salvia', image: require('../images/salvia.png'), position: { x: 0, y: 400 } },
    { id: 18, name: 'spinach', image: require('../images/spinach.png'), position: { x: 100, y: 400 } },
    { id: 19, name: 'summer squash', image: require('../images/summer_squash.png'), position: { x: 200, y: 400 } },
    { id: 20, name: 'tomato', image: require('../images/tomato.png'), position: { x: 300, y: 400 } },
    { id: 21, name:  'winter squash', image: require('../images/winter_squash.png'), position: {x: 0, y: 500} },
    { id: 22, name:  'yarrow', image: require('../images/yarrow.png'), position: {x: 100, y: 500} }
  ];  



  const initialPositions = plants;
  plants.forEach((plant) => {
    initialPositions[plant.name] = plant.position;
  });

  const [positions, setPositions] = useState(initialPositions);

  const bind = useGesture({
    onDragStart: ({ event, args: [plant] }) => {
      event.preventDefault();
    },
    onDrag: ({ down, movement: [x, y], event, args: [plant] }) => {
      event.preventDefault();
      if (down) {
        setPositions((prevPositions) => ({
          ...prevPositions,
          [plant.name]: {
            x: initialPositions[plant.name].x + x,
            y: initialPositions[plant.name].y + y,
          },
        }));
      }
    },
  });


  const springs = useSprings(
    plants.length,
    plants.map((plant) => ({
      to: {
        left: `${(positions[plant.name] && positions[plant.name].x) ?? plant.position.x}px`,
        top: `${(positions[plant.name] && positions[plant.name].y) ?? plant.position.y}px`,
      },
    }))
  );

return (
  <div>
    <div className="page-background">
    <div className="garden-layout">
      {springs.map((styles, index) => (
        <animated.img
          key={plants[index].id}
          src={plants[index].image}
          alt={plants[index].name}
          title={plants[index].name}
          {...bind(plants[index])}
          style={{
            position: 'absolute',
            ...styles,
            cursor: 'grab',
            touchAction: 'none',
          }}
        />
      ))}
    </div>
    <div className="container">
    <div className="grid-container">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      
    </div>
  </div>
  <div>
     <Link to="/companion_planting" className="companion-link">
                <h3 className="header-text">Companion Planting Guide</h3></Link>
  </div>
  </div>
  </div>
);

      }

export default GardenLayout;



















