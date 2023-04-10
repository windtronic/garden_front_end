import arugulaImage from '../images/arugula.png';
import basilImage from '../images/basil.png';
import beetrootImage from '../images/beet.png';
import borageImage from '../images/borage.png';
import carrotImage from '../images/carrot.png';
import cilantroImage from '../images/cilantro.png';
import cucumberImage from '../images/cucumber.png';
import garlicImage from '../images/garlic.png';
import greenBeanImage from '../images/green_bean.png';
import greenPepperImage from '../images/green_pepper.png';
import lettuceImage from '../images/lettuce.png';
import milkweedImage from '../images/milkweed.png';
import onionImage from '../images/onion.png';
import peasImage from '../images/peas.png';
import potatoImage from '../images/potato.png';
import redPepperImage from '../images/red_pepper.png';
import salviaImage from '../images/salvia.png';
import spinachImage from '../images/spinach.png';
import summerSquashImage from '../images/summer_squash.png';
import tomatoImage from '../images/tomato.png';
import winterSquashImage from '../images/winter_squash.png';
import yarrowImage from '../images/yarrow.png';

export default function GardenLayout() {
  return (
    <div className="garden-layout">
      <img src={arugulaImage} alt="Arugula" title="Arugula" />
      <img src={basilImage} alt="Basil" title="Basil" />
      <img src={beetrootImage} alt="Beetroot" title="Beetroot" />
      <img src={borageImage} alt="Borage" title="Borage" />
      <img src={carrotImage} alt="Carrot" title="Carrot" />
      <img src={cilantroImage} alt="Cilantro" title="Cilantro" />
      <img src={cucumberImage} alt="Cucumber" title="Cucumber" />
      <img src={garlicImage} alt="Garlic" title="Garlic" />
      <img src={greenBeanImage} alt="Green Bean" title="Green Bean" />
      <img src={greenPepperImage} alt="Green Pepper" title="Green Pepper" />
      <img src={lettuceImage} alt="Lettuce" title="Lettuce" />
      <img src={milkweedImage} alt="Milkweed" title="Milkweed" />
      <img src={onionImage} alt="Onion" title="Onion" />
      <img src={peasImage} alt="Peas" title="Peas" />
      <img src={potatoImage} alt="Potato" title="Potato" />
      <img src={redPepperImage} alt="Red Pepper" title="Red Pepper" />
      <img src={salviaImage} alt="Salvia" title="Salvia" />
      <img src={spinachImage} alt="Spinach" title="Spinach" />
      <img src={summerSquashImage} alt="Summer Squash" title="Summer Squash" />
      <img src={tomatoImage} alt="Tomato" title="Tomato" />
      <img src={winterSquashImage} alt="Winter Squash" title="Winter Squash" />
      <img src={yarrowImage} alt="Yarrow" title="Yarrow"/>
    </div>
  );
}
