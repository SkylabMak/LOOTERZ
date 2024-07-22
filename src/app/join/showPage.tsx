"use client";
import React from "react";
import { ShowRoom } from "@/typings";
import { useEffect, useState } from "react";
import { paytone_one } from "@/utilites/font";
import Header from "@/components/navbar/header";
import RoomCard from "@/components/roomCard/roomCard";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import CreateRoomBtn from "@/components/createRoomBtn";

const JoinShowPage = ({ data }: { data: ShowRoom[] }) => {
	// const [open, setOpen] = useState(false);
	const [id, setId] = useState("");
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	const findNameRoom = (roomID: string) => {
		return data.find((room: ShowRoom) => room.roomID === roomID)?.roomName;
	};

	// useEffect(() => {
	//     console.log(data);
	// }, [data]);

	// useEffect(() => {
	//     console.log( id);
	// }, [ id]);

	return (
		<div className="relative min-h-min pb-[80px]">
			{/* <Header /> */}
			<div className="flex justify-center mb-4 ">
				<div
					className="
            grid text-white font-light tracking-wide
            grid-cols-1 
            gap-2
            px-5
            md:px-32
           
            xl:grid-cols-2 xl:gap-8 
            2xl:grid-cols-3 2xl:gap-y-8
            w-full
            "
				>
					{data.map((showroom: ShowRoom) => (
						<RoomCard
							key={showroom.roomID}
							showroom={showroom}
							setId={setId}
							onOpen={onOpen}
						/>
					))}
				</div>
			</div>

			<Modal
				size="5xl"
				isOpen={isOpen}
				onClose={onClose}
				placement="center"
				backdrop="blur"
				className="modal-backdrop"
				hideCloseButton={true}
				// backdrop="static"
				// shadow="none"
				style={{ backgroundColor: "transparent", boxShadow: "none" }}
			>
				<ModalContent className=" flex flex-col justify-center items-center ">
					<ModalHeader className="flex flex-col gap-1 ">
						<h1 className={"text-xl " + paytone_one.className}>
							Enter "{findNameRoom(id)}" Password
						</h1>
					</ModalHeader>
					<ModalBody className="w-full">
						<input
							id="roomPassword"
							type="password"
							className="bg-[#18181B] p-4 border-solid border-1 border-zinc-700 rounded-lg w-full"
							placeholder="Password"
						/>
					</ModalBody>
					<ModalFooter>
						<Button
							color="default"
							className="flex w-[231px] h-[54px] items-center justify-center gap-2.5 px-8 py-5 relative rounded-full "
							variant="flat"
							onPress={onClose}
						>
							<span className="font-bold italic text-xl drop-shadow text-default-500">
								CANCEL
							</span>
						</Button>
						<Button
							className=" flex w-[231px] h-[54px] items-center justify-center gap-2.5 px-8 py-5 relative rounded-full [background:radial-gradient(50%_50%_at_50%_50%,rgb(255,198.9,0)_0%,rgb(215,134.51,0)_100%)]"
							onPress={onClose}
						>
							<span className="font-black italic text-xl drop-shadow">
								JOIN
							</span>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<CreateRoomBtn />
		</div>
	);
};

export default JoinShowPage;
