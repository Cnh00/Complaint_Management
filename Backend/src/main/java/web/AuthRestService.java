package web;



import ejb.AuthentificationServiceLocal;
import entity.AdminEntity;
import entity.EtudiantEntity;
import entity.UtilisateurEntity;
import jakarta.ejb.EJB;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/authentication")
public class AuthRestService {

    @EJB
    private AuthentificationServiceLocal ir ;
//securiser l authetification par le principe de token
    @GET
    @Path("authentication/authentifier/{login}/{pwd}")
    @Produces({"application/json"})
    public Response authenticateUser(@FormParam("login") String login,
                                     @FormParam("pwd") String password) {

        try {
            authenticate(login, password);

            String token = issueToken(login);

            return Response.ok(token).build();

        } catch (Exception e) {
            return Response.status(Response.Status.FORBIDDEN).build();
        }
    }

    private void authenticate(String email, String password) throws Exception {
        UtilisateurEntity a = ir.authentificate(email,password);

    }

    private String issueToken(String username) {
        return username+"Token" ;
    }


    //sauvegarder un utilisateur

    @GET
    @Path("authentication/sauvegarderUtilisateur/{login}/{pwd}")
    @Produces({"application/json"})
    public void sauvegarderUtilisateur(@PathParam("login")String login,@PathParam("pwd")String pwd){
        UtilisateurEntity u = new AdminEntity(login,pwd);
        this.ir.saveUser(u);
    }


    //verif de l'existance d'un mail
    @GET
    @Path("authentication/ExistEmail/login={login}")
    @Produces({"application/json"})
    public boolean existEmail(@PathParam("login")String login){
        return this.ir.existEmail(login);
    }

    //lister les etudiants
    @GET
    @Path("authentication/listEtudiants")
    @Produces({"application/json"})
    public List<EtudiantEntity> listerEtudiants(){
        return this.ir.listerEtudiants();
    }


}

