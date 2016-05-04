package br.com.betmanager.app.repositories;

import br.com.betmanager.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    User saveAndFlush(User user);
    Optional<User> findByLogin(String login);
    List<User> findAll();
    User findById(Long id);
    void deleteById (Long id);
}
