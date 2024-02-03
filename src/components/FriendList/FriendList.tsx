import { FC } from "react";
import Friend from "../Friend/Friend";
import { IFriend } from "./types";

interface FriendListProps {
    friendList: IFriend[];
}

const FriendList: FC<FriendListProps> = ({ friendList }) => {

    const content = friendList.map((friend) => (
        <Friend key={friend.id} {...friend} />
    ));

    return (
        <div>
            <h1>Friend List</h1>
            {content}
        </div>
    );
};

export default FriendList;