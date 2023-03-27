package ejb;



import entity.AdminEntity;
import entity.EtudiantEntity;
import entity.ReclamationEntity;
import entity.TypereclamationEntity;
import jakarta.ejb.Local;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.persistence.criteria.CriteriaUpdate;

import java.util.List;




@Stateless
@PersistenceContext(
        unitName = "reclamation"
)
public class ReclamationServiceLocalImpl implements ReclamationServiceLocal{
    EntityManager em ;

// partie etudiant
    //lister les etudiants
    @Override
    public List<EtudiantEntity> getAllEtudiant() {
        Query req = this.em.createQuery("select c from EtudiantEntity c");
        return req.getResultList();
    }
    //ajouter un etudiant
    @Override
    public void addEtudiant(EtudiantEntity etudiant) {
        this.em.persist(etudiant);

    }
    // recherche d'etudiant par son id
    @Override
    public EtudiantEntity getEtudiantPerID(int id) {
        Query req = this.em.createQuery("select m from EtudiantEntity m where m.id=:x");
        req.setParameter("x", id);
        return (EtudiantEntity) req.getResultList();
    }
    // recherche d'etudiant par son email
    @Override
    public EtudiantEntity getEtudiantPerEmail(String email) {
        Query req = this.em.createQuery("select m from EtudiantEntity m where m.email=:x");
        req.setParameter("x", email);
        return (EtudiantEntity) req.getResultList();
    }

    //suppression d'etudiant par id
    @Override
    public void deleteEtudiant(int  id) {
        EtudiantEntity e=(EtudiantEntity) this.em.find(EtudiantEntity.class,id);
        this.em.remove(e);
    }


    //pour activerle compte d'etudiant
    @Override
    public void actifEtudiant(int id){

        Query req = this.em.createQuery(" UPDATE EtudiantEntity t SET t.actif =:a  WHERE t.id =:x");
        req.setParameter("a", 1);
        req.setParameter("x", id);
        this.em.createQuery((CriteriaUpdate) req).executeUpdate();

    }
    //pour activerle compte d'etudiant
    @Override
    public void desactifEtudiant(int id){

        Query req = this.em.createQuery(" UPDATE EtudiantEntity t SET t.actif =:a  WHERE t.id =:x");
        req.setParameter("a", 0);
        req.setParameter("x", id);
        this.em.createQuery((CriteriaUpdate) req).executeUpdate();

    }
    //mettre a jour etdudiant
    @Override
    public void updateEtudiant(int id , String nom , String prenom, String password , String email ) {
        Query req = this.em.createQuery(" UPDATE EtudiantEntity t SET  t.email=:e,t.password=:p,t.nom=:n,t.prenom=;pr  WHERE t.id =:x");
        req.setParameter("e", email);
        req.setParameter("p", password);
        req.setParameter("n", nom);
        req.setParameter("pr", prenom);
        req.setParameter("x", id);
        this.em.createQuery((CriteriaUpdate) req).executeUpdate();
    }



// partie Admin
    //lister tous les Admins
    @Override
    public List<AdminEntity> getAllAdmin() {
        Query req = this.em.createQuery("select c from AdminEntity c");
        return req.getResultList();
    }
    // ajouter un admin
    @Override
    public void addAdmin(AdminEntity admin) {
        this.em.persist(admin);
    }

    //chercher Admin par son email
    @Override
    public AdminEntity getAdminPerEmail(String email) {
        Query req = this.em.createQuery("select m from AdminEntity m where m.email=:x");
        req.setParameter("x", email);
        return (AdminEntity) req.getResultList();
    }

    //supprimer un admin par son id
    @Override
    public void deleteAdmin(int id) {
        AdminEntity e= this.em.find(AdminEntity.class,id);
        this.em.remove(e);
    }



// Partie Reclamation
    //Lister tous les reclamations
    @Override
    public List<ReclamationEntity> getAllReclamation() {
        Query req = this.em.createQuery("select c from ReclamationEntity c");
        return req.getResultList();
    }

    //lister les Reclamations d'un type donnee
    @Override
    public List<ReclamationEntity> getReclamationPerType(int id) {
        Query req = this.em.createQuery("select m from ReclamationEntity m where m.typereclamationByIdTypeReclamation.id=:x");
        req.setParameter("x", id);
        return req.getResultList();
    }
    //ajouter une reclamation
    @Override
    public void addReclamation(ReclamationEntity reclamation) {
        this.em.persist(reclamation);

    }
    //supprimer une reclmation
    @Override
    public void deleteReclamation(int id) {
        ReclamationEntity e=this.em.find(ReclamationEntity.class,id);
        this.em.remove(e);
    }
    // lister tous les reclamations d'un etudiant
    @Override
    public List<ReclamationEntity> getAllReclamationByEtudiant(EtudiantEntity Etudiant) {

        Query req = this.em.createQuery("select m from ReclamationEntity  m where m.etudiantByIdEtudiant.id=:x");
        req.setParameter("x", Etudiant.getId());
        return  req.getResultList();
    }
    //mettre a jour reclamation
    @Override
    public void updateReclamation(int id, String titre, String desc) {
        Query req = this.em.createQuery(" UPDATE ReclamationEntity t SET t.description=:d,t.titre=:t   WHERE t.id =:x");
        req.setParameter("t", titre);
        req.setParameter("d", desc);

        req.setParameter("x", id);
        this.em.createQuery((CriteriaUpdate) req).executeUpdate();
    }





//Partie Type Reclamation

    //lister tous les Types de reclamation
    @Override
    public List<TypereclamationEntity> getAllType() {
        Query req = this.em.createQuery("select c from TypereclamationEntity c");
        return req.getResultList();

    }

    //ajouter un type
    @Override
    public void addTypeReclamation(TypereclamationEntity type) {
        this.em.persist(type);

    }

    //supprimer un type
    @Override
    public void deleteTypeReclamation(int id) {
        TypereclamationEntity e= this.em.find(TypereclamationEntity.class,id);
        this.em.remove(e);
    }

    // chercher type par son nom
    @Override
    public TypereclamationEntity getTypePerType(String  type ) {
        Query req = this.em.createQuery("select m from TypereclamationEntity  m where m.type=:x");
        req.setParameter("x", type);
        return (TypereclamationEntity) req.getResultList();
    }

    // verificartion de l'existance d'un type
    @Override
    public boolean existeTypeReclalamtion(String type){
        Query req = this.em.createQuery("select m from TypereclamationEntity  m where m.type=:x");
        req.setParameter("x", type);
        if (!req.getResultList().isEmpty())
            return true ;
        else return false;
    }
    //mettre a jour un type Reclamation
    @Override
    public void updateTypeReclamation(int id, String type) {
        Query req = this.em.createQuery(" UPDATE TypereclamationEntity t SET t.type=:t   WHERE t.id =:x");
        req.setParameter("t", type);

        req.setParameter("x", id);
        this.em.createQuery((CriteriaUpdate) req).executeUpdate();
    }







}
