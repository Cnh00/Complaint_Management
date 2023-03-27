import http from "../http-common";
import mockdata from "../mocks/data.json";

//lister tous les etudiants
const getAll = () => { // done
  return http.get("/Etudiant/getAll");
  //console.log(mockdata);
  return mockdata.reclamations;
};

//obtenir un etudiant par son id
const get = id => {
  return http.get(`/Etudiant/${id}`);
};

//ajouter un etudiant
const create = data => { //done
  return http.post(`/Etudiant/email=${data.email}/pass=${data.pass}/nom=${data.nom}/prenom=${data.prenom}`);
};
//mettre a jour un etudiant
const update = (id, data) => {
  return http.put(`/Etudiant/${id}`, data);
};
//supprimer un etudiant
const remove = id => { //done
  return http.delete(`/Etudiant/remove/id=${id}`);
};
//supprimer tous les etudiants
const removeAll = () => {
  return http.delete(`/Etudiant`);
};

//obtenir un etudiants par email
const getByEmail = email => { // added
  return http.get(`/Etudiant/getByEmail/email=${email}`);

}
const ActiveEtudiant = id => {
  return http.get(`/Etudiant/actif/id=${id}`)
}
const DesactiveEtudiant = id => {
  return http.get(`/Etudiant/desactif/id=${id}`)
}

const EtudiantDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  getByEmail,
  ActiveEtudiant,
  DesactiveEtudiant
};

export default EtudiantDataService;
