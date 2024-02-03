import { FC, useEffect, useState } from "react";
import Button from "../Button/Button";
import { IFormAddFriend } from "./types";

const FormAddFriend: FC<IFormAddFriend> = ({ onClick }) => {

    const [frienName, setFriendName] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (error) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.id === "image") {
            if (!value.includes("https://")) setError("Image URL must start with 'https://'");
            else setError("");
            setImageUrl(e.target.value);
        } else {
            if (value.length < 3) setError("Name must be at least 3 characters long");
            else {
                setError("");
            };
            setFriendName(e.target.value);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!frienName || !imageUrl) setIsDisabled(true);
        onClick(frienName, imageUrl);
        setFriendName("");
        setImageUrl("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-add-friend">
                <label htmlFor="name">Friend Name</label>
                <input type="text" id="name" value={frienName} onChange={handleChange} />
                <label htmlFor="image" >Image URL</label>
                <input type="text" id="image" onChange={handleChange} value={imageUrl} />
                <Button disabled={isDisabled} type="submit" className="button">Add Friend</Button>
            </form >
            {error && <p className="error">{error}</p>}
        </>
    );
};

export default FormAddFriend;
