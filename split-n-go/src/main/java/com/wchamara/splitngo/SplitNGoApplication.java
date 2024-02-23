package com.wchamara.splitngo;

import com.wchamara.splitngo.domain.Friend;
import com.wchamara.splitngo.repository.FriendRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.github.javafaker.Faker;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@SpringBootApplication
public class SplitNGoApplication {

    public static void main(String[] args) {
        SpringApplication.run(SplitNGoApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(FriendRepository friendRepository) {
        return args -> {
            Faker faker = new Faker();
            String name;
            String profilePicture;
            List<Friend> friends = new ArrayList<>();
            for (int i = 0; i < 100; i++) {
                name = faker.name().firstName();
                UUID uuid = UUID.randomUUID();
                profilePicture = "https://i.pravatar.cc/48?u=%s".formatted(uuid.toString());
                friends.add(new Friend(name, profilePicture));
            }
            friendRepository.saveAll(friends);
        };
    }
}
