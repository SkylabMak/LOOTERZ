"use client";
import React from "react";
import { ShowRoom } from "@/typings";
import { useEffect, useState } from "react";
import { paytone_one } from "@/utilites/font";
import CryptoJS from "crypto-js";
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
import { useRouter } from "next/navigation";
import { apiURL } from "@/utilites/const";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const JoinShowPage = ({ data }: { data: ShowRoom[] }) => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [privateStatusRoom, setPrivateStatusRoom] = useState(true);
  const [psw, setPsw] = useState("");
  const [wrong, setWrong] = useState(false);
  const [roomList, setRoomList] = useState(data);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [pageNumber, setPageNumber] = useState(1);
  const [last, setLast] = useState(false);
  const findPrivateStatus = (roomID: string) => {
    return data.find((room: ShowRoom) => room.privateStatus === true);
  };

  const findNameRoom = (roomID: string) => {
    return data.find((room: ShowRoom) => room.roomID === roomID)?.roomName;
  };

  const pageSize = 20;

  const handleChangePsw = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPsw(event.target.value);
  };

  async function changePage(next: boolean) {
    const newPageNumber = next ? pageNumber + 1 : pageNumber - 1;

    if (newPageNumber < 1) return;

    console.log("Changing to page number:", newPageNumber);

    const response = await fetch(
      `${apiURL}/listRoom/getListRoom/${newPageNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        cache: "no-store",
      }
    );

    if (response.ok) {
      const dataRes = (await response.json()) as ShowRoom[];
      setRoomList(dataRes);
      setPageNumber(newPageNumber);
      // console.log(dataRes)
      if (dataRes.length != pageSize) {
        setLast(true);
      }
    } else {
      console.error("Failed to fetch data for page", newPageNumber);
    }
  }

  const enter = async () => {
    const token = localStorage.getItem("token");

    const hashedPassword = CryptoJS.MD5(psw).toString();
    // console.log("hashedPassword : ", hashedPassword);

    const response = await fetch(`${apiURL}/listRoom/enterRoom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        token: token,
        roomID: id,
        password: hashedPassword,
      }),
    });

    if (!response.ok) {
      setWrong(true);
      setTimeout(() => {
        setWrong(false);
      }, 3000);
      console.log(await response.json());
    } else {
      onClose();
      setPsw("");
      // router.push('/lobby');
    }
  };
  useEffect(() => {
    console.log("init pageNuber : ", pageNumber);
    if (data.length != pageSize) {
      setLast(true);
    }
  }, []);

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
          {/* room */}
          {roomList.map((showroom: ShowRoom) => (
            <RoomCard
              key={showroom.roomID}
              showroom={showroom}
              setId={setId}
              setPrivateRoom={setPrivateStatusRoom}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
      {/* change page */}
      <div className="text-xl w-full flex justify-center items-center gap-4 mb-4">
        <Button
          disabled={pageNumber == 1}
          className={`text-xl ${pageNumber == 1 ? "text-red-800" : ""}`}
          onClick={() => {
            changePage(false);
          }}
        >
          <MdNavigateBefore className={`${"bg-none"}`} />
        </Button>
        {pageNumber}
        <Button
          className={`text-xl ${last ? "text-red-800" : ""}`}
          disabled={last}
          onClick={() => {
            changePage(true);
          }}
        >
          <MdNavigateNext />
        </Button>
      </div>

      {/* popup */}
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
        <ModalContent className=" flex flex-col justify-center items-center text-center">

          <ModalHeader className="flex flex-col gap-2 items-center text-center">
            {privateStatusRoom ? (
              <h1 className={"text-xl font-bold leading-snug " + paytone_one.className}>
                Enter
                <span className="mx-2 underline">{findNameRoom(id)}</span>
                Password
              </h1>
            ) : (
              <h1 className={"text-xl font-bold leading-snug " + paytone_one.className}>
                Are you sure you want to enter
                <span className="mx-2 underline">{findNameRoom(id)} Room</span>?
              </h1>
            )}
          </ModalHeader>


          <ModalBody className="w-full">
            {privateStatusRoom && (
              <input
                id="roomPassword"
                type="password"
                value={psw}
                onChange={handleChangePsw}
                className={`bg-[#18181B] p-4 border-solid border-1 ${wrong ? "border-red-700 " : "border-zinc-700 "
                  }rounded-lg w-full`}
                placeholder="Password"
              />
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              color="default"
              className="flex min:w-[25%] h-fit items-center justify-center gap-2.5 px-8 py-5 relative rounded-full "
              variant="flat"
              onClick={onClose}
            >
              <span className="font-bold italic text-xl drop-shadow text-default-500">
                CANCEL
              </span>
            </Button>
            <Button
              className=" flex min:w-[25%] h-fit items-center justify-center gap-2.5 px-8 py-5 relative rounded-full [background:radial-gradient(50%_50%_at_50%_50%,rgb(255,198.9,0)_0%,rgb(215,134.51,0)_100%)]"
              onClick={enter}
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
