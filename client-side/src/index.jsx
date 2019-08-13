import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';


const API = 'http://localhost:8000/api/contact/?first_name=Ani&last_name=Samsonyan&email=asd@mail.ru&job_title=job1&city=Y&country=Arm';
// const DEFAULT_QUERY = 'redux';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
        };
    }

    componentDidMount() {
        fetch(API )
            .then((response) => {
                return response.json()
            })
            .then(data => this.setState({ hits: data.hits }));
    }

    render() {
        const {hits} = this.state;

        return (
            <ul>
                {hits.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
            </ul>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// export default App;


