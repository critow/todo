import React from "react";

export default ({label, onDeleted, onToggleImportant, onToggleDone, important, done}) => {
    const labelClasses = [
        "ml-5 leading-[35px] cursor-pointer select-none",
        done ? "line-through" : "",
        important ? "font-bold text-[steelblue]" : "",
    ].join(" ");

    return (
        <span className="text-xl">
                <span
                    className={labelClasses}
                    onClick={onToggleDone}>{label}</span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right w-[35px] m-[3px]"
                        onClick={onToggleImportant}>
                <i className="fa fa-exclamation"/>
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right w-[35px] m-[3px]"
                        onClick={onDeleted}>
                 <i className="fa fa-trash-o"/>
                </button>
            </span>
    )
}