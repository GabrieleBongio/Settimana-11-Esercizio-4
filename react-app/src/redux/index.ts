import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { articleObj, state } from "../typeScript/exportTS";

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSuccess = (data: any[]) => ({ type: FETCH_DATA_SUCCESS, payload: data });
const fetchArticleSuccess = (data: articleObj) => ({ type: FETCH_ARTICLE_SUCCESS, payload: data });
const fetchDataFailure = (error: any) => ({ type: FETCH_DATA_FAILURE, payload: error });

export const fetchData = () => {
  return async (dispatch: any) => {
    dispatch(fetchDataRequest());
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/");
      const { results } = await resp.json();
      console.log(results);
      dispatch(fetchDataSuccess(results));
    } catch (error: any) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const fetchArticle = (articleId: string | undefined) => {
  if (typeof articleId === "string") {
    return async (dispatch: any) => {
      dispatch(fetchDataRequest());
      try {
        const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + articleId);
        const data = await resp.json();
        console.log(data);
        dispatch(fetchArticleSuccess(data));
      } catch (error: any) {
        dispatch(fetchDataFailure(error.message));
      }
    };
  }
};

const initialState: state = {
  data: null,
  articleData: null,
  loading: false,
  error: null,
};

const fetchDataReducer = (state: state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null, articleData: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ARTICLE_SUCCESS:
      return { ...state, loading: false, articleData: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const store = createStore(fetchDataReducer, applyMiddleware(thunk));

export default store;
