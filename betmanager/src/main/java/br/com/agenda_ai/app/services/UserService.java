package br.com.agenda_ai.app.services;

import br.com.agenda_ai.app.models.User;
import br.com.agenda_ai.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional(readOnly = true)
    public User get(Long id) {
        return userRepository.findById(id);
    }

    @Transactional(readOnly = true)
    public List<User> list() {
        return userRepository.findAll();
    }

    @Transactional
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Transactional
    public User saveAndFlush(User user) {
        return userRepository.saveAndFlush(user);
    }
}
