package web;



import ejb.AuthentificationServiceLocal;
import entity.EtudiantEntity;
import entity.UtilisateurEntity;
import jakarta.ejb.EJB;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
// test
@Path("a/")
public class test {



    @GET
    @Path("test")
    @Produces({"application/json"})
    public String existEmail()
    { return "test";

    }


}

