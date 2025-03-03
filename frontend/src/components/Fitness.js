import React, { useState } from "react";

const Fitness = () => {
  const [fitnessData, setFitnessData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    activityLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFitnessData({ ...fitnessData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Fitness Data:", fitnessData);
    alert("Fitness information submitted successfully!");
  };

  return (
    <div>
      <h2 className="fitnessh">Fitness Information</h2>
      <form  className ='fitness' onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={fitnessData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={fitnessData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Height */}
        <div>
          <label>Height (in cm):</label>
          <input
            type="number"
            name="height"
            value={fitnessData.height}
            onChange={handleChange}
            placeholder="Enter your height"
            required
          />
        </div>

        {/* Weight */}
        <div>
          <label>Weight (in kg):</label>
          <input
            type="number"
            name="weight"
            value={fitnessData.weight}
            onChange={handleChange}
            placeholder="Enter your weight"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={fitnessData.gender}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Activity Level */}
        <div>
          <label>Activity Level:</label>
          <select
            name="activityLevel"
            value={fitnessData.activityLevel}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Activity Level --</option>
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="light">Light (light exercise/sports 1-3 days a week)</option>
            <option value="moderate">Moderate (moderate exercise/sports 3-5 days a week)</option>
            <option value="active">Active (hard exercise/sports 6-7 days a week)</option>
            <option value="veryActive">Very Active (very hard exercise, physical job, or training)</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Fitness;
