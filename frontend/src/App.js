import React, {useEffect, useState} from "react";
import {Routes, Route, Link, Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddReclamation from "./components/Reclamation/AddReclamation";

import EtudiantWell from "./components/Etudiant/EtudiantWell";
import ReclamationsListEtudiant from "./components/Reclamation/ReclamationsListEtudiant";
import Login from "./components/Authentificate/Login";


function App() {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

//si de localstorage , authentificated == true cad c un etudiant sinon revient a la page login
    if (!authenticated) {
        return <Navigate replace to="/login" element={<Login/>} />;
    } else {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
             E T U D I A N T
          </a>
          <div className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link to={"/reclamationlist"} className="nav-link">
                Liste Reclamations
              </Link>
            </li>



            <li className="nav-item">
              <Link to={"/addreclamation"} className="nav-link">
                Ajouter Reclamation
              </Link>
            </li>






          </div>
        </nav>


        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<EtudiantWell/>} />
            <Route path="/reclamationlist" element={<ReclamationsListEtudiant/>} />


            <Route path="/addreclamation" element={<AddReclamation/>} />



          </Routes>
        </div>
      </div>
  )};
}

export default App;
