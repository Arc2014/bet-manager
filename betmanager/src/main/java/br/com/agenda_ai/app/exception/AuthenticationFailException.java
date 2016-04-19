package br.com.agenda_ai.app.exception;

import org.springframework.security.core.AuthenticationException;

public class AuthenticationFailException extends AuthenticationException {
    private static final String MESSAGE = "Usuario %s nao autenticado.";

    public AuthenticationFailException(String login) {
        super(String.format(MESSAGE, login));
    }
}
