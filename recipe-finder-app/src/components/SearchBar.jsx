import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (query.trim() === "") {
      setMeals([]);
      return;
    }

    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch meals");
        return res.json();
      })
      .then((data) => {
        setMeals(data.meals || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search meal..."
        className="w-full p-2 border text-black rounded mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal}>
          <div className="border rounded p-2 shadow-sm transition-shadow">  
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-32 h-32 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
            <p className="text-sm text-gray-500">{meal.strCategory}</p>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
