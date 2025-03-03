
import React, { useState, useEffect } from "react";

import Fitness from "../components/Fitness";

const TrainerProgress = () => {
    const url = "/api/trainer/get-names";
    const [data, setData] = useState([]);
    const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
     }


    useEffect(() => {
    fetchInfo();
     }, []);
    return (
        <div>
        
        <div className="trainer-selection-container">
        <h2 className="trainer-selection-heading">Select your Trainer:</h2>
        <select className="trainer-selection-dropdown">
            <option value="">-- Select Trainer --</option>
            {data.map((trainer, index) => (
            <option key={index} value={trainer.id || trainer.name}>
                {trainer.name}
            </option>
    ))}
  </select>
</div>

        <Fitness />
      </div>
      );
}
 
export default TrainerProgress;