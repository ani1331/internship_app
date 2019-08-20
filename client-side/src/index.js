import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import ContactForm from './App.js';
// import DeleteData from './DeleteData';
import axios from "axios";


class App extends Component {
    constructor(props){
        super(props);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            // isAddContact: false,
            // isEditContact: false,
            editID: null,
            contacts: [],
            editableContact: null
        }
    }


    handleFormSubmit = ( contact ) => {
      if(this.state.editID){
          axios.put(`http://localhost:8000/api/contact/${this.state.editID}`,contact)
              .then(() => {this.getContact()})
              .then((result) => {
                  this.setState({
                      editID: null,
                      editableContact: null
                  })
              })
      } else {
          fetch('http://127.0.0.1:8000/api/contact/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(contact)
          })
          // .then((result) => {
          //     this.setState({
          //         response: result,
          //         isAddContact: false,
          //         isEditContact: false
          //     })
              .then(() => {
                  return this.getContact();
              });
      }
    };

    onDeleteHandle = (id) => {
        axios.delete(`http://localhost:8000/api/contact/${id}`)
            .then(()=>{this.getContact()})
            .catch(err => console.log(err));
    };

    editContact =  (contact) => {
        this.setState({
            editID: contact.id,
            editableContact: contact
        });
    };

    componentDidMount() {
        this.getContact()
    }

    getContact = () => {
        const url = 'http://127.0.0.1:8000/api/contact/';
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({contacts: data});
            })
    };

    render() {
        return (
            <React.Fragment>
                <h1>Contact Management</h1>
                <table border='1' width='100%'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.first_name}</td>
                            <td>{contact.last_name}</td>
                            <td>{contact.email}</td>
                            <td>
                                <input type="button" onClick={() => this.editContact(contact)} value="Edit"/>
                                <input type="button" onClick={ () => this.onDeleteHandle(contact.id)} value="Delete"/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <ContactForm
                    handleSubmit={this.handleFormSubmit}
                    editableContact = {this.state.editableContact}
                    editID = {this.state.editID}

                />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

