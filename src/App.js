import "./App.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import logo from './assests/T2.png'; 
import fb from './assests/fb.png'; 
import ins from './assests/ins.png'; 
import lin from './assests/lin.png'; 
import wha from './assests/wha.png'; 
import tw from './assests/tw.png'; 
import HttpsRedirect from 'react-https-redirect';

function App() {
  const [currentPosition, setCurrentPosition] = useState({});
  const [count, setCount] = useState([]);
  const [input, setInput] = useState("");

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 7.8731,
    lng:  80.7718,
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const search = () => {
    fetch(
      "http://ec2-3-19-27-17.us-east-2.compute.amazonaws.com:8090/location/" +
        input
    )
      .then((response) => response.json())
      .then((json) => setCount(json))
      .catch((error) => console.log(error));

    console.log(input);
  };

  return (
    <HttpsRedirect>
    <div className="App">
      <div className="menuBtn">
        <p>Menu</p>
        <img src={require('./assests/menu.png')} alt="menu" width="25px" height="20px" />
      </div>
      <nav className="main">
        <img src={logo} alt="travel logo" className="logo" />
        <ul className="main-menu">
          <li>
            <a href="student2_main.html">Home</a>
          </li>
          <li>
            <a href="../../student1/Student1_Product/Student1_Product.html">
              Aayu Map
            </a>
          </li>
          <li>
            <a href="../../student3/student3_quiz/student3_quiz_home.html">
              Quiz Challenge
            </a>
          </li>
          <li>
            <a href="../../student1/Student1_Product/Student1_Product.html#cart-section">
              Explore Aayu
            </a>
          </li>
          <li>
            <a href="../../student4/Gallery/Normal/gallerySourceOne.html">
              Aayu About
            </a>
          </li>
        </ul>
      </nav>

      <LoadScript googleMapsApiKey="AIzaSyDhc84YoOi8nKfHqGBzgwFlbh36uE9_7p8">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={7}
          center={defaultCenter}
        >
          <div id="searchbox">
            <input
              type="text"
              name="name"
              value={input}
              onChange={handleChange}
              id="namesearch"
              placeholder="Search for Plant"
            />
            <button onClick={() => search()} id="searchbutton">
              Search
            </button>
          </div>

          {count.map((item) => {
            return (
              <Marker
                key={item.locationId}
                position={{ lng: item.longitude, lat: item.latitude }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>


      <div className="footer">
    
        <div className="in-footer">
          <div className="footer-items">
            <h2>Quick Access</h2>
            <div className="border" />
            <ul>
              <a href="student2_main.html"><li>Home</li></a>
              <a href="../Map/map.html"><li>Aayu Map</li></a>
              <a href="../Quiz/student3_quiz_home.html"><li>Quiz Challenge</li></a>
              <a href="../Description/des.html"><li>Explore Aayu</li></a>
              <a href="../About/about.html"><li>Aayu About</li></a>
            </ul>
          </div>
          <div className="footer-items">
            <h2>Developer Info</h2>
            <div className="border" />
            <ul>
              <a href="../../student3/student3_team/student3_team.html"><li>Members Info</li></a>
              <a href="../editor/page-editor.html"><li>Page Editor</li></a>
              <a href="../../student4/SiteMap/sitemapSource.html"><li>Site Map</li></a>
              <a href="#"><li>Web Reports</li></a>
            </ul>
          </div>
          <div className="footer-items">
            <h2>Contact Us</h2>
            <div className="border" />
            <div className="social">
              <a href="https://www.facebook.com/travelmania.quiz.3"><img src={fb}  width="42px" height="40px" /></a>
              <a href="https://www.linkedin.com/login"><img src={lin}  width="42px" height="40px" /></a>
              <a href="https://www.instagram.com/travelmaniatravelling/"><img src={ins} width="42px" height="40px" /></a>
              <a href="https://twitter.com/login?lang=en"><img src={tw} width="42px" height="40px" /></a>
              <a href="https://web.whatsapp.com/"><img src={wha} width="42px" height="40px" /></a>
            </div>
          </div>
          <div className="footer-items">
            <h2>Support</h2>
            <div className="border" />
            <div className="social-media">
              <ul>
                <a href="../form/student2_form.html"><li> Aayu Help</li></a>
              </ul>
              <div class="footer-bottom">
            Copyright &copy; Aayu.co   2021. All right reserved.
    </div>
            </div>
          </div>
        </div>
      </div>





    </div>
    </HttpsRedirect>
  );
}

export default App;
