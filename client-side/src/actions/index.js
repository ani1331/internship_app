import axios from 'axios';
import history from '../history';


export const RECEIVE_ARTICLES = 'GET_ARTICLES';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const REPLACE_ARTICLE = 'REPLACE_ARTICLE';

const apiUrl = 'http://localhost:8000/api/contact';

export const getArticles = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => response.data)
            .then(data => {
                dispatch({type: RECEIVE_ARTICLES, articles: [...data]})
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const addArticle = ({first_name, last_name, email}) => {
    return (dispatch) => {
        return axios.post(apiUrl, {first_name, last_name, email})
            .then(response => {
                let data = response.data;
                dispatch({
                    type: ADD_ARTICLE,
                    payload: {id: data.id, first_name: data.first_name, last_name: data.last_name, email: data.email}
                })
            })
            .then(() => {
                history.push("/contact")
            })
            .catch(error => {
                throw(error)
            });
    };
};

export const getArticle = (id) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/${id}`)
            .then(response => {
                dispatch({type: RECEIVE_ARTICLE, article: response.data});
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const deleteArticle = (id) => {

    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(response => {
                dispatch({type: REMOVE_ARTICLE, payload: {id}})
            })
            .then(() => {
                history.push("/contact")
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const updateArticle = (article) => {
    const articleId = article.id;
    return (dispatch) => {
        return axios.put(`${apiUrl}/${article.id}`, {
            first_name: article.first_name,
            last_name: article.last_name,
            email: article.email
        })
            .then(response => {
                const data = response.data;
                dispatch({
                    type: UPDATE_ARTICLE,
                    payload: {id: data.id, first_name: data.first_name, last_name: data.last_name, email: data.email}
                })
                dispatch({
                    type: REPLACE_ARTICLE,
                    payload: {id: data.id, first_name: data.first_name, last_name: data.last_name, email: data.email}
                })
            })
            .then(() => {
                history.push(`/contact/`)
            })
            .catch(error => {
                throw(error)
            });
    };
};