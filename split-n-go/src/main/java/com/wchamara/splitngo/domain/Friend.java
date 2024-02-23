package com.wchamara.splitngo.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Friend {
    @Id
    @GeneratedValue(
            generator = "friend_id_seq",
            strategy = GenerationType.SEQUENCE
    )
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String image;

    @Column
    private Double balance;

    public Friend(String name, String image) {
        this.name = name;
        this.image = image;
        this.balance = 0.0;
    }
}
