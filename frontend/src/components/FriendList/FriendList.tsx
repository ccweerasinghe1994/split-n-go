import { FC } from "react";
import Friend from "../Friend/Friend";
import { IFriend } from "./types";

interface FriendListProps {
    friendList: IFriend[];
    selectedFriend: IFriend | null;
    onClick: (friend: IFriend) => void;
}

const FriendList: FC<FriendListProps> = ({ friendList, selectedFriend, onClick }) => {

    const content = friendList.map((friend) => (
        <Friend onClick={onClick} selectedFriend={selectedFriend} key={friend.id} {...friend} />
    ));

    return (
        <div>
            <h1>Friend List</h1>
            {content}
        </div>
    );
};

export default FriendList;