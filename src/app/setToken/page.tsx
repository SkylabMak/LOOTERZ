"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { apiURL } from "@/utilites/const";

const SetCookie = () => {
  const getTokenFunc = async () => {
    try {
      const response = await fetch(`${apiURL}/testFunction`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch token");
      }

      const data = await response.json();
      console.log(data);
      const token = data.token;

      if (token) {
        // Store the token in localStorage
        localStorage.setItem("token", token);
        //const token = localStorage.getItem("token");
        console.log("Token stored in localStorage:", token);
      } else {
        console.error("Token not found in response");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Button
      className=" flex w-[231px] h-[54px] items-center justify-center gap-2.5 px-8 py-5 relative rounded-full [background:radial-gradient(50%_50%_at_50%_50%,rgb(255,198.9,0)_0%,rgb(215,134.51,0)_100%)]"
      onPress={getTokenFunc}
    >
      <span className="font-black italic text-xl drop-shadow">SetCookie</span>
    </Button>
  );
};

export default SetCookie;
