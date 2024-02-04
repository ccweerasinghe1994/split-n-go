import { FC, useEffect, useState } from "react";
import Button from "../Button/Button";
import { IFormSplitBillProps } from "./types";

const FormSplitBill: FC<IFormSplitBillProps> = ({ friend, handleBillUpdate }) => {
    const [totalBill, setTotalBill] = useState<number>(0);
    const [yourExpense, setYourExpense] = useState<number>(0);
    const [friendExpense, setFriendExpense] = useState<number>(0);
    const [whoIsPaying, setWhoIsPaying] = useState<string>("you");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const id = e.target.id;

        if (id === "split") {
            if (Number(value) > totalBill) {
                return;
            }
            setYourExpense(Number(value));
        } else setTotalBill(Number(value));
    }

    useEffect(() => {
        setTotalBill(0);
        setYourExpense(0);
        setFriendExpense(0);
        setWhoIsPaying("you");
    }, [friend?.id]);

    useEffect(() => {
        const friendExpenses = totalBill - yourExpense;
        setFriendExpense(friendExpenses);
    }, [totalBill, yourExpense]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (totalBill === 0 || yourExpense === 0 || friend?.id == undefined) return;
        if (whoIsPaying === "you") {
            handleBillUpdate(friend?.id, friendExpense);
            return;
        }

        handleBillUpdate(friend?.id, -yourExpense);
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setWhoIsPaying(value);
    }

    return (
        <form onSubmit={handleSubmit} className="form-split-bill">
            <h2>Split the Bill with {friend?.name}</h2>

            <label htmlFor="split">💰 Bill Value</label>
            <input onChange={handleChange} value={totalBill} type="number" id="total" name="split" />

            <label htmlFor="split">😊 Your Expenses</label>
            <input value={yourExpense} onChange={handleChange} type="number" id="split" name="split" />

            <label htmlFor="split">🙍‍♂️ {friend?.name}'s expense</label>
            <input value={friendExpense} type="number" id="paying" name="split" disabled />

            <label htmlFor="">💵 Who is paying the bill</label>
            <select value={whoIsPaying} onChange={handleSelect}>
                <option value="you">You</option>
                <option value="friend">{friend?.name}</option>
            </select>

            <Button>Split The Bill</Button>
        </form>
    );
};

export default FormSplitBill;