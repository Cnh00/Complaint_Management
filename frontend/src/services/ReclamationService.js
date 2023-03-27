import http from "../http-common";
import mockdata from "../mocks/data.json";
//lister  tous les Reclamation
const getAll = () => { //done
  return http.get("/reclamations/getAll");
  //console.log(mockdata);
  return mockdata.reclamations;
};

// obtenir une reclamatioon par id
const get = id => {
  return http.get(`/reclamations/get/id=${id}`);
};
// ajouter une reclamation
const create = data => { //done
  return http.post(`/reclamations/create/title=${data.title}/descr=${data.description}/reclamationType=${data.reclamationType}/idEtudiant=${data.idEtudiant}`);
};

//mettre a jour une reclamation
const update = (id, data) => {
  return http.put(`/reclamations/update/${id}`, data);
};
//supprimer une reclamation
const remove = id => {// done
  return http.delete(`/reclamations/remove/${id}`);
};
//supprimer tous les reclamation
const removeAll = () => {
  return http.delete(`/reclamations/removeall`);
};
//obtenir reclamations par titre
const findByTitle =( title) => {
  return http.get(`/reclamations/title=${title}`);
};
//obtenir reclamtions d'un etudiant
const getByEtudiant = etudiant => { // added
  return http.get(`/reclamation/getByEtudiant/idetudiant=${etudiant.id}`);
}

//obtenir le reclamation d'un type
const getByType = type => { // added
  return http.get(`/reclamation/getByType/type=${type}`);
}



const ReclamationDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  getByEtudiant,
  getByType
};

export default ReclamationDataService;
