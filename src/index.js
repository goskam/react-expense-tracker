import ReactDOM from 'react-dom/client'; //importing ReactDOM obj from react-dom/client library to later use methods of that object

import './index.css';
import App from './App'; //do not use .js extension, App is a component

const root = ReactDOM.createRoot(document.getElementById('root')); //specifying the root of react app, stored as root const
root.render(<App />); // telling what should be rendered in that root
