import React, { useState } from "react";
import TypeReclamationDataService from "../../services/TypeReclamationService";

const AddTypeReclamation = () => {
  const initialTypeReclamationState = {
    id: null,
    type: "",

  };
  const [typeReclamation, setTypeReclamation] = useState(initialTypeReclamationState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTypeReclamation({ ...typeReclamation, [name]: value });
  };

  const saveTypeReclamation = () => {
    var data = {
      type : typeReclamation.type

    };

    TypeReclamationDataService.create(data)
      .then(response => {
        setTypeReclamation({
          id: response.data.id,
          type: response.data.type,

        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTypeReclamation = () => {
    setTypeReclamation(initialTypeReclamationState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTypeReclamation}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Type Reclamation</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={typeReclamation.type}
              onChange={handleInputChange}
              name="Type"
            />
          </div>



          <button onClick={saveTypeReclamation} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTypeReclamation;
