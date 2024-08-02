import * as React from "react";

import { CiUser, CiLock } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

interface IOwnerRoomLabelProps {
	lobby: {
		ownerName: string;
		currentPlayer: number;
		maxPlayer: number;
		time: number;
	};
}

const OwnerRoomLabel: React.FunctionComponent<IOwnerRoomLabelProps> = (
	props
) => {
	const { lobby } = props;

	return (
		<div className="text-white flex flex-col sm:flex-row justify-center  items-center sm:justify-between font-bold italic w-full">
			<span className="relative w-fit font-black italic text-white text-xl text-center tracking-[0] leading-[22px] whitespace-nowrap">
				{lobby.ownerName}'s Room
			</span>

			<div className=" h-8 sm:h-auto  mt-2 sm:mt-0 text-white text-base flex gap-4 sm:gap-8 items-center w-fit">
				<div className="flex items-center">
					<CiUser className="block mr-1"></CiUser>
					{`${lobby.currentPlayer}/${lobby.maxPlayer}`}
				</div>
				<div className="flex items-center">
					<IoTimeOutline className="block mr-1"></IoTimeOutline>
					{`${lobby.time} mins`}
				</div>
				<div className="flex items-center">
					<CiLock className="block mr-1"></CiLock>text
				</div>
			</div>
		</div>
	);
};

export default OwnerRoomLabel;
