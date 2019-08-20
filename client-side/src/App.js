import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
//import axios from "axios";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: '',
            email: '',
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if((prevProps.editableContact && this.props.editableContact && prevProps.editableContact.id !== this.props.editableContact.id) ||
            (!prevProps.editableContact && this.props.editableContact)
        ) {
            this.setState({
                first_name: this.props.editableContact ? this.props.editableContact.first_name : '',
                last_name: this.props.editableContact ? this.props.editableContact.last_name : '',
                email: this.props.editableContact ? this.props.editableContact.email : ''
            })
        }
    }

    submitForm = (event, contact) => {
        event.preventDefault();
        this.props.handleSubmit(contact);

        this.setState({
            first_name: "",
            last_name: '',
            email: '',
        });
    };


    render() {
        return (
            <form>
                <label>FirName</label>
                <input type="text" name="name" value={this.state.first_name}
                       onChange={elem => this.setState({first_name: elem.target.value})}/>

                <label>Last Name</label>
                <input type="text" name="name" value={this.state.last_name}
                       onChange={elem => this.setState({last_name: elem.target.value})}/>

                <label>Email</label>
                <input type="email" name="email" value={this.state.email}
                       onChange={elem => this.setState({email: elem.target.value})}/>

                <input
                    type="submit"
                    onClick={event => {
                        this.submitForm(event, this.state)
                    }}
                    value={ this.props.editID ? 'Update' : 'Create Contact'}/>
            </form>

        );
    }
}

export default ContactForm