import React from "react";

import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState<string>("000000000");
  const [name, setName] = useState<string>("Felicia felixa");
  const [date, setDate] = useState<string>("00/00");
  const [cvv, setCvv] = useState<string>("000");
  const [month, setMonth] = useState<string>("00");
  const [year, setYear] = useState<string>("00");

  console.log(number, typeof number);

  return (
    <div className="App">
      <div className="background"></div>
      <div className="card_front">
        <div className="circle_big"></div>
        <div className="circle_small"></div>
        <h1 className="card_number">{number}</h1>
        <div className="card_owner">
          <h3 className="name">{name}</h3>
          <h3 className="date">
            {month} / {year}
          </h3>
        </div>
      </div>
      <div className="card_back">
        <div className="black_line"></div>
        <div className="cvv_container">
          <h2 className="cvv">{cvv}</h2>
        </div>
      </div>
      <input
        type="text"
        placeholder="Cardholder Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Card Number"
        className="number_input"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        maxLength={19}
        value={number}
      />
      <input
        type="number"
        placeholder="month"
        className="month"
        maxLength={2}
        onChange={(e) => setMonth(e.target.value)}
      />

      <input
        type="number"
        placeholder="year"
        className="year"
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="number"
        placeholder="cvv"
        className="cvv"
        maxLength={2}
        onChange={(e) => setCvv(e.target.value)}
      />
    </div>
  );
}

export default App;
