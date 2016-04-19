package br.com.agenda_ai.app.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.jetty.JettyEmbeddedServletContainerFactory;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
public class JettyCustomizer implements EmbeddedServletContainerCustomizer {

    @Value("${session.timeout}")
    private Integer timeout;

    @Override
    public void customize(ConfigurableEmbeddedServletContainer container) {
        JettyEmbeddedServletContainerFactory jetty = (JettyEmbeddedServletContainerFactory) container;
        jetty.setSessionTimeout(timeout, TimeUnit.MINUTES);
    }
}
