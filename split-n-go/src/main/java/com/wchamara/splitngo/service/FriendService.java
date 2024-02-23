package com.wchamara.splitngo.service;

import com.wchamara.splitngo.dao.FriendDao;
import com.wchamara.splitngo.domain.Friend;
import com.wchamara.splitngo.dto.FriendRegistrationDto;
import com.wchamara.splitngo.exception.DuplicateResourceException;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendService {
    private final FriendDao friendDao;

    public FriendService(FriendDao friendDao) {
        this.friendDao = friendDao;
    }

    public void addFriend(FriendRegistrationDto friend) {

        if (friendDao.existsFriendWithName(friend.name())) {
            throw new DuplicateResourceException("Name already taken");
        }
        String name = friend.name();
        String url = friend.url();

        Friend user = new Friend(name, url);
        friendDao.insertFriend(user);
    }

    public List<Friend> getFriends(Pageable pageable) {
        return friendDao.selectAllFriends(pageable);
    }
}
