package br.com.betmanager.app.security;

import com.google.common.base.Charsets;
import com.google.common.base.Preconditions;
import com.google.common.hash.Hashing;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;


@Service
public class SecurityShaService implements SecurityService {

    @Override
    public String encrypt(String password) {
        Preconditions.checkArgument(StringUtils.isNotBlank(password), "Password não pode ser nulo/vazio.");

        return Hashing.sha1().hashString(password, Charsets.UTF_8).toString();
    }
}
