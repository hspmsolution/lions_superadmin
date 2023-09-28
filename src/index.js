import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import{createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";

//
import App from './App';



// ----------------------------------------------------------------------
const store=createStore(reducers,compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
   </Provider>
);

// If you want to enable client cache, register instead.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
