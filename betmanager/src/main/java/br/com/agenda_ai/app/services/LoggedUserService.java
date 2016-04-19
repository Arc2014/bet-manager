package br.com.agenda_ai.app.services;

import br.com.agenda_ai.app.models.User;
import br.com.agenda_ai.app.repositories.LoggedUserRepository;
import com.google.common.base.Preconditions;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.util.Optional;


@Service
public class LoggedUserService {

    @Autowired
    private LoggedUserRepository loggedUserRepository;

    public User getLoggedUser(Principal authentication) {
        Authentication auth = (Authentication) authentication;
        return (User) auth.getPrincipal();
    }

    @Transactional(readOnly = true)
    public Optional<User> getLoggedUser(String login) {
        Preconditions.checkArgument(StringUtils.isNotBlank(login), "Login não pode ser nulo/vazio.");

        return loggedUserRepository.findByLogin(login);
    }
}
