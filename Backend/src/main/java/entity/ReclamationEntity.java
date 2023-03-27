package entity;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity

public class ReclamationEntity  implements Serializable {
    //attributs
    private Integer id;
    private String titre;
    private String description;

    private EtudiantEntity etudiantByIdEtudiant;
    private TypereclamationEntity typereclamationByIdTypeReclamation;
//contructeur
    public ReclamationEntity(String titre, String description ) {
        this.titre = titre;
        this.description = description;
    }
//contructeur par defaut
    public ReclamationEntity() {

    }
//accesseur et mutateurs
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    @Basic

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    //egalite
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReclamationEntity that = (ReclamationEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (titre != null ? !titre.equals(that.titre) : that.titre != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;



        return true;
    }

    //hashage
    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (titre != null ? titre.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);

        return result;
    }



    @ManyToOne

    public EtudiantEntity getEtudiantByIdEtudiant() {
        return etudiantByIdEtudiant;
    }

    public void setEtudiantByIdEtudiant(EtudiantEntity etudiantByIdEtudiant) {
        this.etudiantByIdEtudiant = etudiantByIdEtudiant;
    }

    @ManyToOne
    public TypereclamationEntity getTypereclamationByIdTypeReclamation() {
        return typereclamationByIdTypeReclamation;
    }

    public void setTypereclamationByIdTypeReclamation(TypereclamationEntity typereclamationByIdTypeReclamation) {
        this.typereclamationByIdTypeReclamation = typereclamationByIdTypeReclamation;
    }
}
