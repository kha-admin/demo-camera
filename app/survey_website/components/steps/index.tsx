import React from 'react';

export interface IStep {
    title?: React.ReactNode;
    prefixIcon?: React.ReactNode;
}

export interface IProps {
    steps: Array<IStep>; // required
    current?: number;
    setCurrent?: React.Dispatch<number>;
}

const Steps: React.FC<IProps> = ({ steps, current = 0, setCurrent }) => {
    const handleClick = (index: number): void => {
        if (index > current || !setCurrent) {
            return;
        }

        setCurrent(index);
    };

    return (
        <ul className="steps">
            {steps.map((item, index) => (
                <li
                    key={index}
                    className={`p-2 step ${current >= index ? 'step-primary' : undefined}`}
                    onClick={() => {
                        handleClick(index);
                    }}
                >
                    <div className={`flex flex-row ${item.prefixIcon ? 'space-x-1' : undefined}`}>
                        <div>{item.prefixIcon}</div>

                        <div>{item.title}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Steps;
