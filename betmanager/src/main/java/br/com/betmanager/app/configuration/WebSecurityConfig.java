package br.com.betmanager.app.configuration;

import br.com.betmanager.app.filter.CsrfHeaderFilter;
import br.com.betmanager.app.security.AuthFailureHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String HEADER_NAME = "X-XSRF-TOKEN";

    @Autowired
    private AuthenticationProvider authenticationProvider;

    @Autowired
    private AuthenticationEntryPoint authenticationEntryPoint;

    @Autowired
    private SimpleUrlLogoutSuccessHandler logoutSuccessHandler;

    @Autowired
    private AuthFailureHandler authFailureHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .formLogin().failureHandler(authFailureHandler)
            .and().exceptionHandling().authenticationEntryPoint(authenticationEntryPoint)
            .and().logout().invalidateHttpSession(true).logoutSuccessHandler(logoutSuccessHandler)
            .and().authenticationProvider(authenticationProvider)
            .authorizeRequests()
            .antMatchers("/index.html", "/app/**", "/", "/login").permitAll()
            .anyRequest().authenticated().and().addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class)
            .csrf().csrfTokenRepository(csrfTokenRepository());
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/assets/**", "/favicon.ico", "/bower_components/**");
    }

    private CsrfTokenRepository csrfTokenRepository() {
        HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
        repository.setHeaderName(HEADER_NAME);

        return repository;
    }
}