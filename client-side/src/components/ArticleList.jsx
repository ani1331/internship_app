import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../stylesheets/App.css';
// import ArticleEdit from './ArticleEdit';
import {getArticles, deleteArticle} from "../actions";

class ArticleList extends Component {
    componentDidMount() {
        this.props.getArticles();
    }

    render() {
        if (this.props.articles.length) {
            return (
                <div>
                    {/*<h4>Articles</h4>*/}
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.articles.map(article => (
                            <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>{article.first_name}</td>
                                <td>{article.last_name}</td>
                                <td>{article.email}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/contact/${article.id}`}>Edit</Link>
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => this.props.deleteArticle(article.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            )
        } else {
            return (<div>No Users</div>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
};


const mapDispatchToProps = {getArticles, deleteArticle};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);