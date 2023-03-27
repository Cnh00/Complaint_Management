import React, { useState, useEffect } from "react";
import ReclamationDataService from "../../services/ReclamationService";
import { Link } from "react-router-dom";
import etudiant from "../Etudiant/Etudiant";


//reclamation pour interface etudiant , il voit tout ses reclamations avec service getByEtudiant
const ReclamationsList = () => {
  const [reclamations, setReclamations] = useState([]);
  const [currentReclamation, setCurrentReclamation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveReclamations();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveReclamations = () => {
    ReclamationDataService.getByEtudiant(etudiant)
      .then(response => {
        setReclamations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveReclamations();
    setCurrentReclamation(null);
    setCurrentIndex(-1);
  };

  const setActiveReclamation = (reclamation, index) => {
    setCurrentReclamation(reclamation);
    setCurrentIndex(index);
  };

  const removeAllReclamations = () => {
    ReclamationDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    ReclamationDataService.findByTitle(searchTitle)
      .then(response => {
        setReclamations(response.data);
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
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Reclamations List</h4>

        <ul className="list-group">
          {reclamations &&
            reclamations.map((reclamation, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveReclamation(reclamation, index)}
                key={index}
              >
                {reclamation.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllReclamations}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentReclamation ? (
          <div>
            <h4>Reclamation</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentReclamation.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentReclamation.description}
            </div>
            <div>
              <label>
                <strong>Reclamation Type:</strong>
              </label>{" "}
              {currentReclamation.reclamationType}
            </div>

            <Link
              to={"/reclamations/" + currentReclamation.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Appuyer sur une Reclamation...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReclamationsList;
