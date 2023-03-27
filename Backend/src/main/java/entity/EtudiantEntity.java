package entity;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

@Entity

public class EtudiantEntity extends UtilisateurEntity {

    //attributs
    private String nom;
    private String prenom;
    private List<ReclamationEntity> reclamationsById;
//contructeur
    public EtudiantEntity(String email, String password, String nom, String prenom) {
        super(email, password);
        this.nom = nom;
        this.prenom = prenom;
    }
//constructeur par defaut
    public EtudiantEntity() {
    }

//accesseurs et mutateurs
    @Basic
    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    @Basic
    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
// egalite
    @Override
    public boolean equals(Object o) {
        return super.equals(o);
    }
//hashage
    @Override
    public int hashCode() {
        return super.hashCode();
    }


    @OneToMany(mappedBy = "etudiantByIdEtudiant")
    public List<ReclamationEntity> getReclamationsById() {
        return reclamationsById;
    }

    public void setReclamationsById(List<ReclamationEntity> reclamationsById) {
        this.reclamationsById = reclamationsById;
    }
}
