package com.example.apigateway.config;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;


import java.security.Principal;
import java.util.List;


@Configuration
@EnableWebFluxSecurity
public class Security {
    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) throws Exception {
      http.csrf(c -> c.disable());
      http.cors(corsSpec -> {
          CorsConfiguration corsConfiguration = new CorsConfiguration();
          corsConfiguration.setAllowedHeaders(List.of("*"));
          corsConfiguration.setAllowCredentials(true);
          corsConfiguration.setAllowedOrigins(List.of("http://localhost:5173"));
          corsConfiguration.setAllowedMethods(List.of("GET","POST","PUT","PATCH","OPTIONS","DELETE"));
          UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
          source.registerCorsConfiguration("/**",corsConfiguration);
         corsSpec.configurationSource((CorsConfigurationSource) source);
      });
      http.authorizeExchange(e -> {
          e
                  .pathMatchers("/ws-demo/**")
                  .permitAll()
                  .anyExchange()
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

