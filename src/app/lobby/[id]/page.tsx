"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import OwnerRoomLabel from "../../../components/lobby/ownerRoomLabel";
import MyUser from "../../../components/lobby/myUser";
import EachPlayer from "../../../components/lobby/eachPlayer";
import EachSetting from "../../../components/lobby/eachSetting";
import Setting from "../../../components/lobby/setting";
import looterCard from "../..utilites/looterzCard.png";

interface ILobbyProps {
  // ownerName : string;
}

const Lobby: React.FunctionComponent<ILobbyProps> = (props) => {
  const [lobby, setLobby] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [usersInRoom, setUesrsInRoom] = useState([]);
  const pathname = usePathname();

  const fetchRoomId = async () => {
    const baseURL = "http://localhost:3000/api";
    const res = await fetch(baseURL + `${pathname}`);
    const datas = await res.json();

    setLobby(datas);
    // setUesrsInRoom((prev) => [...prev]);
    setLoading(false);
    
  };
  
  const renderUsersInRoom = (users: string[]) => {
    return  users.map((username, index) => (
      <EachPlayer key={index} name={username}></EachPlayer>
    ))
  }
  
  // console.log(lobby);
  
  // setUesrsInRoom((prevUser) => [...prevUser]);


  // useEffect(() => {
  //   fetchRoomId();
  // }, []);

  useEffect(() => {
    fetchRoomId();
  }, []);

  if (loading) {
    return <div className="bg-gradient-to-b from-[#1B131D] to-[#120D17]"></div>;
  }

  return (
    <div className="h-screen min-w-screen overflow-y-auto bg-gradient-to-b from-[#1B131D] to-[#120D17]">
      <div className="top-container">
        <div className="flex flex-col justify-around items-center my-5 sm:flex-row sm:space-y-0 space-y-2">
          <OwnerRoomLabel ownerName={lobby.ownerName} />
          <MyUser myName="Mickie2K" />
        </div>
      </div>

      <div className="mid-container mx-4 md:mx-14">
        <div className="flex flex-col justify-around ite sm:flex-col sm:items-center lg:flex-row lg:items-start xl:items-center ">
          <div className=" gap-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ">
          { renderUsersInRoom(lobby.usersInRoom)}
          </div>

          <div className=" lg:text-lg mt-11 lg:mt-0  w-auto sm:w-3/4 lg:w-1/3">
            {/* <div className=" lg:text-lg mt-11 lg:mt-0  w-auto "> */}
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
