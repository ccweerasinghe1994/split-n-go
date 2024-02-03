import Button from "../Button/Button";

const FormSplitBill = () => {
    return (
        <form className="form-split-bill">
            <h2>Split the Bill with x</h2>

            <label htmlFor="split">Bill Value</label>
            <input type="number" id="split" name="split" />
            <label htmlFor="split">Your Expenses</label>
            <input type="number" id="split" name="split" />
            <label htmlFor="split">X's expense</label>
            <input type="number" id="split" name="split" disabled />
            <label htmlFor="">Who is paying the bill</label>
            <select name="" id="">
                <option value="you">You</option>
                <option value="x">X</option>
            </select>
            <Button>Split The Bill</Button>
        </form>
    );
};

export default FormSplitBill;