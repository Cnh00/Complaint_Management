import React, { useState } from "react";
import ReclamationDataService from "../../services/ReclamationService";

const AddReclamation = () => {
  const initialReclamationState = {
    id: null,
    title: "",
    description: "",
    reclamationType:""
  };
  const [reclamation, setReclamation] = useState(initialReclamationState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setReclamation({ ...reclamation, [name]: value });
  };

  const saveReclamation = () => {
    var data = {
      title: reclamation.title,
      description: reclamation.description,
      reclamationType: reclamation.reclamationType
    };

    ReclamationDataService.create(data)
      .then(response => {
        setReclamation({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          reclamationType: response.data.reclamationType
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newReclamation = () => {
    setReclamation(initialReclamationState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newReclamation}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={reclamation.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={reclamation.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Reclamation Type</label>
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="reclamationType">
              <option value="Exams">Exams</option>
              <option value="Absence">Absence</option>
              <option value="Issues">Issues</option>
            </select>
          </div>


          <button onClick={saveReclamation} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddReclamation;
