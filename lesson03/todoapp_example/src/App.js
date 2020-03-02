import React, { Component } from 'react';
import List from "./List";
import AddTask from "./AddTask";



/*
    This template demonstrates the structure of a simple React app that fetches data from a Web API.
    The actual implementation is left as an exercise.
 */




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [] // Empty state
        }
    }

    // This method is automatically invoked when this App is first mounted (rendered).
    componentDidMount() {
        this.getData();
    }

    // Fetching data from the API and putting it in the state
    async getData() {
        const url = 'https://krdo-todo-api.herokuapp.com/api/tasks';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ data: data })
        console.log(data)
    }

    // Posting new data to the API
    async addTask(text) {
        // TODO:
        //  Step 1: Use fetch to POST new data
        const url = 'https://krdo-todo-api.herokuapp.com/api/tasks';
        const response = await fetch(url,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify( {
                text: "Write this example",
                done: false
            })
        });
        const data = await response.json();
        this.getData({})
        //  Step 2: Call 'this.getData()' to update contents in state
    }

    render() {
        return ( 
            <div className = "contents" >
             <div className = "element" >
                <h1> Todo List </h1>
                    {<List data = { this.state.data }></List>}
                    <AddTask addTask={(task) => this.addTask(task)}/>
             </div> 
            </div>
        )
    }
}

export default App;