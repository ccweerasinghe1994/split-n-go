import { IFriend } from "../FriendList/types";

export interface IFormSplitBillProps {
    friend: IFriend | null;
    handleBillUpdate: (friendId: number, yourExpense: number) => void;
}