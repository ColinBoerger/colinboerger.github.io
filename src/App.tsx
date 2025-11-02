import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import * as https from "https";
import "./App.css";

function App() {
  const [isPlaneOverHouse, setIsPlaneOverHouse] = useState<boolean>();
  const [fortune, setFortune] = useState<string>();
  useEffect(() => {
    fetch(
      "https://opensky-network.org/api/states/all?lamin=49.5244009&lomin=7.7013252&lamax=49.528359&lomax=7.732644"
    )
      .then((resp) => {
        return resp.json();
      })
      .then(function (data) {
        if (data.states === null) {
          setIsPlaneOverHouse(false);
        } else {
          setIsPlaneOverHouse(true);
        }
      });
  });
  const getFortune = () => {
    setFortune("ERROR TRY AGAIN LOSER");
  };
  return (
    <>
      <h1>Welcome to my website</h1> <br />
      <h2>Below are my fun javascript functions</h2> <br />
      <div id="fortune">
        <div id="Fortune">{fortune}</div>
        <button onClick={getFortune}>Please click for a fortune</button>
      </div>
      <div id="planeOverMyHouse">{isPlaneOverHouse ? "YES" : "NO"}</div>
    </>
  );
}

export default App;
