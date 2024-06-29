"use client";
import React from "react";
import { ShowRoom } from '@/typings';
import { useEffect, useState } from 'react';
import Header from '@/components/navbar/header';
import RoomCard from '@/components/roomCard/roomCard';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from '@nextui-org/button';
import CreateRoomBtn from "@/components/createRoomBtn";


const JoinShowPage = ({ data }: { data: ShowRoom[] }) => {
    // const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const findNameRoom = (roomID: string) => {
        return data.find((room: ShowRoom) => (room.roomID === roomID))?.roomName;
    }

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
                <div className='
            grid text-white font-light tracking-wide w-5/6
            grid-cols-1 gap-3 
            sm:w-9/12	
            md:grid-cols-2 md:gap-8 
            xl:grid-cols-3 xl:gap-8
            '>
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
                className='modal-backdrop'
                hideCloseButton={true}
                // backdrop="static"
                // shadow="none"
                style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
            >
                <ModalContent className='text-white flex flex-col justify-center items-center '>
                    <ModalHeader className="flex flex-col gap-1 ">
                        Enter Password
                    </ModalHeader>
                    <ModalBody>
                        enter password for enter the " {findNameRoom(id)} " room
                        <input id="roomPassword" type="password"
                            className="bg-[#18181B] p-1 border-solid border-2 border-slate-400 rounded-lg" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                            Join
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <CreateRoomBtn />
        </div>
    );
}

export default JoinShowPage;
