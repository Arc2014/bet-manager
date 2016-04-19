package br.com.agenda_ai.app.security;

import br.com.agenda_ai.app.exception.AuthenticationFailException;
import br.com.agenda_ai.app.models.User;
import br.com.agenda_ai.app.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class AuthenticationProviderImpl implements AuthenticationProvider {

    @Autowired
    private AuthService authService;

    @Autowired
    private SecurityService securityService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String login = authentication.getName();
        String password = authentication.getCredentials().toString();
        String encryptedPassword = securityService.encrypt(password);

        try {
            User user = authService.attempt(login, encryptedPassword);
            List<GrantedAuthority> grantedAuths = Collections.emptyList();

            return new UsernamePasswordAuthenticationToken(user, encryptedPassword, grantedAuths);
        } catch (AuthenticationFailException e) {
            throw e;
        }
    }

    @Override
    public boolean supports(Class<? extends Object> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
