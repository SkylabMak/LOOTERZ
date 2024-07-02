import * as React from "react";

interface IEachPlayerProps {
	name: string;
}

const EachPlayer: React.FunctionComponent<IEachPlayerProps> = (props) => {
	const { name } = props;

	return (
		<div className="flex justify-center items-center 2xl:w-[250px] sm:w-56 ">
			<div className="rounded-2xl bg-[#291E2C] w-full h-full">
				<div className="w-full bg-white rounded-2xl rounded-b-none bg-opacity-20 h-[87px]">
					{/* <img className="bg-auto" src="https://placehold.co/200" alt="" /> */}
				</div>
				<div className="flex flex-col justify-between items-center text-center xl:h-[156px] h-32 py-5  w-full ">
					<p className="text-white  h-auto text-wrap text-base">{name}</p>
					<div className=" bg-gray-500 text-center rounded-2xl w-fit px-16 py-2 cursor-pointer hover:bg-gray-700 transition">
						Waiting
					</div>
				</div>
			</div>
		</div>
	);
};

export default EachPlayer;
