import React, { Component } from 'react';
import {Title} from './components/Title';
import {Form} from './components/Form';
import  { Router, Route, Switch } from 'react-router'
import './App.css';

const API_ID = "";
const API_KEY = "";

class App extends Component{

  state = {
    recipes: []
  }


getRecipe = async (e) => {
  e.preventDefault();
  const foodToMake = e.target.elements.Food.value;
  const API_CALL = await fetch (`https://api.edamam.com/search?q=${foodToMake}&app_id=${API_ID}&app_key=${API_KEY}`);
  const data = await API_CALL.json();

  if (foodToMake){
  this.setState({
    recipes: data.hits
  })
}else {
  this.setState({
    recipes: []
  })
}


  console.log(this.state.recipes);

}

  render() {
    return(
      <div className="wrapper">
      <div className="main">
      <div className="container">
        <Title />
        <Form getRecipe = {this.getRecipe}/>
        <div className="row">
        {this.state.recipes.map(
          (recipe, i) => {
            return (
              <div key={i} className="recipe col-md-4">
                <span className="calories">Calories : {parseInt(recipe.recipe.calories)}</span> <br/>
                <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
              </div>
            )
          }
        )}
        </div>
    </div>
    </div>
    </div>
    )
  }

}

export default App;
