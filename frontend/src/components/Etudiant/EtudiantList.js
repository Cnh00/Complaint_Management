import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import EtudiantDataService from "../../services/EtudiantService";

const EtudiantList = () => {

  const [Etudiants, setEtudiants] = useState([]);
  const [currentEtudiant, setCurrentEtudiant] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchNom, setSearchNom] = useState("");


  useEffect(() => {
    retrieveEtudiants();
  }, []);

  const onChangeSearchNom = e => {
    const searchNom = e.target.value;
    setSearchNom(searchNom);
  };

  const retrieveEtudiants = () => {
    EtudiantDataService.getAll()
      .then(response => {
        setEtudiants(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveEtudiants();
    setCurrentEtudiant(null);
    setCurrentIndex(-1);
  };

  const setActiveEtudiant = (Etudiant, index) => {
    setCurrentEtudiant(Etudiant);
    setCurrentIndex(index);
  };

  const removeAllEtudiants = () => {
    EtudiantDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByNom = () => {
    EtudiantDataService.findByNom(searchNom)
      .then(response => {
        setEtudiants(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchNom}
            onChange={onChangeSearchNom}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByNom}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Etudiants List</h4>

        <ul className="list-group">
          {Etudiants &&
              Etudiants.map((Etudiant, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveEtudiant(Etudiant, index)}
                key={index}
              >
                {Etudiant.nom}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllEtudiants}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentEtudiant ? (
          <div>
            <h4>Etudiant</h4>
            <div>
              <label>
                <strong>Nom:</strong>
              </label>{" "}
              {currentEtudiant.nom}
            </div>
            <div>
              <label>
                <strong>prenom:</strong>
              </label>{" "}
              {currentEtudiant.prenom}
            </div>
            <div>
              <label>
                <strong>email:</strong>
              </label>{" "}
              {currentEtudiant.email}
            </div>

            <Link
              to={"/Etudiants/" + currentEtudiant.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Etudiant...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EtudiantList;
