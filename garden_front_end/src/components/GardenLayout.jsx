import { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { useSprings, animated } from 'react-spring';


  const plants = [
  { id: 1, name: 'arugula', image: require('../images/arugula.png'), position: { x: 0, y: 0 } },
  { id: 2, name: 'basil', image: require('../images/basil.png'), position: { x: 0, y: 0 } },
  { id: 3, name: 'beet', image: require('../images/beet.png'), position: { x: 0, y: 0 } },
  { id: 4, name: 'borage', image: require('../images/borage.png'), position: { x: 0, y: 0 } },
  { id: 5, name: 'carrot', image: require('../images/carrot.png'), position: { x: 0, y: 0 } },
  { id: 6, name: 'cilantro', image: require('../images/cilantro.png'), position: { x: 0, y: 0 } },
  { id: 7, name: 'cucumber', image: require('../images/cucumber.png'), position: { x: 0, y: 0 } },
  { id: 8, name: 'garlic', image: require('../images/garlic.png'), position: { x: 0, y: 0 } },
  { id: 9, name: 'green bean', image: require('../images/green_bean.png'), position: { x: 0, y: 0 } },
  { id: 10, name: 'green pepper', image: require('../images/green_pepper.png'), position: { x: 0, y: 0 } },
  { id: 11, name: 'lettuce', image: require('../images/lettuce.png'), position: { x: 0, y: 0 } },
  { id: 12, name: 'milkweed', image: require('../images/milkweed.png'), position: { x: 0, y: 0 } },
  { id: 13, name: 'onion', image: require('../images/onion.png'), position: { x: 0, y: 0 } },
  { id: 14, name: 'peas', image: require('../images/peas.png'), position: { x: 0, y: 0 } },
  { id: 15, name: 'potato', image: require('../images/potato.png'), position: { x: 0, y: 0 } },
  { id: 16, name: 'red pepper', image: require('../images/red_pepper.png'), position: { x: 0, y: 0 } },
  { id: 17, name: 'salvia', image: require('../images/salvia.png'), position: { x: 0, y: 0 } },
  { id: 18, name: 'spinach', image: require('../images/spinach.png'), position: { x: 0, y: 0 } },
  { id: 19, name: 'summer squash', image: require('../images/summer_squash.png'), position: { x: 0, y: 0 } },
  { id: 20, name: 'tomato', image: require('../images/tomato.png'), position: { x: 0, y: 0 } },
  { id: 21, name:  'winter_squash', image: require('../images/winter_squash.png'), position: {x: 0, y: 0} },
  { id: 22, name:  'yarrow', image: require('../images/yarrow.png'), position: {x: 0, y: 0} }

];

function GardenLayout() {
  const [positions, setPositions] = useState(
    plants.reduce((acc, plant) => ({ ...acc, [plant.name]: plant.position }), {})
  );

  const bind = useGesture({
    onDrag: ({ down, movement: [x, y], event, args: [plant] }) => {
      event.preventDefault();
      setPositions((prevPositions) => ({
        ...prevPositions,
        [plant.name]: { x, y },
      }));
    },
  });

  const springs = useSprings(
    plants.length,
    plants.map((plant) => ({
      to: { transform: `translate3d(${positions[plant.name].x}px, ${positions[plant.name].y}px, 0)` },
    }))
  );

  return (
    <div className="garden-layout">
      {springs.map((styles, index) => (
        <animated.img
          key={plants[index].id}
          src={plants[index].image}
          alt={plants[index].name}
          {...bind(plants[index])}
          style={{ position: 'absolute',
           ...styles, cursor: 'grab', 
           touchAction: 'none' }}
        />
      ))}
    </div>
  );
}

export default GardenLayout;
















// import beetrootImage from '../images/beet.png';
// import borageImage from '../images/borage.png';
// import carrotImage from '../images/carrot.png';
// import cilantroImage from '../images/cilantro.png';
// import cucumberImage from '../images/cucumber.png';
// import garlicImage from '../images/garlic.png';
// import greenBeanImage from '../images/green_bean.png';
// import greenPepperImage from '../images/green_pepper.png';
// import lettuceImage from '../images/lettuce.png';
// import milkweedImage from '../images/milkweed.png';
// import onionImage from '../images/onion.png';
// import peasImage from '../images/peas.png';
// import potatoImage from '../images/potato.png';
// import redPepperImage from '../images/red_pepper.png';
// import salviaImage from '../images/salvia.png';
// import spinachImage from '../images/spinach.png';
// import summerSquashImage from '../images/summer_squash.png';
// import tomatoImage from '../images/tomato.png';
// import winterSquashImage from '../images/winter_squash.png';
// import yarrowImage from '../images/yarrow.png';









      // <img src={beetrootImage} alt="Beetroot" title="Beetroot" />
      // <img src={borageImage} alt="Borage" title="Borage" />
      // <img src={carrotImage} alt="Carrot" title="Carrot" />
      // <img src={cilantroImage} alt="Cilantro" title="Cilantro" />
      // <img src={cucumberImage} alt="Cucumber" title="Cucumber" />
      // <img src={garlicImage} alt="Garlic" title="Garlic" />
      // <img src={greenBeanImage} alt="Green Bean" title="Green Bean" />
      // <img src={greenPepperImage} alt="Green Pepper" title="Green Pepper" />
      // <img src={lettuceImage} alt="Lettuce" title="Lettuce" />
      // <img src={milkweedImage} alt="Milkweed" title="Milkweed" />
      // <img src={onionImage} alt="Onion" title="Onion" />
      // <img src={peasImage} alt="Peas" title="Peas" />
      // <img src={potatoImage} alt="Potato" title="Potato" />
      // <img src={redPepperImage} alt="Red Pepper" title="Red Pepper" />
      // <img src={salviaImage} alt="Salvia" title="Salvia" />
      // <img src={spinachImage} alt="Spinach" title="Spinach" />
      // <img src={summerSquashImage} alt="Summer Squash" title="Summer Squash" />
      // <img src={tomatoImage} alt="Tomato" title="Tomato" />
      // <img src={winterSquashImage} alt="Winter Squash" title="Winter Squash" />
      // <img src={yarrowImage} alt="Yarrow" title="Yarrow"/>