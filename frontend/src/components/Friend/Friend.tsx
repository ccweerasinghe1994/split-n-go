import { FC } from "react";
import Button from "../Button/Button";
import { IFriend } from "../FriendList/types";
import { IfriendProps } from "./types";

const Friend: FC<IfriendProps> = ({ balance, id, image, name, selectedFriend, onClick }) => {

    const buttonText = selectedFriend?.id === id ? "close" : "Select";

    const balanceAbs: number = Math.abs(balance);
    const selected = selectedFriend?.id === id ? "selected" : "";
    const handleClick = () => {
        const friend: IFriend = {
            id,
            name,
            image,
            balance
        }
        onClick(friend);
    };
    return (
        <li className={selected} key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            {balance < 0 && <p className="red" >You Owe {name} {balanceAbs}$</p>}
            {balance > 0 && <p className="green" >{name} Owes You {balanceAbs}$</p>}
            {balance === 0 && <p className="blue" >All Settled Up</p>}
            <Button onClick={handleClick}>{buttonText}</Button>
        </li>
    );
}

export default Friend;