"use client"

import ImageCard from "../../image/looterzCard.png";
import TextFill from "@/component/textFill";
export default function createRoom() {
    return (
        <div className="bg-gradient-to-b from-[#1B131D] to-[#120D17]">
            <div className=" flex justify-between pr-20">
                <button className="bg-black text-left text-lg mt-6 ml-32 p-5 rounded-tl-lg hover:bg-white hover:text-black">
                    Create a Room
                </button>
                <button className="bg-black text-lg mt-6 ml-32 p-5 rounded-br-lg">
                    username
                </button>
            </div>
            <div className="bg-gradient-to-b from-[#1B131D] to-[#120D17] grid grid-cols-2 px-32">
                <div className="bg-black border border-red-50 rounded-t-lg">
                    <p className="text-2xl">Setting</p>
                    <div className="">
                        <div className="mt-12 space-y-8 flex flex-col items-center bg-gradient-to-b from-[#1B131D] to-[#120D17] px-4">
                    
                            <TextFill name={"Room name"} value={"text"} />
                            <TextFill name={"Players"} value = {"number"}/>
                            <TextFill name={"Time/Turns"} value = {"number"}/>
                            <TextFill name={"Password"} value = {"text"}/>
                        </div>
                        <div className="py-4 flex justify-end mr-10 space-x-5 bg-gradient-to-b from-[#1B131D] to-[#120D17] w-full pr-4">
                            <button className="bg-black text-gray rounded-3xl border border-gray-500 px-5 py-2">Cancel</button>
                            <button className="bg-Accent1 text-gray rounded-3xl border border-gray-500 px-5 py-2">Create a Room</button>
                        </div>
                    </div>
                </div>
                <img src={ImageCard.src} className="ml-40 pt-20"/>
            </div>
        </div>  
    );
}