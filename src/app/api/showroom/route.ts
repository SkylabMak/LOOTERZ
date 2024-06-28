import { NextApiRequest, NextApiResponse } from 'next';

import { ShowRoom } from "@/typings"
export const testData: ShowRoom[] = [{
    roomName: "Mek",
    roomID: "01",
    NumberPlayers: 9,
    currentPlayes:8,
    time:8,
    privateStatus:false,
},{
    roomName: "Mek02",
    roomID: "02",
    NumberPlayers: 4,
    currentPlayes:3,
    time:3,
    privateStatus:true,
},{
  roomName: "Mek03",
  roomID: "01",
  NumberPlayers: 9,
  currentPlayes:8,
  time:8,
  privateStatus:false,
},{
  roomName: "Mek04",
  roomID: "02",
  NumberPlayers: 4,
  currentPlayes:3,
  time:3,
  privateStatus:true,
}]

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    return new Response(JSON.stringify(testData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // export async function GET(req: NextRequest) {
  //   return NextResponse.json(testData);
  // }