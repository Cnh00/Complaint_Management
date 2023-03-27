import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import EtudiantDataService from "../../services/EtudiantService";

const Etudiant = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialEtudiantState = {
    id: null,
    nom: "",
    prenom: "",
    email:"",
    password:''
  };
  const [currentEtudiant, setCurrentEtudiant] = useState(initialEtudiantState);
  const [message, setMessage] = useState("");

  const getEtudiant = id => {
    EtudiantDataService.get(id)
      .then(response => {
        setCurrentEtudiant(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
    getEtudiant(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEtudiant({ ...currentEtudiant, [name]: value });
  };

  const updateEtudiant = () => {
    EtudiantDataService.update(currentEtudiant.id, currentEtudiant)
      .then(response => {
        console.log(response.data);
        setMessage("The Etudiant was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteEtudiant = () => {
    EtudiantDataService.remove(currentEtudiant.id)
      .then(response => {
        console.log(response.data);
        navigate("/Etudiants");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentEtudiant ? (
        <div className="edit-form">
          <h4>Etudiant</h4>
          <form>
            <div className="form-group">
              <label htmlFor="nom">nom</label>
              <input
                  type="text"
                className="form-control"
                id="nom"
                name="nom"
                value={currentEtudiant.nom}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">prenom</label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                name="prenom"
                value={currentEtudiant.prenom}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={currentEtudiant.email}
                  onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">password</label>
              <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  value={currentEtudiant.password}
                  onChange={handleInputChange}
              />
            </div>
          </form>
          <button className="badge badge-danger mr-2" onClick={deleteEtudiant}>
            Delete
          </button>
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateEtudiant}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Etudiant...</p>
        </div>
      )}
    </div>
  );
};

export default Etudiant;
