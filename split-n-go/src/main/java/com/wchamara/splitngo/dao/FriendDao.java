package com.wchamara.splitngo.dao;

import com.wchamara.splitngo.domain.Friend;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FriendDao {
    void insertFriend(Friend friend);

    boolean existsFriendWithName(String name);

    List<Friend> selectAllFriends(Pageable pageable);

}
