import http from "../http-common";
import mockdata from "../mocks/data.json";


//verification de l'existance d"un email
const ExistEmail = email => { //added
    return http.get(`/authentication/ExistEmail/email=${email}`);


};

//lister les etudiants
const listEtudiants = () => { //added
    return http.get(`/authentication/listEtudiants`);
};

//authentifier un utilisateur
const authenticateUser = (login,pwd) => { //added
    return http.get(`/authentication/authentifier/login=${login}/pwd=${pwd}`);
};
//enregister un utilisateur
const sauvegarderUtilisateur = user => { //added
    return http.get(`/authentication/authentifier/login=${user.login}/pwd=${user.pwd}`);
};

const AuthDataService = {
    listEtudiants,
    ExistEmail,
    authenticateUser,
    sauvegarderUtilisateur
};

export default AuthDataService;
