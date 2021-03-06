import React, { useState } from "react";

interface IColorPaletteLabel {
    labelTitle: string;
    labelValue: string;
    handleClick: (value: string, idx: string) => void;
    idx: string;
    checked: boolean;
}

const NormalClipboard = () => {
    return (
        <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
        >
            <path
                d="M11 1.5h2.5v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-12H4m.5-1h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
                stroke="currentColor"
            ></path>
        </svg>
    );
};

const CheckedClipboard = () => {
    return (
        <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
        >
            <path
                d="M11 1.5h2.5v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-12H4m1 7l2 2 3.5-4m-6-6h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
                stroke="currentColor"
            ></path>
        </svg>
    );
};

const ColorPaletteLabel: React.FC<IColorPaletteLabel> = ({
    labelTitle,
    labelValue,
    handleClick,
    idx,
    checked,
}) => {
    return (
        <div className="inline-flex flex-row items-center w-full rounded-lg border border-gray-400 text-gray-700 border-gray-300 shadow-sm my-2">
            <div className="inline-block h-full font-medium border-r border-gray-400 min-w-12 flex justify-center items-center">
                {labelTitle}
            </div>
            <div className="box-border px-4 py-2 w-full relative text-center">
                {labelValue}

                {checked ? (
                    <div
                        className="absolute w-full h-full flex justify-center items-center top-0 left-0 opacity-0 text-white transition ease-in-out duration-200 hover:opacity-90 hover:bg-green-600 cursor-pointer"
                        onClick={() => handleClick(labelValue, idx)}
                    >
                        <CheckedClipboard />
                    </div>
                ) : (
                    <div
                        className="absolute w-full h-full flex justify-center items-center top-0 left-0 opacity-0 text-white transition ease-in-out duration-200 hover:opacity-90 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleClick(labelValue, idx)}
                    >
                        <NormalClipboard />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColorPaletteLabel;
