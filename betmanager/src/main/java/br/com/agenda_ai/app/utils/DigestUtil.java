package br.com.agenda_ai.app.utils;

import org.springframework.util.DigestUtils;

import java.time.LocalDateTime;

public final class DigestUtil {

    private DigestUtil() {}

    public static String getRandomToken() {
        return DigestUtils.md5DigestAsHex(LocalDateTime.now().toString().getBytes());
    }

    public static String getPassword(String password) {
        return DigestUtils.md5DigestAsHex(password.getBytes());
    }
}
