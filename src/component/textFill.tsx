import * as React from "react";

interface ITextFillProps {
	name: string;
}

const TextFill: React.FunctionComponent<ITextFillProps> = (props) => {
	const { name } = props;
	// const isNumber: boolean = value === 'number';

	return (
		<div className=" w-full">
			<p>{name}</p>
			<input
				style={{ padding: "10px" }}
				className="rounded-lg text-white bg-[#18181B] border-zinc-700 border-1 w-full p-[100px]"
				type="text"
				placeholder="Placeholder"
			/>{" "}
			{/* cant use (bg, p, h, w) */}
		</div>
	);
};

export default TextFill;

// disabled={isNumber?true:false} min={isNumber?2:''} max={isNumber?6:1}
