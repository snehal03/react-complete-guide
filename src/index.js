import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore , applyMiddleware , compose , combineReducers } from "redux";
import burgerReducer from "./store/reducers/burgerBuilder";
import orderReducer from "./store/reducers/order";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";

/* import axios from 'axios';

// axios.defaults.baseUrl = 'https://jsonplaceholder.typicode.com/';// set default url
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; 
axios.defaults.headers.post['Content-Type'] = 'aplication/json';


axios.interceptors.request.use(request => {
  // add common functionality to send to request
  return request; // if not returened then request will blocked
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
 // add common functionality after response received
  return response; 
}, error => {
    console.log(error);
    return Promise.reject(error);
});

 */

const rootReducer = combineReducers({
    burgerBuilder: burgerReducer,
    order: orderReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const store = createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
