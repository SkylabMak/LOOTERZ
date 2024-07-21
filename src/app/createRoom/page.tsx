"use client"

import ImageCard from "../../image/looterzCard.png";
import TextFill from "@/component/textFill";
import NumberFill from "@/component/fillNumber"
export default function createRoom() {
    return (
        <div className="bg-gradient-to-b from-[#1B131D] to-[#120D17] min-h-screen">
            <div className=" flex justify-between pr-20">
                <button className="bg-black text-left text-lg mt-6 ml-32 p-5 rounded-tl-lg hover:bg-white hover:text-black">
                    Create a Room
                </button>
                <button className="bg-black text-lg mt-6 ml-32 p-5 rounded-br-lg">
                    username
                </button>
            </div>
            <div className="bg-gradient-to-b from-[#1B131D] to-[#120D17] grid grid-cols-2 px-32 ">
                <div className="bg-[#18181B] rounded-lg">
                    <div className="bg-black h-[90px] pl-[64px] flex items-center rounded-t-lg">
                        {/* <p className="text-2xl px-4 h-4">Setting</p> */}
                        <span className ="text-2xl">Settings</span>
                    </div>
                    
                    <div className="">
                        <div className="mt-4 space-y-8 flex flex-col items-center px-4">
                    
                            <TextFill name={"Room name"}/>
                            <NumberFill name={"Players"} Step={"1"} Min={"2"} Max={"6"}/>
                            <NumberFill name={"Time/Turns"} Step={"10"} Min={"30"} Max={"120"}/>
                            <TextFill name={"Password"}/>
                        </div>
                        <div className="py-4 flex justify-end mr-10 space-x-5 w-full pr-4">
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