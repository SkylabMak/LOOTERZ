import { NextApiRequest, NextApiResponse } from 'next';
// import { cookies } from 'next/headers'
// import cookie from 'cookie';
import cookie from 'cookie';
import type { RequestHandler } from '@sveltejs/kit';

import { ShowRoom } from "@/typings"
const testData: ShowRoom[] = [
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
// export const GET: RequestHandler = async ({ request }) => {
//   const headers = new Headers();

//   headers.append('Set-Cookie', cookie.serialize('userID', '1sglksedrn;glksnigr', {
//     httpOnly: false,
//     secure: process.env.NODE_ENV === 'production',
//     maxAge: 60 * 60 * 24 * 7, // 1 week
//     sameSite: 'lax', // Allows cross-site cookies
//     path: '/',
//   }));

//   headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
//   headers.append('Access-Control-Allow-Credentials', 'true');
//   headers.append('Content-Type', 'application/json');

//   return new Response(JSON.stringify(testData), {
//     status: 200,
//     headers,
//   });
// };

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // cookies().set('name', '')
  return new Response(JSON.stringify(testData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
      'Access-Control-Allow-Credentials': 'true',
      'Set-Cookie': cookie.serialize('userID', '1sglksedrn;glksnigr', {
        httpOnly: false,
        secure: false, // Set to true in production
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'strict',
        path: '/'
      })
    },
  });
}
// export default async function handler(req: NextApiRequest, res: NextApiResponse<ShowRoom[]>) {

//     // Set a cookie
//     // cookies().set('name', 'lee')
//     // res.setHeader('Content-Type', 'application/json')
//     // res.setHeader('Set-Cookie', cookie.serialize('userID', '123456789', {
//     //   httpOnly: true,
//     //   // secure: process.env.NODE_ENV === 'production', // Set to true in production
//     //   maxAge: 60 * 60 * 24 * 7, // 1 week
//     //   sameSite: 'strict',
//     //   // sameSite="None"
//     // }));

//     // Return the test data as JSON
//     return res.status(200).json(testData);
//     // return new Response(JSON.stringify(testData), {
//     //   status: 200,
//     //   headers: { 'Content-Type': 'application/json' },
//     // });
  
// }