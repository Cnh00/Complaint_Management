import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ReclamationDataService from "../../services/ReclamationService";

const Reclamation = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialReclamationState = {
    id: null,
    title: "",
    description: "",
    reclamationType:""
  };
  const [currentReclamation, setCurrentReclamation] = useState(initialReclamationState);
  const [message, setMessage] = useState("");

  const getReclamation = id => {
    ReclamationDataService.get(id)
      .then(response => {
        setCurrentReclamation(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
    getReclamation(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentReclamation({ ...currentReclamation, [name]: value });
  };

  const updateReclamation = () => {
    ReclamationDataService.update(currentReclamation.id, currentReclamation)
      .then(response => {
        console.log(response.data);
        setMessage("The reclamation was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteReclamation = () => {
    ReclamationDataService.remove(currentReclamation.id)
      .then(response => {
        console.log(response.data);
        navigate("/reclamations");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentReclamation ? (
        <div className="edit-form">
          <h4>Reclamation</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentReclamation.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentReclamation.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Reclamation Type</label>
              <input
                type="text"
                className="form-control"
                id="reclamationType"
                name="reclamationType"
                value={currentReclamation.reclamationType}
                onChange={handleInputChange}
              />
            </div>            
          </form>
          <button className="badge badge-danger mr-2" onClick={deleteReclamation}>
            Delete
          </button>
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateReclamation}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Appuyer sur une Reclamation...</p>
        </div>
      )}
    </div>
  );
};

export default Reclamation;
