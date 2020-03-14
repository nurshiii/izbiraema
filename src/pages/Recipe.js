import React from 'react';
import {useEffect, useState} from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>Calories:{calories}</p>
           
            <h3>Products:</h3>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>   
        </div>
    );
}
const App = () => {

  
  
    const APP_ID = '7e08da89';
    const APP_KEY = "fa0638cc61c0f170f9fd98430f162b7a";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');

    useEffect( () =>{
      getRecipes();
    }, [query]);
    

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    }

    const updateSearch = e => {
      setSearch(e.target.value);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }


  return (
    <div className="App">
      <h1 className="app-title">Recipes </h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Search..." value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients} 
        />
      ))}
      </div>
    </div>
  );
}




export default (Recipe, App);