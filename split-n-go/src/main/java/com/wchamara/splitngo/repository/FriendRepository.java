package com.wchamara.splitngo.repository;

import com.wchamara.splitngo.domain.Friend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FriendRepository extends JpaRepository<Friend, Long> {
    boolean existsFriendByName(String name);
}
