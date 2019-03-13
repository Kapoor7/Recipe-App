import React from 'react';

export const Form = props => (
<form onSubmit={props.getRecipe} autocomplete="off">

  <input type="text" name = "Food" placeholder = "What are you hungry for?...." className="col-md-6"/>
  <button>Search </button>
</form>

)
