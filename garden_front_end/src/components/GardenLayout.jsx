import beetrootImage from './images/beet.png';
import carrotImage from './images/carrot.png';
import cucumberImage from './images/cucumber.png';
import greenPepperImage from './images/green_pepper.png';
import lettuceImage from './images/lettuce.png';
import onionImage from './images/onion.png';
import peasImage from './images/peas.png';
import potatoImage from './images/potato.png';
import redPepperImage from './images/red_pepper.png';
import spinachImage from './images/spinach.png';
import tomatoImage from './images/tomato.png';



export default function GardenLayout() {
  return (
    <div className="garden-layout">
      <img src={beetrootImage} alt="Beetroot" />
      <img src={carrotImage} alt="Carrot" />
      <img src={cucumberImage} alt="Cucumber" />
      <img src={greenPepperImage} alt="Green Pepper" />
      <img src={lettuceImage} alt="Lettuce" />
      <img src={onionImage} alt="Onion" />
      <img src={peasImage} alt="Peas" />
      <img src={potatoImage} alt="Potato" />
      <img src={redPepperImage} alt="Red Pepper" />
      <img src={spinachImage} alt="Spinach" />
      <img src={tomatoImage} alt="Tomato" />
    </div>
  );
}
