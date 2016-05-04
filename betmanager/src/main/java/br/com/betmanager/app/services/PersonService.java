package br.com.betmanager.app.services;

import br.com.betmanager.app.models.Person;
import br.com.betmanager.app.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Transactional(readOnly = true)
    public Person get(Long id) {
        return personRepository.findById(id);
    }

    @Transactional(readOnly = true)
    public List<Person> list() {
        return personRepository.findAll();
    }

    @Transactional
    public void deleteById(Long id) {
        personRepository.deleteById(id);
    }

    @Transactional
    public Person saveAndFlush(Person person) {
        return personRepository.saveAndFlush(person);
    }
}
