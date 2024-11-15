"use client";

import { ShowRoom } from "@/typings";
import { CiTimer } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import PlayerCount from "./playerCount";
import { Dispatch, SetStateAction } from "react";
import { FaPlay } from "react-icons/fa";

const RoomCard = ({
	showroom,
	setId,
	setPrivateRoom,
	onOpen,
}: {
	showroom: ShowRoom;
	setId: Dispatch<SetStateAction<string>>;
	setPrivateRoom: Dispatch<SetStateAction<boolean>>;
	onOpen: () => void;
}) => {
	const joinRoom = () => {
		setId(showroom.roomID);
		setPrivateRoom(showroom.privateStatus)
		onOpen();
	};
	return (
		<div
			className="bg-black/[.15] flex rounded-2xl w-full justify-between p-4 
	min-w-min text-white 
	backdrop-blur-sm backdrop-brightness-[100%] 
	sm:py-5 sm:px-8 items-center border-solid border-2 border-border my-4
	min-[450px]:flex-row min-[450px]:items-start min-[450px]:border-none
	max-w-screen	
"
			key={showroom.roomID}
		>
			<div className="flex flex-col gap-4 m-4 w-full max-w-full">
				{/* Adding break-all to force long text to wrap */}
				<span className="text-xl break-all whitespace-normal">
					{showroom.roomName}afdsdeasfffaefaefffffffaseeeeeeeefaefasbrnabvfaeTTfffff
				</span>
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
			<div className="flex-none m-2 hidden min-[450px]:block">
				<button
					className="border-solid border-2 border-border p-2 rounded-full py-4 px-10 italic font-black text-border"
					onClick={joinRoom}
				>
					JOIN
				</button>
			</div>
			<div className="flex items-center m-2 min-[450px]:hidden justify-center text-3xl">
				<button
					className="border-solid border-2 border-border rounded-full p-4 italic font-black text-border"
					onClick={joinRoom}
				>
					<FaPlay />
				</button>
			</div>
		</div>


	);
};

export default RoomCard;
