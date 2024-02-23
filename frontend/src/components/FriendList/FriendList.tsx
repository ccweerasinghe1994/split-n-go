import { FC } from "react";
import Friend from "../Friend/Friend";
import Pagination from "../pagination/pagination";
import { IFriend } from "./types";

interface FriendListProps {
    friendList: IFriend[];
    selectedFriend: IFriend | null;
    onClick: (friend: IFriend) => void;
    onPagination: (type: string) => void;
}

const FriendList: FC<FriendListProps> = ({ friendList, selectedFriend, onClick, onPagination }) => {

    const content = friendList.map((friend) => (
        <Friend onClick={onClick} selectedFriend={selectedFriend} key={friend.id} {...friend} />
    ));

    return (
        <div>
            <h1>Friend List</h1>
            {content}
            <Pagination onPageChange={onPagination} />
        </div>
    );
};

export default FriendList;