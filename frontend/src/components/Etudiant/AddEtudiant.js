import React, { useState } from "react";
import EtudiantDataService from "../../services/EtudiantService";

const AddEtudiant = () => {
  const initialEtudiantState = {
    id: null,
    nom: "",
    prenom: "",
    email:"",
    password:'',

  };

  const [etudiant, setEtudiant] = useState(initialEtudiantState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setEtudiant({ ...etudiant, [name]: value });
  };

  const saveEtudiant = () => {
    var data = {
      nom: etudiant.nom,
      prenom: etudiant.prenom,
      email: etudiant.email,
      password: etudiant.password
    };

    EtudiantDataService.create(data)
      .then(response => {
        setEtudiant({
          id: response.data.id,
          nom: response.data.nom,
          prenom: response.data.prenom,
          email: response.data.email,
          password: response.data.password
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEtudiant = () => {
    setEtudiant(initialEtudiantState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEtudiant}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="nom">prenom</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              required
              value={etudiant.nom}
              onChange={handleInputChange}
              name="nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="prenom">prenom</label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              required
              value={etudiant.prenom}
              onChange={handleInputChange}
              name="prenom"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
                type="email"
                className="form-control"
                id="email"
                required
                value={etudiant.email}
                onChange={handleInputChange}
                name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
                type="password"
                className="form-control"
                id="password"
                required
                value={etudiant.password}
                onChange={handleInputChange}
                name="password"
            />
          </div>




          <button onClick={saveEtudiant} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEtudiant;
