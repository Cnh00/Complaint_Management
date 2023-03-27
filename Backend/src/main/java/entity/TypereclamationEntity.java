package entity;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity

public class TypereclamationEntity implements Serializable  {
    //attributs
    private Integer id;
    private String type;
    private List<ReclamationEntity> reclamationsById;
//contructeurs
    public TypereclamationEntity(String type) {
        this.type = type;
    }

    public TypereclamationEntity() {

    }
    //accsseur et mutateur
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }



    //egalite
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TypereclamationEntity that = (TypereclamationEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (type != null ? !type.equals(that.type) : that.type != null) return false;

        return true;
    }


    //hashage
    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (type != null ? type.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "typereclamationByIdTypeReclamation")
    public List<ReclamationEntity> getReclamationsById() {
        return reclamationsById;
    }

    public void setReclamationsById(List<ReclamationEntity> reclamationsById) {
        this.reclamationsById = reclamationsById;
    }
}
