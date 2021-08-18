import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app">
        <div className="row">
          <div className="col">
            <div id="forecast">
              <div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt=""
                  width="40"
                />
                <div className="weather-forecast-date">Wed</div>
                <div className="weather-forecast-temperatures"></div>
                <span className="weather-forecast-temperature-max">
                  {" "}
                  21° max{" "}
                </span>{" "}
                |
                <span className="weather-forecast-temperature-min">
                  {" "}
                  16° min
                </span>
              </div>
              <br /> <br />
              <div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt=""
                  width="40"
                />
                <div className="weather-forecast-date">Thu</div>
                <div className="weather-forecast-temperatures"></div>
                <span className="weather-forecast-temperature-max">
                  {" "}
                  26° max{" "}
                </span>{" "}
                |
                <span className="weather-forecast-temperature-min">
                  {" "}
                  16° min
                </span>
              </div>
              <br /> <br />
              <div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt=""
                  width="40"
                />
                <div className="weather-forecast-date">Fri</div>
                <div className="weather-forecast-temperatures"></div>
                <span className="weather-forecast-temperature-max">
                  {" "}
                  27° max{" "}
                </span>{" "}
                |
                <span className="weather-forecast-temperature-min">
                  {" "}
                  16° min
                </span>
              </div>
              <br /> <br />
              <div>
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  width="40"
                />
                <div className="weather-forecast-date">Sat</div>
                <div className="weather-forecast-temperatures"></div>
                <span className="weather-forecast-temperature-max">
                  {" "}
                  32° max{" "}
                </span>{" "}
                |
                <span className="weather-forecast-temperature-min">
                  {" "}
                  19° min
                </span>
              </div>
              <br /> <br />
              <div>
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  width="40"
                />
                <div className="weather-forecast-date">Sun</div>
                <div className="weather-forecast-temperatures"></div>
                <span className="weather-forecast-temperature-max">
                  {" "}
                  24° max{" "}
                </span>{" "}
                |
                <span className="weather-forecast-temperature-min">
                  {" "}
                  19° min
                </span>
              </div>
              <br /> <br />
              <div>
                <img
                  src="http://openweathermap.org/img/wn/03d@2x.png"
                  alt=""
                  width="40"
                />
                <div className="weather-forecast-date">Mon</div>
                <div className="weather-forecast-temperatures"></div>
                <span className="weather-forecast-temperature-max">
                  {" "}
                  25° max{" "}
                </span>{" "}
                |
                <span className="weather-forecast-temperature-min">
                  {" "}
                  16° min
                </span>
              </div>
              <br />
            </div>
          </div>

          <div class="col">
            <p id="temperature">16</p>{" "}
            <span className="units">
              <a href="#" id="celsiuslink" className="activeconversion">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheitlink" className="testfcolor">
                °F
              </a>{" "}
            </span>
            <br />
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              width="100"
              id="icon"
            />
            <p id="currentCity">Paris</p>
            <p id="currentDay">
              Wednesday <br /> August 18, 2021, 7:39
            </p>
            <br />
            <span id="description">light intensity drizzle</span>
            <br />
            <span className="corp">
              humidity: <span id="humidity">88</span>%
              <br />
              wind: <span id="wind">0</span>km/h{" "}
            </span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <span id="footer">Open-source code by Laure</span>
            <br />
            <br />
            <div id="github">
              <a href="https://github.com/yoopiyo/reactweek1">
                link to GitHub repository{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
