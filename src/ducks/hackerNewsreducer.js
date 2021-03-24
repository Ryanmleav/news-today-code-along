import axios from 'axios'
import { createStore } from 'redux'


const initialState = {
  loading: false,
  articles: []
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

export const requestArticles = () => {
  let articles = axios.get('/api/hacker-news')
  .then(res => res.data)
  .catch((err) => console.log(err))
  return {
    type: REQUEST_ARTICLES,
    payload: articles
  }
} 

export default function reducer (state= initialState, action){
  switch (action.type) {
    case REQUEST_ARTICLES + '_PENDING' :
      return {
      ...state,
      loading: false
      }
      case REQUEST_ARTICLES + '_FULFILLED' : 
      return {
        ...state,
        articles: action.payload,
        loading: true
      }
      case REQUEST_ARTICLES + '_REJECTED' :
        return{
          ...state,
          loading: false
        }
        default: return state
  }
  
}