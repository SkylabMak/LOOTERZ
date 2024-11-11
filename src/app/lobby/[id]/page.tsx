"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import OwnerRoomLabel from "../../../components/lobby/ownerRoomLabel";
import MyUser from "../../../components/lobby/myUser";
import EachPlayer from "../../../components/lobby/eachPlayer";
import EachSetting from "../../../components/lobby/eachSetting";
import Setting from "../../../components/lobby/setting";
import looterCard from "../..utilites/looterzCard.png";
import { AiFillAlert } from "react-icons/ai";
import { IoChevronBack } from "react-icons/io5";
import { paytone_one } from "@/utilites/font";

interface ILobbyProps {
	// ownerName : string;
}

const Lobby: React.FunctionComponent<ILobbyProps> = (props) => {
	const [lobby, setLobby] = useState<any>([]);
	const [loading, setLoading] = useState(true);
	const pathname = usePathname();
	const router = useRouter();

	const fetchRoomId = async () => {
		const baseURL = "http://localhost:3000/api";
		const res = await fetch(baseURL + `${pathname}`);
		const datas = await res.json();

		setLobby(datas);
		setLoading(false);
	};

	const renderUsersInRoom = (users: string[]) => {
		return users.map((username, index) => (
			<EachPlayer key={index} name={username}></EachPlayer>
		));
	};

	useEffect(() => {
		fetchRoomId();
	}, []);

	if (loading) {
		return <div className="bg-gradient-to-b from-[#1B131D] to-[#120D17]"></div>;
	}

	return (
		<>
			{/* <div className="top-container">
				<div className="flex flex-col justify-around items-center my-5 sm:flex-row sm:space-y-0 space-y-2">
					<OwnerRoomLabel lobby={lobby} />
					<MyUser myName="Mickie2K" />
				</div>
			</div> */}
			<header className="flex justify-around  flex-col my-5 sm:flex-row items-center sm:justify-between sm:px-32 sm:py-6  sm:my-0">
				<div className="block sm:inline-flex sm:h-[72px] items-center gap-8 px-10 py-6 relative bg-[#00000040] rounded-[14px_0px_0px_0px] w-3/4 sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-full sm:mr-8">
					<button onClick={router.back}>
						<IoChevronBack size={32} />
					</button>
					<OwnerRoomLabel lobby={lobby} />
				</div>
				<div className="inline-flex h-[72px] items-center gap-4 px-10 py-6 relative bg-[#00000040] rounded-[0px_0px_16px_0px]">
					{/* <div className="relative w-5 h-5 bg-[url(/account.png)] bg-[100%_100%]" /> */}
					<span className="relative w-fit font-extrabold italic text-white text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
						{localStorage.getItem("name") || "Unknown"}
					</span>
				</div>
			</header>
			<div className="min-w-screen overflow-y-visible mt-2">
				<div
					className=" px-5 w-full
            md:px-32 mb-20"
				>
					<div className="flex flex-col justify-between sm:flex-col sm:items-center lg:flex-row lg:items-start  ">
						<div className=" gap-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:w-fit sm:mx-auto mt-6">
							{renderUsersInRoom(lobby.usersInRoom)}
						</div>

						<div className=" lg:text-lg mt-11 lg:mt-0  w-auto sm:w-3/4 lg:w-1/3">
							{/* <div className=" lg:text-lg mt-11 lg:mt-0  w-auto "> */}
							<div
								className="bg-[#00000015] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] 
            backdrop-blur-sm backdrop-brightness-[100%] min-[350px]:flex-row  rounded-xl p-8   h-auto w-auto"
							>
								<p className={paytone_one.className + " text-center text-lg"}>
									Settings
								</p>
								<div className="space-y-3">
									<EachSetting settingName="Room Name" inputType="text" />
									<EachSetting settingName="Max Players" inputType="number" />
									<EachSetting settingName="Time/Turns" inputType="number" />
									<EachSetting settingName="Password" inputType="password" />
								</div>

								<div className="two-button flex flex-row justify-between items-center mt-4 gap-8">
									<button className="w-full bg-transparent border-zinc-700 text-zinc-500 border-1  rounded-full hover:bg-zinc-700 transition p-1">
										Cancel
									</button>
									<button className="w-full bg-Accent1 text-white rounded-full transition p-1 hover:bg-[#601f66]">
										Confirm
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center my-5 ">
					<button className="lg:px-44 lg:py-6 lg:text-3xl font-black italic [background:radial-gradient(50%_50%_at_50%_50%,rgb(255,198.9,0)_0%,rgb(215,134.51,0)_100%)] text-white rounded-full leading-8 transition">
						START GAME
					</button>
				</div>
			</div>
		</>
	);
};

export default Lobby;
