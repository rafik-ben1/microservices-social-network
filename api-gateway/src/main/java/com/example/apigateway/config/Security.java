package com.example.apigateway.config;

import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.web.server.SecurityWebFilterChain;

import java.security.Principal;


@Configuration
@EnableWebFluxSecurity
public class Security {
    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) throws Exception {
      http.csrf(c -> c.disable());
      http.authorizeExchange(e -> {
          e.anyExchange()
                  .authenticated();
      });
        http.oauth2ResourceServer(r -> r.jwt(Customizer.withDefaults()));
        return http.build();
    }
    @Bean
    public GlobalFilter authHeader() {
        return (exchange, chain) -> exchange.getPrincipal()
                .map(Principal::getName)
                .defaultIfEmpty("Default User")
                .map(userName -> {
                    exchange.getRequest().mutate().header("user", userName).build();
                    return exchange;
                })
                .flatMap(chain::filter);
    }

}

