import './App.css';
import { GoogleMap, LoadScript,Marker  } from '@react-google-maps/api';
import React, { useState,useEffect } from 'react';

function App() {

const [ currentPosition, setCurrentPosition ] = useState({});
const [count, setCount] = useState([]);
const [input, setInput] =useState("");

  const mapStyles = {     

    height: "100vh",
    width: "100%"};
   
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
const handleChange=(event)=> {
  setInput(event.target.value);

  }
  







  const search = () => {

    fetch("http://ec2-3-19-27-17.us-east-2.compute.amazonaws.com:8090/location/"+input)
      .then((response) => response.json())
      .then((json) => setCount(json))
      .catch((error) =>console.log(error)) 
      
      console.log(input)
     
  };







  return (
    <div className="App">
      <input type="text" name="name" value={input} onChange={handleChange}/>
      <button onClick={()=>search()}>
  Add Markers
</button>
      <LoadScript
       googleMapsApiKey='AIzaSyDhc84YoOi8nKfHqGBzgwFlbh36uE9_7p8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          
        >
         {
            count.map(item => {
              return (
              <Marker key={item.locationId} position={{lng: item.longitude,lat:item.latitude}}/>
              )
            })
         }
        </GoogleMap>
     </LoadScript>
    </div>
  );
}

export default App;
