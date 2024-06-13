import React , {useState , useEffect} from 'react'
import './App.scss'
// import { json } from 'react-router-dom'

function App() {

  const[cityWeather , setCityWeather] = useState()

  // const showWeather = useRef();

  // useEffect(()=>{
  //   fetch('https://api.openweathermap.org/data/2.5/weather?appid=582560638c1b004bd0c8a5cd5e2f7efa&q=karaj')
  //     .then(res=>res.json())
  //     .then(json=>setCityWeather(json))
  // })

  function getInfo() {
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=582560638c1b004bd0c8a5cd5e2f7efa&q=tehran')
      .then(res=>res.json())
      .then(json=>setCityWeather(json))
  }

  if(!cityWeather) {return null};

  // let tem = cityWeather.main.temp;
  // let equal = Math.round(tem)

  return (
    <div className='app-container'>
      <div className="search-panel-container">
        <input type="search" id='search-pan' placeholder='Enter Your Location'/>
        <button onClick={getInfo}> Search </button>
      </div>
      <div className="api-info">
        <h1>{cityWeather.name}</h1>
        <h2>{cityWeather.sys.country}</h2>
        <h2>{equal}</h2>
      </div>
    </div>
  )
}

export default App