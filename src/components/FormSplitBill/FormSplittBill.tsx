import { FC, useEffect, useState } from "react";
import Button from "../Button/Button";
import { IFormSplitBillProps } from "./types";

const FormSplitBill: FC<IFormSplitBillProps> = ({ friend }) => {
    const [totalBill, setTotalBill] = useState<number>(0);
    const [yourExpense, setYourExpense] = useState<number>(0);
    const [friendExpense, setFriendExpense] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const id = e.target.id;

        if (id === "split") setYourExpense(Number(value));
        else setTotalBill(Number(value));
    }

    useEffect(() => {
        setFriendExpense(totalBill - yourExpense);
    }, [totalBill, yourExpense]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (totalBill === 0 || yourExpense === 0) return;
        console.log("Form Submitted");
    }

    return (
        <form onSubmit={handleSubmit} className="form-split-bill">
            <h2>Split the Bill with {friend?.name}</h2>

            <label htmlFor="split">Bill Value</label>
            <input onChange={handleChange} value={totalBill} type="number" id="total" name="split" />

            <label htmlFor="split">Your Expenses</label>
            <input value={yourExpense} onChange={handleChange} type="number" id="split" name="split" />

            <label htmlFor="split">{friend?.name}'s expense</label>
            <input value={friendExpense} type="number" id="paying" name="split" disabled />

            <label htmlFor="">Who is paying the bill</label>
            <select name="" id="">
                <option value="you">You</option>
                <option value="x">{friend?.name}</option>
            </select>

            <Button>Split The Bill</Button>
        </form>
    );
};

export default FormSplitBill;