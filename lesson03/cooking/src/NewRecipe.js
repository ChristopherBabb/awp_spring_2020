import React, {Component} from 'react';
import {Link} from "@reach/router";
import Recipe from "./Recipe";

class NewRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }
    }

    onClick(event) {
        let newRecipe = this.state.sum + parseInt(this.state.input);
        this.setState({
            sum: newSum
        })
    }

    onChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <>
                <h3>Add Recipe</h3>

                <input name={"title"} onChange={
                    (event) => this.onChange(event)} type="text"/>
                <input name={"description"} onChange={
                    (event) => this.onChange(event)} type="text"/>
                <input name={"ingredients"} onChange={
                    (event) => this.onChange(event)} type="text"/>
                <input name={"cooking_time"} onChange={
                    (event) => this.onChange(event)} type="text"/>

                <button onClick={
                    (event) => this.onClick(event)}>Add Recipe</button>
                <p>Title: {this.state.sum}</p>
            </>
        );
    }
}

export default NewRecipe;