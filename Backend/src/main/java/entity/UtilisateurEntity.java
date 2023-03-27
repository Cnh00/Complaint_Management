package entity;


import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Inheritance(strategy= InheritanceType.SINGLE_TABLE)
public abstract class UtilisateurEntity implements Serializable {
    public UtilisateurEntity( String email, String password) {

        this.email = email;
        this.password = password;
        this.actif = true;
    }

    private Integer id;
    private String email;
    private String password;
    private Boolean actif;

    public UtilisateurEntity() {

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    @Basic

    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }

    @Basic

    public Boolean getActif() {
        return actif;
    }

    public void setActif(Boolean  actif) {
        this.actif = actif;
    }


    //egualite
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UtilisateurEntity that = (UtilisateurEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (email != null ? !email.equals(that.email) : that.email != null) return false;
        if (password != null ? !password.equals(that.password) : that.password != null) return false;
        if (actif != null ? !actif.equals(that.actif) : that.actif != null) return false;

        return true;
    }


    //hashage
    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (actif != null ? actif.hashCode() : 0);
        return result;
    }
}


