"use client";
import OwnerRoomLabel from "@/components/lobby/ownerRoomLabel";
import MyUser from "@/components/lobby/myUser";
import React from "react";
import EachPlayer from "@/components/lobby/eachPlayer";
import Setting from "@/components/lobby/setting";

interface ILobbyProps {}

const Lobby: React.FunctionComponent<ILobbyProps> = (props) => {


  return (
    <>
    {/* <div className="bg-slate-700 min-h-screen min-w-screen overflow-hidden"> */}
    {/* <div className="bg-gradient-to-br from-[#B456BC] to-[#852E8C] min-h-screen min-w-screen overflow-hidden"> */}
    <div className="bg-gradient-to-b from-[#1B131D] to-[#120D17] min-h-screen min-w-screen overflow-hidden">
      <div className="top-container">
        <div className="flex flex-row md:flex-row justify-around items-center my-5">
          <OwnerRoomLabel ownerName={"Kemkai"} />
          <MyUser myName={"Mickie2K"} />
        </div>
      </div>
  
      <div className="mid-container h-auto md:h-[30rem] mx-4 md:mx-14 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="m-4 md:m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-">
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Garaiiiiii" />
          </div>
          <div className="m-4 md:m-10">
            <Setting />
          </div>
        </div>
      </div>
  
      <div className="start-container text-center my-5">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          Start
        </button>
      </div>
    </div>


    
  </>
  
  );
};

export default Lobby;
