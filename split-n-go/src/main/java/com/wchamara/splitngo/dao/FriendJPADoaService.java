package com.wchamara.splitngo.dao;

import com.wchamara.splitngo.domain.Friend;
import com.wchamara.splitngo.repository.FriendRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("jpa")
public class FriendJPADoaService implements FriendDao {

    private final FriendRepository friendRepository;

    public FriendJPADoaService(FriendRepository friendRepository) {
        this.friendRepository = friendRepository;
    }

    @Override
    public void insertFriend(Friend friend) {
        friendRepository.save(friend);
    }

    @Override
    public boolean existsFriendWithName(String name) {
        return friendRepository.existsFriendByName(name);
    }

    @Override
    public List<Friend> selectAllFriends(Pageable pageable) {
        return friendRepository.findAll(pageable).getContent();
    }
}
