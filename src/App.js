import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container" align="center">
        <span>
          <h1> Paris 🥖- Roma 🛶 - Bangkok 🛺 - Madrid 🍇 - Amsterdam 🚲</h1>
        </span>

        <div>
          <center>
            <form>
              <input
                type="text"
                placeholder="name your city"
                autocomplete="off"
                id="inputCity"
              />
              <p className="marge"></p>
              <input type="submit" value="search city" /> <p class="marge"></p>
              <input type="submit" id="geoloc" value="your location" />
            </form>
          </center>
          <Weather />
          <br /> <br />
        </div>
      </div>
    </div>
  );
}
