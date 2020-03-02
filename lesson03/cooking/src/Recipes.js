import React, {Component} from 'react';
import { Link } from "@reach/router";

class Recipes extends Component {
    render() {
        const filter = this.props.filter;

        const mapFunction = elm =>
        <li key={elm.id}>
            <Link to={"/recipe/"+elm.id}>{elm.title}</Link>
        </li>;

        let recipes = this.props.data;
<<<<<<< HEAD

        if (filter){
            recipes = recipes.filter(recipe => recipe.ingredients.includes(filter))
        }

=======
        if (filter) {
            recipes = recipes.filter(recipe => recipe.ingredients.includes(filter));
        }
>>>>>>> 7e3e6c009216a30ef1d50a47e5465d3b09d4851f
        let list = recipes.map(mapFunction);

        return (
            <>
                <h3>List</h3>
                <ul>
                    {list}
                </ul>
            </>
        );
    }
}

export default Recipes;

