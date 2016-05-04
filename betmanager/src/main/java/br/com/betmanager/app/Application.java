package br.com.betmanager.app;

import br.com.betmanager.app.configuration.JettyCustomizer;
import org.dozer.DozerBeanMapper;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableAutoConfiguration
public class Application {
    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
        System.out.println("Started:");
    }

    @Bean(name = "org.dozer.Mapper")
    public DozerBeanMapper dozerBean() {
        return new DozerBeanMapper();
    }

    @Bean
    public DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator() {
        DefaultAdvisorAutoProxyCreator proxyCreator = new DefaultAdvisorAutoProxyCreator();
        proxyCreator.setProxyTargetClass(true);

        return proxyCreator;
    }

    @Bean
    public EmbeddedServletContainerCustomizer servletContainerCustomizer() {
        return new JettyCustomizer();
    }
}
