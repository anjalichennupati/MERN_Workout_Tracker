import React, { useState } from "react";

const Search = () => {
  const [muscle, setMuscle] = useState(""); // Stores the user input
  const [exercises, setExercises] = useState([]); // Stores API data
  const [error, setError] = useState(null); // Stores error messages
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearch = async () => {
    if (!muscle) {
      setError("Please enter a muscle group.");
      return;
    }

    setError(null); // Reset any previous error
    setLoading(true); // Set loading state

    try {
      const response = await fetch(
        `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "286bd444edmshefe42fe0f2173d8p1a7bc2jsn105879b46614",
            "x-rapidapi-host": "exercises-by-api-ninjas.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exercises. Try another muscle group.");
      }

      const data = await response.json();
      setExercises(data); // Update exercises state with fetched data
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="exercise-search-container">
      <h1 className="title1">Exercise Finder</h1>

      {/* Input Field */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter muscle group (e.g., biceps, chest)"
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
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

      {/* Exercise List */}
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <strong>Name:</strong> {exercise.name} <br />
            <strong>Type:</strong> {exercise.type} <br />
            <strong>Difficulty:</strong> {exercise.difficulty} <br />
            <strong>Instructions:</strong> {exercise.instructions}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
