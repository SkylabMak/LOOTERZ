"use server";

import { ShowRoom } from "@/typings";
import JoinShowPage from "./showPage";
import { cookies } from "next/headers";
import { apiURL } from "@/utilites/const";

async function getData() {
  try {
    const response = await fetch(`${apiURL}/listRoom/getListRoom/1`, {
      // const response = await fetch(`http://localhost:8080/listRoom/getListRoom/1`, {
      // const response = await fetch(`http://127.0.0.1:8080/listRoom/getListRoom/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
    });
    response.headers.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // const cookieStore = cookies();
    // cookieStore.set("testcooke","aasdfa")
    // const userID = cookieStore.get("userID");
    // console.log(userID?.value + " is " + typeof userID?.value);

    if (!response.ok) {
      // console.log("status is " + response.status)
      // throw new Error('Failed to fetch data status is ' +response.status);
    }
    const data: ShowRoom[] = response.ok ? await response.json() : [];
    // console.log(response)

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const JoinPage = async () => {
  const data: ShowRoom[] = await getData();

  return <JoinShowPage data={data} />;
};

export default JoinPage;
