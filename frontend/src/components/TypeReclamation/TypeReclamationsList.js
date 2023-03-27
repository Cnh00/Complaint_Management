import React, { useState, useEffect } from "react";
import TypeReclamationDataService from "../../services/TypeReclamationService";
import { Link } from "react-router-dom";

const TypeReclamationsList = () => {
  const [Typereclamations, setTypeReclamations] = useState([]);
  const [currentTypeReclamation, setCurrentTypeReclamation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTypeReclamations();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTypeReclamations = () => {
    TypeReclamationDataService.getAll()
      .then(response => {
        setTypeReclamations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTypeReclamations();
    setCurrentTypeReclamation(null);
    setCurrentIndex(-1);
  };

  const setActiveTypeReclamation = (Typereclamation, index) => {
    setCurrentTypeReclamation(Typereclamation);
    setCurrentIndex(index);
  };

  const removeAllTypeReclamations = () => {
    TypeReclamationDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    TypeReclamationDataService.findByTitle(searchTitle)
      .then(response => {
        setTypeReclamations(response.data);
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
        <h4>Type Reclamations List</h4>

        <ul className="list-group">
          {Typereclamations &&
            Typereclamations.map((Typereclamation, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTypeReclamation(Typereclamation, index)}
                key={index}
              >
                {Typereclamation.type}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllTypeReclamations}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentTypeReclamation ? (
          <div>
            <h4>Type Reclamation</h4>
            <div>
              <label>
                <strong>Type:</strong>
              </label>{" "}
              {currentTypeReclamation.type}
            </div>



            <Link
              to={"/Typereclamations/" + currentTypeReclamation.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Appuyer sur un Type de reclamation...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypeReclamationsList;
