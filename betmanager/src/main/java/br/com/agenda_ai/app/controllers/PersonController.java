package br.com.agenda_ai.app.controllers;

import br.com.agenda_ai.app.models.Person;
import br.com.agenda_ai.app.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/persons", produces = "application/json")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Person> list() {
        return personService.list();
    }

    @RequestMapping(value = {"{id}"}, method = RequestMethod.GET)
    @ResponseBody
    public Person get(@PathVariable("id") Long id) {
        return personService.get(id);
    }

    @RequestMapping(value = {"{id}"}, method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id) {
        personService.deleteById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Person save(@RequestBody Person person) {
        return personService.saveAndFlush(person);
    }

    @RequestMapping(value = {"{id}"}, method = RequestMethod.PUT)
    public Person update(@RequestBody Person person) {
        return personService.saveAndFlush(person);
    }
}
