import React from 'react';
import {connect} from 'react-redux';
import {addArticle} from '../actions';

class ArticleAdd extends React.Component {
    state = {first_name: '', last_name: '', email: ''};

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addArticle(this.state);
    };

    render() {
        return (
            <div>
                <h4>Add User</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="first_name" required value={this.state.first_name} onChange={this.handleChange}
                               className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="last_name" required value={this.state.last_name} onChange={this.handleChange}
                               className="form-control" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" required value={this.state.email} onChange={this.handleChange}
                               className="form-control" placeholder="Email"/>
                    </div>
                    <button type="submit" className="btn btn-dark" >Create</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {addArticle};

export default connect(null, mapDispatchToProps)(ArticleAdd);