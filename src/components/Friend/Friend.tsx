import { FC } from "react";
import Button from "../Button/Button";
import { IFriend } from "../FriendList/types";

const Friend: FC<IFriend> = ({ balance, id, image, name }) => {
    const balanceAbs: number = Math.abs(balance);
    return (
        <li key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            {balance < 0 && <p className="red" >You Owe {name} {balanceAbs}$</p>}
            {balance > 0 && <p className="green" >{name} Owes You {balanceAbs}$</p>}
            {balance === 0 && <p className="blue" >All Settled Up</p>}
            <Button>Select</Button>
        </li>
    );
}

export default Friend;