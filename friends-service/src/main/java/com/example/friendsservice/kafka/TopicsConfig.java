package com.example.friendsservice.kafka;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.KafkaAdmin;

@Configuration
public class TopicsConfig {
    @Bean
    public KafkaAdmin.NewTopics topics(){
        NewTopic topic = TopicBuilder.name("friend-request-sent").build();
        NewTopic topic1 = TopicBuilder.name("friend-request-accepted").build();
        return new KafkaAdmin.NewTopics(topic,topic1);
    }
}
