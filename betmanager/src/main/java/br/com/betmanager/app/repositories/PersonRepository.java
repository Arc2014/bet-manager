package br.com.betmanager.app.repositories;

import br.com.betmanager.app.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person, String> {
    Person saveAndFlush(Person person);
    List<Person> findAll();
    Person findById(Long id);
    void deleteById(Long id);
}
