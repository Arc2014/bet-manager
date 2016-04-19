package br.com.agenda_ai.app.services;

import br.com.agenda_ai.app.exception.AuthenticationFailException;
import br.com.agenda_ai.app.models.User;
import com.google.common.base.Preconditions;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private LoggedUserService loggedUserService;

    public User attempt(String login, String password) throws AuthenticationFailException {
        Preconditions.checkArgument(StringUtils.isNotEmpty(login), "Login não pode ser vazio ou nulo.");
        Preconditions.checkArgument(StringUtils.isNotEmpty(password), "Senha não pode ser vazia ou nula.");

        Optional<User> user = loggedUserService.getLoggedUser(login);

        if (user.isPresent() && user.get().isSamePassword(password)) {
            return user.get();
        } else {
            throw new AuthenticationFailException(login);
        }
    }
}
