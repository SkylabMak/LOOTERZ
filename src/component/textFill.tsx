import * as React from 'react';

interface ITextFillProps {
    name: string;
    value: string;
}

const TextFill: React.FunctionComponent<ITextFillProps> = (props) => {
    const { name, value } = props;
    return (
        <div className=" w-full">
            <p>{name}</p>
            <input style={{background : "#B8B8B8",padding : "20px"}} className="rounded-lg text-white w-full p-[100px]" type={value} placeholder="Placeholder" />
        </div>
    );
};

export default TextFill;
