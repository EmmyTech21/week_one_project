import './index.js'
import sedan from './images/icon-sedans.svg'
import luxury from './images/icon-luxury.svg'
import suvs from './images/icon-suvs.svg'
export default function App() {
  return  <div className='container'>
    <div className='bright'>
    <NewCard name="SEDANS" photoName={sedan} text="Choose a sedan for
     its afoordability and excellent fuel economy. Ideal
      for cruosing in the city or an your next road trip"/>
</div>
<div className='dark'>
    <NewCard  name="SEDANS" photoName={suvs} text="Take on SUV for it's 
    spacious interior power.and versartility perfect for your next family vacation and off-road adventure"/>
</div>

<div className='verydark'>
      <NewCard name="SEDANS" photoName={luxury} text="Cruise in the best car brands without 
      the bloatedprices. Enjoy the enhanced comfort of a luxury rental and arrive in style"/>
      </div>
  </div>
}


function NewCard(props){
  return <div>
    <img alt={props.key} src={props.photoName}  />
    <h2>{props.name}</h2>
    <p>{props.text}</p>
    <button>Learn More</button>
  </div>
}
