package ejb;



import entity.EtudiantEntity;
import entity.UtilisateurEntity;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

import java.util.List;

@Stateless
@PersistenceContext(
        unitName = "reclamation"
)
public class AuthentificationServiceLocalImpl implements AuthentificationServiceLocal{

    EntityManager em ;

    @Override
    public UtilisateurEntity authentificate(String login, String pwd) {
        Query req = this.em.createQuery("select m from UtilisateurEntity  m where m.email=:x and m.password=:y");
        req.setParameter("x", login);
        req.setParameter("y", pwd);
        return (UtilisateurEntity) req.getResultList();
    }

    @Override
    public boolean existEmail(String login) {
        Query req = this.em.createQuery("select m from UtilisateurEntity  m where m.email=:x ");
        req.setParameter("x", login);
        return !req.getResultList().isEmpty();

    }

    @Override
    public void saveUser(UtilisateurEntity utilisateur) {
        this.em.persist(utilisateur);
    }

    @Override
    public List<EtudiantEntity> listerEtudiants() {
        Query req = this.em.createQuery("select c from EtudiantEntity c");
        return req.getResultList();
    }
}
