import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Login from "./components/Authentificate/Login";
import AppAdmin from "./AppAdmin";


ReactDOM.render(

  <BrowserRouter>


    <Login/>
   <App />
   <AppAdmin />
  </BrowserRouter>,
  document.getElementById("root")
);
//<App />
//<Routes>
  //  <Route path="/" element={<Recl/>} />
//</Routes>
serviceWorker.unregister();