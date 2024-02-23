import { FC } from "react";

interface IPagination {
    currentPage?: number;
    totalPages?: number;
    onPageChange: (type: string) => void;
}

const Pagination: FC<IPagination> = ({ onPageChange }) => {

    return (
        <div>
            <button onClick={() => onPageChange("previous")} type="button">Previous</button>
            <button onClick={() => onPageChange("next")} type="button">Next</button>
        </div>
    );
};

export default Pagination;