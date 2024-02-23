package com.wchamara.splitngo.controller;

import com.wchamara.splitngo.domain.Friend;
import com.wchamara.splitngo.dto.FriendRegistrationDto;
import com.wchamara.splitngo.service.FriendService;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/friends")
public class FriendController {
    private final FriendService friendService;

    public FriendController(FriendService friendService) {
        this.friendService = friendService;
    }

    @GetMapping
    public List<Friend> getFriendsPagable(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return friendService.getFriends(PageRequest.of(page, size));
    }

    @PostMapping()
    public void addFriend(@RequestBody FriendRegistrationDto friend) {
        friendService.addFriend(friend);
    }
}
