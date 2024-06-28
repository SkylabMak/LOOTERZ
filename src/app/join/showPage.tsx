"use client";
import { ShowRoom } from '@/typings';
import { CiTimer } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import PlayerCount from "./playerCount"
import { useEffect } from 'react';

const JoinShowPage = ({ data }: { data: ShowRoom[] }) => {
    useEffect(() =>{console.log(data)},[])
    return (
        <div className='w-full '>
            <p>
                <span className='text-white	font-bold'>Whereas disregard and contempt for human rights have resulted</span>
            </p>
            <p></p>
            <div className='grid grid-cols-3 gap-8 text-white font-light tracking-wide'>
                {data.map((showroom: ShowRoom) => (
                    <div className='bg-black/[.15] flex items-center p-4 '
                        key={showroom.roomID} >
                        <div className='grow'>
                            <span className='text-xl'>{showroom.roomName}</span >
                            <div className='flex items-center '>
                                <CiTimer />
                                <span className='ml-2 mr-4'> :   {showroom.time}</span>
                                {showroom.privateStatus && <CiLock />}
                            </div>
                            <PlayerCount count={showroom.NumberPlayers} current={showroom.currentPlayes} />

                        </div>
                        <div className='flex-none ml-4 '>
                            <button>Join</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default JoinShowPage;