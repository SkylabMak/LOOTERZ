"use client";

import { ShowRoom } from '@/typings';
import { CiTimer } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import PlayerCount from './playerCount';
import { Dispatch, SetStateAction } from 'react';



const RoomCard = ({ showroom, setId,onOpen }: {
    showroom: ShowRoom,
    setId: Dispatch<SetStateAction<string>>
    onOpen : () => void;
}) => {
    // const minSize = 4;
    const joinRoom = () => {
        setId(showroom.roomID);
        if(showroom.privateStatus === true) {
            onOpen();
        }
    }
    return (
        <div className='bg-black/[.15] flex items-center p-4 '
            key={showroom.roomID} >
            <div className='grow grid grid-rows-3 gap-2'>
                <span className='text-xl'>{showroom.roomName}</span >
                <div className='flex items-center '>
                    <IoPersonOutline />
                    <span className='ml-2 mr-4'> :   {showroom.currentPlayes}/{showroom.NumberPlayers}</span>
                    <CiTimer />
                    <span className='ml-2 mr-4'> :   {showroom.time}</span>
                    {showroom.privateStatus && <CiLock />}
                </div>
                <PlayerCount count={showroom.NumberPlayers} current={showroom.currentPlayes} />

            </div>
            <div className='flex-none ml-4 '>
                <button className='border-solid border-2 border-border p-2 rounded-full'
                    onClick={joinRoom}>
                    Join</button>
            </div>
        </div>
    )
}


export default RoomCard;
