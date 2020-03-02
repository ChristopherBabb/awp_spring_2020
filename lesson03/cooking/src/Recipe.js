import React, {Component} from 'react';
import {Link} from "@reach/router";

class Recipe extends Component {
    render() {
        const id = this.props.id;
        const recipe = this.props.getRecipe(id);

        const mapFunction = ingredient =>
            <li>
                <Link to={`/with/${ingredient}`}>{ingredient}</Link>
            </li>;
<<<<<<< HEAD

=======
>>>>>>> 7e3e6c009216a30ef1d50a47e5465d3b09d4851f
        let ingredients = recipe.ingredients.map(mapFunction);

        return (
            <>
                <p>{recipe.title}</p>
<<<<<<< HEAD
                <p>{recipe.description}</p>

                <h3>Ingredients</h3>
                <p>{ingredients}</p>

                <p>{"Cooking time: " + recipe.cooking_time + " minutes"}</p>
=======
                <p>{recipe.desc}</p>

                <h3>Ingredients</h3>
                <ul>
                    {ingredients}
                </ul>

>>>>>>> 7e3e6c009216a30ef1d50a47e5465d3b09d4851f
                <Link to="/">Back</Link>
            </>
        );
    }
}

export default Recipe;

