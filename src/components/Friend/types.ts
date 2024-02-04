import { IFriend } from "../FriendList/types";

export interface IfriendProps {
    id: number;
    name: string;
    image: string;
    balance: number;
    selectedFriend: IFriend | null;
    onClick: (friend: IFriend) => void;
}