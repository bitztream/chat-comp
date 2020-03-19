import React from 'react';
import ReactDOM from "react-dom";

import App from "./js/components/App";

require('./styles/style.scss');

const entry = document.getElementById("chat-container");

entry ? ReactDOM.render(<App />, entry) : false;
