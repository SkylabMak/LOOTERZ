"use client";

import React from "react";
import OwnerRoomLabel from "@/components/lobby/ownerRoomLabel";
import MyUser from "@/components/lobby/myUser";
import EachPlayer from "@/components/lobby/eachPlayer";
import EachSetting from "@/components/lobby/eachSetting";

interface ILobbyProps {}

const Lobby: React.FunctionComponent<ILobbyProps> = (props) => {
  return (
    <div className="h-screen min-w-screen overflow-y-auto bg-gradient-to-b from-[#1B131D] to-[#120D17]">
      <div className="top-container">
        <div className="flex flex-col justify-around items-center my-5 sm:flex-row sm:space-y-0 space-y-2">
          <OwnerRoomLabel ownerName="Kemkai" />
          <MyUser myName="Mickie2K" />
        </div>
      </div>

      <div className="mid-container mx-4 md:mx-14">
        <div className="flex flex-col justify-around sm:flex-col sm:items-center lg:flex-row lg:items-start xl:items-center ">
          <div className=" gap-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Mickie2K" />
            <EachPlayer name="Garaiiiiii" />
          </div>

          <div className=" lg:text-lg mt-11 lg:mt-0">
            <div className="bg-[#150E18] rounded-xl p-4 shadow-lg shadow-gray-500 h-auto w-full">
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

      <div className="text-center my-5">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Lobby;


