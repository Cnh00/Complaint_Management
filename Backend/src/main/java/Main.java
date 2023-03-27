
import entity.AdminEntity;

import entity.EtudiantEntity;
import entity.ReclamationEntity;
import jakarta.persistence.*;



public class Main {
    public static void main(String[] args) {



        EntityManagerFactory emf= Persistence.createEntityManagerFactory("reclamation");
        EntityManager em=emf.createEntityManager();
        em.getTransaction().begin();
        AdminEntity e = new AdminEntity("fff","fef");
        EtudiantEntity et = new EtudiantEntity("dffd","fdfdf","sddds","sdsdsdsdsd");
        ReclamationEntity  re = new ReclamationEntity("lll","dfdfdfdf");
        em.persist(e);
        em.persist(et);
        em.persist(re);




        em.getTransaction().commit();
        em.close();
        emf.close();


    }
}
