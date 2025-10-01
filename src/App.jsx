import { useState } from 'react'
import ButtonContainer from './components/ButtonContainer'
import './App.css'

function App() {
  const colorNames = ['Blue','Green','Black','Reset','Random','Red','Orange','Yellow'];
  let [color, setColor] = useState('reset');
  
  const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
  const handleOnClick = (colorName) => {
    // document.body.style.backgroundColor = color;
    if(colorName === 'random'){
      colorName = getRandomColor();
    }
    setColor(colorName);
  }

  return (
    <>
      <div className={`App color-transition`} style={{backgroundColor: color === 'reset' ? 'white' : color}}>
        <ButtonContainer colorNames={colorNames} handleOnClick={handleOnClick}/>
      </div>
    </>
  )
}

export default App;
