import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TypeReclamationDataService from "../../services/TypeReclamationService";

const TypeReclamation = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialTypeReclamationState = {
    id: null,
    type: "",

  };
  const [currentTypeReclamation, setCurrentTypeReclamation] = useState(initialTypeReclamationState);
  const [message, setMessage] = useState("");

  const getTypeReclamation = id => {
    TypeReclamationDataService.get(id)
      .then(response => {
        setCurrentTypeReclamation(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
    getTypeReclamation(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTypeReclamation({ ...currentTypeReclamation, [name]: value });
  };

  const updateTypeReclamation = () => {
    TypeReclamationDataService.update(currentTypeReclamation.id, currentTypeReclamation)
      .then(response => {
        console.log(response.data);
        setMessage("The reclamation was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTypeReclamation = () => {
    TypeReclamationDataService.remove(currentTypeReclamation.id)
      .then(response => {
        console.log(response.data);
        navigate("/typereclamations");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentTypeReclamation ? (
        <div className="edit-form">
          <h4>Type Reclamation</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTypeReclamation.title}
                onChange={handleInputChange}
              />
            </div>


          </form>
          <button className="badge badge-danger mr-2" onClick={deleteTypeReclamation}>
            Delete
          </button>
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTypeReclamation}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Appuyer sur un Type Reclamation...</p>
        </div>
      )}
    </div>
  );
};

export default TypeReclamation;
