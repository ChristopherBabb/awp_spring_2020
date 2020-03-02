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

        let ingredients = recipe.ingredients.map(mapFunction);

        return (
            <>
                <p>{recipe.title}</p>
                <p>{recipe.description}</p>

                <h3>Ingredients</h3>
                <p>{ingredients}</p>

                <p>{"Cooking time: " + recipe.cooking_time + " minutes"}</p>
                <Link to="/">Back</Link>
            </>
        );
    }
}

export default Recipe;

