package br.com.agenda_ai.app.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "`profile`")
public class Profile implements Serializable {
    private static final long serialVersionUID = 6529685098267757690L;

    private Integer id;
    private String name;

    @Id
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
