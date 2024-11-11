import * as React from "react";

interface IEachPlayerProps {
	name: string;
}

const EachPlayer: React.FunctionComponent<IEachPlayerProps> = (props) => {
	const { name } = props;

	return (
		<div className="flex justify-center items-center">
			<div className="rounded-2xl bg-[#291E2C] w-3/4 sm:w-56 h-48 ">
				<div className="relative w-full h-2/5 bg-white rounded-2xl rounded-b-none bg-opacity-20">
					<img
						className="max-w-[100px]  absolute left-[50%] translate-x-[-50%] top-[-30%]"
						src="/16.svg"
						alt=""
					/>
				</div>
				<div className="flex flex-col justify-between items-center h-3/5 w-full p-3">
					<p className="text-white">{name}</p>
					<div className="w-4/5 bg-gray-500 text-center rounded-2xl mb-1 p-1 cursor-pointer hover:bg-gray-700 transition">
						Waiting
					</div>
				</div>
			</div>
		</div>
	);
};

export default EachPlayer;
