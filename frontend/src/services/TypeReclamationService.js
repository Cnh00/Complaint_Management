import http from "../http-common";

// lister tous les types de reclamation
const getAll = () => { //done
   return http.get("/Typereclamations/getAll");
};
//obtenir un type de reclamation par id
const get = id => {
    return http.get(`/Typereclamations/id=${id}`);
};
//ajouter un type de reclamation
const create = data => { //done
    return http.post(`/Typereclamations/create/type=${data.type}`);
};
//mettre a jour un type de reclamation
const update = (id, data) => {
    return http.put(`/Typereclamations/update/${id}`, data);
};
//supprimer un type de reclamation
const remove = id => {//done
    return http.delete(`/Typereclamations/remove/id=${id}`);
};
//supprimer tous les types de reclamation
const removeAll = () => {
    return http.delete(`/Typereclamations`);
};

//verification de l'existance d'un type
const exist = type => {//added
    return http.get(`/Typereclamations/Exist/type=${type}`);
};
const TypeReclamationDataService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    exist
};

export default TypeReclamationDataService;
