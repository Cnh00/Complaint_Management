import React, {useEffect, useState} from "react";
import {Routes, Route, Link, Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import ReclamationsList from "./components/Reclamation/ReclamationsList";
import AddTypeReclamation from "./components/TypeReclamation/AddTypeReclamation";

import TypeReclamationsList from "./components/TypeReclamation/TypeReclamationsList";

import EtudiantList from "./components/Etudiant/EtudiantList";
import AdminWel from "./components/Authentificate/AdminWell";
import Login from "./components/Authentificate/Login";





function App() {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticatedadmin");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

// si authentificatedadmin == true  cad c un admin  sinon revient a la page login
  if (!authenticated) {
    return <Navigate replace to="/login" element={<Login/>} />;
  } else {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          A D M I N
        </a>
        <div className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link to={"/etudiantlist"} className="nav-link">
              Liste Etudiants
            </Link>
          </li>



          <li className="nav-item">
            <Link to={"/addtypereclamation"} className="nav-link">
              Ajouter Type
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/typereclamation"} className="nav-link">
              Liste Type Recalmations
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/reclamation"} className="nav-link">
              List Reclamations
            </Link>
          </li>



        </div>
      </nav>


      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<AdminWel/>} />
          <Route path="/reclamation" element={<ReclamationsList/>} />
          <Route path="/etudiantlist" element={<EtudiantList/>} />

          <Route path="/addtypereclamation" element={<AddTypeReclamation/>} />
          <Route path="/typereclamation" element={<TypeReclamationsList/>} />


        </Routes>
      </div>
    </div>
  );}
}

export default App;
