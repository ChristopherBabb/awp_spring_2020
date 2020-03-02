import React, {Component} from 'react';
import { Router } from "@reach/router";
import Recipes from './Recipes';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [
<<<<<<< HEAD
                {id: 0, title: "Pizza", description: "Pizza is nice", ingredients: ["tomato"], cooking_time: 30},
                {id: 1, title: "Pizza 2", desc: "This is pizza 2", ingredients: ["tomato"]},
                {id: 2, title: "Pizza 3", desc: "This is pizza 3", ingredients: ["tomato", "cheese"]},
                {id: 3, title: "Pizza 4", desc: "This is pizza 4", ingredients: ["tomato", "cheese"]}
=======
                {id: 0, title: "Pizza 1", desc: "This is pizza 1",
                    ingredients: ["tomato", "garlic"]},
                {id: 1, title: "Pizza 2", desc: "This is pizza 2",
                    ingredients: ["tomato", "onion"]},
                {id: 2, title: "Pizza 3", desc: "This is pizza 3",
                    ingredients: ["tomato", "cheese"]},
                {id: 3, title: "Pizza 4", desc: "This is pizza 4",
                    ingredients: ["tomato", "cheese"]}
>>>>>>> 7e3e6c009216a30ef1d50a47e5465d3b09d4851f
            ]
        }
    }

    getRecipe(id) {
        const findFunction = recipe => recipe.id === parseInt(id);
        return this.state.recipes.find(findFunction);
    }

    addRecipe(id){

}

    render() {
        return (
            <>
                <h1>Cooking Recipes</h1>
                <Router>
                    <Recipes path="/" data={this.state.recipes}></Recipes>
                    <Recipes path="/with/:filter" data={this.state.recipes}></Recipes>
                    <Recipe path="/recipe/:id"
                            getRecipe={(id) => this.getRecipe(id)}></Recipe>
                    <NewRecipe path="/new" submit={(title, desc, min) => this.addRecipe(title, desc, min)}/>
                </Router>
            </>
        );
    }
}

export default App;

