import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';


const Api = 'http://localhost:8000/api/contact/';
// const DEFAULT_QUERY = 'redux';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
        };
    }

    componentDidMount() {
        fetch(Api)
            .then(response => response.json())
            .then(hits => {
                this.setState({
                    hits: hits
                });
            })
            .catch(error => console.log(error))
    }

    renderHits() {
        let todoList = [];
        this.state.hits.map(hit => {
            return todoList.push(<li key={hit.id}>{hit.first_name}</li>)
        });

        // let todoList = [];
        // this.state.hits.map(hit => {
        //     let arr = [];
        //     for(let propName in hit){
        //         arr.push(`${propName}:${hit[propName]}`)
        //     }
        //     return todoList.push(<li key={hit.id}>{[...arr] }</li>)
        // });

        return todoList;
    }


    render() {
        return (
            <div>
                <h1>Hits</h1>
                <ul>
                    {this.renderHits()}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;


