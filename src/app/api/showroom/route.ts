import { NextApiRequest, NextApiResponse } from 'next';

import { ShowRoom } from "@/typings"
export const testData: ShowRoom[] = [
  {
    roomName: "Mek",
    roomID: "01",
    NumberPlayers: 9,
    currentPlayes: 8,
    time: 8,
    privateStatus: false,
  },
  {
    roomName: "Mek02",
    roomID: "02",
    NumberPlayers: 4,
    currentPlayes: 3,
    time: 3,
    privateStatus: true,
  },
  {
    roomName: "Mek03",
    roomID: "03",
    NumberPlayers: 9,
    currentPlayes: 8,
    time: 8,
    privateStatus: false,
  },
  {
    roomName: "Mek04",
    roomID: "04",
    NumberPlayers: 6,
    currentPlayes: 2,
    time: 3,
    privateStatus: true,
  },
  {
    roomName: "Mek05",
    roomID: "05",
    NumberPlayers: 2,
    currentPlayes: 1,
    time: 2,
    privateStatus: false,
  },
  {
    roomName: "Mek06",
    roomID: "06",
    NumberPlayers: 4,
    currentPlayes: 1,
    time: 4,
    privateStatus: true,
  },
  {
    roomName: "Mek07",
    roomID: "07",
    NumberPlayers: 4,
    currentPlayes: 3,
    time: 3,
    privateStatus: true,
  },
  {
    roomName: "Mek08",
    roomID: "08",
    NumberPlayers: 9,
    currentPlayes: 8,
    time: 8,
    privateStatus: false,
  },
  {
    roomName: "Mek09",
    roomID: "09",
    NumberPlayers: 6,
    currentPlayes: 2,
    time: 3,
    privateStatus: true,
  },
  {
    roomName: "Mek10",
    roomID: "10",
    NumberPlayers: 2,
    currentPlayes: 1,
    time: 2,
    privateStatus: false,
  },
  {
    roomName: "Mek11",
    roomID: "11",
    NumberPlayers: 4,
    currentPlayes: 1,
    time: 4,
    privateStatus: true,
  },
  {
    roomName: "12",
    roomID: "13",
    NumberPlayers: 4,
    currentPlayes: 3,
    time: 3,
    privateStatus: true,
  },
  {
    roomName: "14",
    roomID: "14",
    NumberPlayers: 9,
    currentPlayes: 8,
    time: 8,
    privateStatus: false,
  },
  {
    roomName: "15",
    roomID: "15",
    NumberPlayers: 6,
    currentPlayes: 2,
    time: 3,
    privateStatus: true,
  },
  {
    roomName: "16",
    roomID: "16",
    NumberPlayers: 2,
    currentPlayes: 1,
    time: 2,
    privateStatus: false,
  }
];

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return new Response(JSON.stringify(testData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     res.status(200).json(testData);
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }