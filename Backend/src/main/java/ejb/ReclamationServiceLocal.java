package ejb;



import entity.AdminEntity;
import entity.EtudiantEntity;
import entity.ReclamationEntity;
import entity.TypereclamationEntity;
import jakarta.ejb.Local;
import jakarta.ejb.Stateless;
import jakarta.persistence.PersistenceContext;

import java.util.List;

@Local
public interface ReclamationServiceLocal {


    //Partie Etudiant
    List<EtudiantEntity> getAllEtudiant() ;
    EtudiantEntity getEtudiantPerID(int id ) ;
    void addEtudiant(EtudiantEntity etudiant );
    EtudiantEntity getEtudiantPerEmail(String email); // done
    void deleteEtudiant(int id);
    void actifEtudiant(int id);
    void desactifEtudiant(int id);
    void updateEtudiant(int id , String nom , String prenom, String password , String email  );


    //Partie Admin
    List<AdminEntity> getAllAdmin() ;
    void addAdmin(AdminEntity admin );
    AdminEntity getAdminPerEmail(String email); //done
    void deleteAdmin(int id);




    //Partie Reclamation
    List<ReclamationEntity> getAllReclamation() ;
    List<ReclamationEntity> getReclamationPerType(int id); // done
    void addReclamation(ReclamationEntity reclamation) ;
    void deleteReclamation(int id) ;
    List<ReclamationEntity> getAllReclamationByEtudiant(EtudiantEntity etudiant);
    void updateReclamation(int id , String titre , String desc );



    //Partie TypeReclamation
    List<TypereclamationEntity> getAllType() ;
    TypereclamationEntity getTypePerType(String type  ) ;
    void addTypeReclamation(TypereclamationEntity type);
    void deleteTypeReclamation(int id) ;
    boolean existeTypeReclalamtion(String type); // done
    void updateTypeReclamation(int id , String type);






}
