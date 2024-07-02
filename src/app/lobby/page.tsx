"use client";

import React from "react";
import OwnerRoomLabel from "@/components/lobby/ownerRoomLabel";
import MyUser from "@/components/lobby/myUser";
import EachPlayer from "@/components/lobby/eachPlayer";
import EachSetting from "@/components/lobby/eachSetting";
import HeaderLobby from "@/components/lobby/headerLobby";
import { paytone_one } from "@/utilites/font";

interface ILobbyProps {}

const Lobby: React.FunctionComponent<ILobbyProps> = (props) => {
	return (
		<>
			<HeaderLobby />

			<div
				className="px-5
            md:px-32
           
            xl:grid-cols-2 xl:gap-8 
            2xl:grid-cols-3 2xl:gap-y-8
            w-full"
			>
				<div className="flex flex-col justify-around ite sm:flex-col sm:items-center xl:flex-row lg:items-start t gap-x-8 gap-y-16">
					<div className=" grid gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 items-center  w-fit mx-auto ">
						<EachPlayer name="Mickie2K" />
						<EachPlayer name="Mickie2K" />
						<EachPlayer name="Mickie2K" />
						<EachPlayer name="Mickie2K" />
						<EachPlayer name="Mickie2K" />
						<EachPlayer name="Garaiiiiii" />
					</div>

					<div className=" lg:text-lg w-full xl:w-1/3 h-full">
						<div
							className="bg-[#150E18] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] 
            backdrop-blur-sm backdrop-brightness-[100%] min-[350px]:flex-row  rounded-xl p-8   h-auto w-auto"
						>
							<p className="text-center">Settings</p>
							<div className="space-y-3">
								<EachSetting settingName="Room Name" inputType="text" />
								<EachSetting settingName="Max Players" inputType="number" />
								<EachSetting settingName="Time/Turns" inputType="number" />
								<EachSetting settingName="Password" inputType="password" />
							</div>

							<div className="two-button flex flex-row justify-between items-center mt-4">
								<button className="w-[40%] bg-blue-500 text-white rounded-full hover:bg-blue-700 transition p-1">
									Cancel
								</button>
								<button className="w-[40%] bg-blue-500 text-white rounded-full hover:bg-blue-700 transition p-1">
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center absolute bottom-16 flex justify-center w-full ">
				<button className="lg:px-44 lg:py-8 lg:text-3xl font-black italic [background:radial-gradient(50%_50%_at_50%_50%,rgb(255,198.9,0)_0%,rgb(215,134.51,0)_100%)] text-white rounded-full leading-none transition">
					START GAME
				</button>
			</div>
		</>
	);
};

export default Lobby;
