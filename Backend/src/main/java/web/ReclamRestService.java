package web;



import ejb.ReclamationServiceLocal;
import entity.AdminEntity;
import entity.EtudiantEntity;
import entity.ReclamationEntity;
import entity.TypereclamationEntity;
import jakarta.ejb.EJB;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/")
public class ReclamRestService {
    @EJB
    private ReclamationServiceLocal ir;

    public ReclamRestService() {

    }
 //partie Reclamation
    //ajouter reclamation
    @POST
    @Path("reclamations/create/titre={title}/descr={descr}/reclamationType={reclamationType}/idEtudiant={idEtudiant}")
    @Produces({"application/json"})
    public void AddReclamation(@PathParam("title") String titre, @PathParam("descr") String descr, @PathParam("reclamationType") String type, @PathParam("idEtudiant") int id) {
        ReclamationEntity r = new ReclamationEntity(titre, descr);
        EtudiantEntity e = ir.getEtudiantPerID(id);
        TypereclamationEntity t = ir.getTypePerType(type);
        r.setEtudiantByIdEtudiant(e);
        r.setTypereclamationByIdTypeReclamation(t);
        this.ir.addReclamation(r);
    }

    @GET// lister tous les reclamations
    @Path("reclamations/getAll")
    @Produces({"application/json"})
    public List<ReclamationEntity> getAllReclamation() {
        return this.ir.getAllReclamation();
    }

    @DELETE //supprimer une reclamation
    @Path("reclamations/remove/id={id}")
    @Produces({"application/json"})
    public void DeleteReclamation(@PathParam("id") int id) {
        this.ir.deleteReclamation(id);
    }

    @GET // lister les reclamation d'un etudiant donnee
    @Path("Reclamation/getByEtudiant/id={id}")
    @Produces({"application/json"})
    public List<ReclamationEntity> getReclamationByEtudiant(@PathParam("id") int id) {
        EtudiantEntity e = ir.getEtudiantPerID(id);
        return this.ir.getAllReclamationByEtudiant(e);
    }

    @GET //lister les reclamation d'un type donnee
    @Path("Reclamation/getByType/id={id}")
    @Produces({"application/json"})
    public List<ReclamationEntity> getReclamationPerType(@PathParam("id") int id) {
        return this.ir.getReclamationPerType(id);
    }

    @GET //mettre a jour reclamation
    @Path("Reclamation/update/id={id}/titre={titre}/desc={desc}")
    @Produces({"application/json"})
    public void updateReclamation(@PathParam("id") int id, @PathParam("titre") String titre, @PathParam("desc") String desc) {
        this.ir.updateReclamation(id, titre, desc);
    }
//Partie Etudiant

    @POST //ajouter un etudiant
    @Path("Etudiant/create/email={email}/pass={pass}/nom={nom}/prenom={prenom}")
    @Produces({"application/json"})
    public void AddEtudiant(@PathParam("email") String email, @PathParam("pass") String pass, @PathParam("nom") String nom, @PathParam("prenom") String prenom) {
        EtudiantEntity e = new EtudiantEntity(email, pass, nom, prenom);
        this.ir.addEtudiant(e);
        //ne9sa nsettiw l actif l true fi west l EtudiantEntity
    }


    @GET //lister tous les etudiants
    @Path("Etudiant/getAll")
    @Produces({"application/json"})
    public List<EtudiantEntity> getAllEtudiant() {
        return this.ir.getAllEtudiant();
    }

    @DELETE //supprimer etudiant
    @Path("Etudiant/remove/id={id}")
    @Produces({"application/json"})
    public void DeleteEtudiant(@PathParam("id") int id) {
        this.ir.deleteEtudiant(id);
    }


    @GET //chercher un etudiant par son email
    @Path("Etudiant/getByEmail/email={email}")
    @Produces({"application/json"})
    public EtudiantEntity getEtudiantPerEmail(@PathParam("email") String email) {
        return this.ir.getEtudiantPerEmail(email);
    }

    @POST // activer ou desactive le compte etudiant
    @Path("Etudiant/actif/id={id}")
    public void actifEtudiant(@PathParam("id") int id) {
        this.ir.actifEtudiant(id);
    }

    @POST // desaactiver ou desactive le compte etudiant
    @Path("Etudiant/desactif/id={id}")
    public void desactifEtudiant(@PathParam("id") int id) {
        this.ir.desactifEtudiant(id);
    }

    @PATCH // mettre a jour etudiant
    @Path("Etudiant/update/id={id}/nom={nom}/prenom={prenom}/password={password}/email={email}")
    public void updateEtudiant(@PathParam("id") int id, @PathParam("nom")String nom, @PathParam("prenom")String prenom,@PathParam("password") String password, @PathParam("email") String email) {
        this.ir.updateEtudiant(id ,nom ,prenom,password ,email );
}





    // Partie Admin
    @POST //ajouter un admin
    @Path("Admin/Create/{email}/{pass}")
    @Produces({"application/json"})
    public void AddAdmin(@PathParam("email") String email, @PathParam("pass") String pass ) {
        AdminEntity a = new AdminEntity(email, pass );
        this.ir.addAdmin(a);
    }
    @GET //Lister tous les Admins
    @Path("Admin/getAll")
    @Produces({"application/json"})
    public List<AdminEntity> getAllAdmin() {
        return this.ir.getAllAdmin();
    }
    @DELETE //supprimer un admin
    @Path("Admin/remove/id={id}")
    @Produces({"application/json"})
    public void DeleteAdmin(@PathParam("id")  int id ) {
        this.ir.deleteAdmin(id );
    }

    @GET // chercher un admin par son email
    @Path("Admin/getByEmail/email={email}")
    @Produces({"application/json"})
    public AdminEntity getAdminPerEmail(@PathParam("email")String email){
        return this.ir.getAdminPerEmail(email);
    }




//partie Types Reclamation

    @POST //ajouter un type
    @Path("Typereclamations/create/type={type}")
    @Produces({"application/json"})
    public void AddType(@PathParam("type") String type ) {
        TypereclamationEntity ty = new TypereclamationEntity(type );
        this.ir.addTypeReclamation(ty);
    }
    @GET //lister tous les types
    @Path("Typereclamations/getAll")
    @Produces({"application/json"})
    public List<TypereclamationEntity> getAllType() {
        return this.ir.getAllType();
    }

    @DELETE //supprimer un type
    @Path("Typereclamations/remove/id={id}")
    @Produces({"application/json"})
    public void DeleteType(@PathParam("id") int id) {
        this.ir.deleteTypeReclamation(id);
    }

    @GET //verification de l'existance d'un type
    @Path("Typereclamations/Exist/type={type}")
    @Produces({"application/json"})
    public boolean existeTypeReclalamtion(@PathParam("type")String type){

        return this.ir.existeTypeReclalamtion(type);
    }

    @PATCH //mettre a jour un type reclamation
    @Path("Typereclamations/update/id={id}/type={type}")
    @Produces({"application/json"})
    public void updateTypeReclamation(@PathParam("id")int id,@PathParam("type") String type){
         this.ir.updateTypeReclamation(id,type);
    }


}
