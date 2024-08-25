"use client";

import { ShowRoom } from "@/typings";
import { CiTimer } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import PlayerCount from "./playerCount";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from 'next/navigation';

const RoomCard = ({
	showroom,
	setId,
	onOpen,
}: {
	showroom: ShowRoom;
	setId: Dispatch<SetStateAction<string>>;
	onOpen: () => void;
}) => {
	const router = useRouter();
	// const minSize = 4;
	const joinRoom = () => {
		setId(showroom.roomID);
		if (showroom.privateStatus === true) {
			onOpen();
		}
		else{
			const userID = localStorage.getItem("userID")
			router.push('/lobby/2');
		}
	};
	return (
		<div
			className="bg-black/[.15] flex flex-col items-center min-w-min text-white  [-webkit-backdrop-filter:blur(4px)_brightness(100%)] 
            backdrop-blur-sm backdrop-brightness-[100%] min-[350px]:flex-row
            rounded-2xl w-full justify-between p-4 sm:py-5 sm:px-8
        
        "
			key={showroom.roomID}
		>
			<div className="grow grid grid-rows-3 gap-2 m-4 w-fit">
				<span className="text-xl">{showroom.roomName}</span>
				<div className="flex items-center ">
					<IoPersonOutline />
					<span className="ml-2 mr-4">
						{" "}
						: {showroom.currentPlayes}/{showroom.NumberPlayers}
					</span>
					<CiTimer />
					<span className="ml-2 mr-4"> : {showroom.time}</span>
					{showroom.privateStatus && (
						<CiLock
							className="
                    text-rose-700	
                    xl:text-red-400
                    "
						/>
					)}
				</div>

				<PlayerCount
					count={showroom.NumberPlayers}
					current={showroom.currentPlayes}
				/>
			</div>
			<div className="flex-none m-2 hidden sm:block">
				<button
					className="border-solid border-2 border-border p-2 rounded-full py-4 px-10 italic font-black text-border"
					onClick={joinRoom}
				>
					JOIN
				</button>
			</div>
		</div>
	);
};

export default RoomCard;
