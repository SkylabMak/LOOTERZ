import * as React from 'react';

interface ITextFillProps {
    name: String;
}

const TextFill: React.FunctionComponent<ITextFillProps> = (props) => {
    const { name } = props;
    return (
        <>
            <p>{name}</p>
            <input className="bg-blue-600 rounded-md text-black" type="text" placeholder="Placeholder" />
        </>
    );
};

export default TextFill;
