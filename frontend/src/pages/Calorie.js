import React, { useState } from "react";

const Calorie = () => {
  const [activity, setActivity] = useState(""); // Stores the user input
  const [caloriesData, setCaloriesData] = useState([]); // Stores API data
  const [error, setError] = useState(null); // Stores error messages
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearch = async () => {
    if (!activity) {
      setError("Please enter an activity.");
      return;
    }

    setError(null); // Reset any previous error
    setLoading(true); // Set loading state

    try {
      const response = await fetch(
        `https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=${activity}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "286bd444edmshefe42fe0f2173d8p1a7bc2jsn105879b46614",
            "x-rapidapi-host": "calories-burned-by-api-ninjas.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch calorie data. Try another activity.");
      }

      const data = await response.json();
      setCaloriesData(data); // Update caloriesData state with fetched data
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="exercise-search-container">
      <h1 className="title1">Calories Burned Finder</h1>

      {/* Input Field */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter activity (e.g., skiing, running)"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="loading-text">Loading...</p>}

      {/* Error Message */}
      {error && <p className="error-text">{error}</p>}

      {/* Calories List */}
      <ul className="calories-list">
        {caloriesData.length > 0 && caloriesData.map((item, index) => (
          <li key={index} className="calories-item">
            <h3>{item.name}</h3>
            <p>
              <strong>Calories per Hour: </strong>{item.calories_per_hour} kcal
            </p>
            <p>
              <strong>Duration: </strong>{item.duration_minutes} minutes
            </p>
            <p>
              <strong>Total Calories: </strong>{item.total_calories} kcal
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calorie;
