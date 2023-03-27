import http from "../http-common";
import mockdata from "../mocks/data.json";

//lister tous les Admins
const getAll = () => {
  return http.get("/Admin/getAll");
  //console.log(mockdata);
  return mockdata.reclamations;
};

//obtenir un admin par son id
const get = id => {
  return http.get(`/Admin/${id}`);
};
//ajouter un admmin
const create = data => { // done
  return http.post(`Admin/create/email=${data.email}/pass=${data.pass}`);
};
//mettre a jour un admin
const update = (id, data) => {
  return http.put(`/Admin/update/${id}`, data);
};
//supprimer un admin
const remove = id => { //done
  return http.delete(`/Admin/remove/id=${id}`);
};
//supprimer tous les admins
const removeAll = () => {
  return http.delete(`/Admin`);
};

//obtenir admin par email
const getByEmail = email => { // added
  return http.get(`/Admin/getByEmail/email=${email}`);

}
const AdminDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,

  getByEmail
};

export default AdminDataService;
