package ejb;


import entity.EtudiantEntity;
import entity.UtilisateurEntity;
import jakarta.ejb.Local;
import java.util.List;
@Local

public interface AuthentificationServiceLocal {

    public UtilisateurEntity authentificate(String login, String pwd);
    boolean existEmail(String login);
    void saveUser(UtilisateurEntity utilisateur);
    List<EtudiantEntity> listerEtudiants();
}
