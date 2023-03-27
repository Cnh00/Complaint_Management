package entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;



@Entity

public class AdminEntity  extends UtilisateurEntity {

//contructeur
    public AdminEntity( String email, String password ) {
        super( email, password);
    }
//contructeur par defaut
    public AdminEntity() {

    }


    //definition de l'egalite
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AdminEntity that = (AdminEntity) o;

        if (getId() != null ? !getId().equals(that.getId()) : that.getId() != null) return false;
        if (getEmail() != null ? !getEmail().equals(that.getEmail()) : that.getEmail() != null) return false;
        if (getPassword() != null ? !getPassword().equals(that.getPassword()) : that.getPassword() != null) return false;
        if (getActif() != null ? !getActif().equals(that.getActif()) : that.getActif() != null) return false;

        return true;
    }

    //hashage
    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getEmail() != null ? getEmail().hashCode() : 0);
        result = 31 * result + (getPassword() != null ? getPassword().hashCode() : 0);
        result = 31 * result + (getActif() != null ? getActif().hashCode() : 0);
        return result;
    }
}
