import axios from 'axios'

export const newsArticles = (listNews) => {
    return {
        type: 'FETCH_NEWS',
        payload: {
            data: listNews
        }
    }
}

export const fetchNewsArticles = () => {
    let url = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=beb2f163c5bb43e38c5ae0e00d06ec8f'
    return (dispatch, getState) => {
        axios.get(url)
        .then( response => {
            console.log(response.data.articles)
            return dispatch(newsArticles(response.data.articles))
        })
        .catch( err => {
            console.log(err)
        })
    }
}