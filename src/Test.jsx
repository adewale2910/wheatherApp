import axios from "axios";
import React, { useState } from "react";

const Test = () => {
  const [city, setcity] = useState("");
  const [result, setresult] = useState("");
  const [result2, setresult2] = useState("");

  // Api for the wheatherApp
  //  let endpoint = "https://api.openweathermap.org/data/2.5/weather?lat=8.1227&lon=4.243&appid=7ea446b00128ee7ca196e231903e5900"
  //  let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ea446b00128ee7ca196e231903e5900`
  //   let endpoint = `articles?include=author&fields[articles]=title,body&fields[people]=${data}`
  let endpoint = `https://api.openweathermap.org/data/2.5/weather?${"city"}&appid=7ea446b00128ee7ca196e231903e5900`;

  const getData = () => {
    axios
      .get(endpoint)
      .then((response) => {
        // setcity(response.city);
        console.log(response.data);
        setresult2(response.data.main.temp + " " + "℃");
        //  setresult(response.data.main.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="general">
        <div className="form-outline container  ">
          <input
            type="text"
            id="form12"
            onChange={(e) => setcity(e.target.value)}
            value={city}
            className="form-control"
          />
          <label className="form-label" for="form12">
            Check Your current Weather
          </label>
        </div>

        <button onClick={getData} className="get">
          Get Weather{""}
        </button>
        <br />
        <br />

        <div className="container-xxl container-xl container-lg container-md container-sm Display text-white">
          {" "}
          Location:
          {result}
        </div>
        <br />
        <div className="container-xxl container-xl container-lg container-md container-sm Display text-white">
          {" "}
          Location:
          {result2}
        </div>
      </div>
    </>
  );
};

export default Test;
