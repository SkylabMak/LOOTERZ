'use server'
import { useRouter } from 'next/router';

async function getRoomIDAddress(roomid: string, password: string): Promise<string>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const roomIDAddress = "fiuaesf"
    const response = await fetch(`${baseUrl}/api/showroom`, {
        cache: 'no-store'  // Ensures the request doesn't use cached data
    });
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    // const data: ShowRoom[] = await response.json();
    return roomIDAddress;
}

export async function enter(roomid: string, password: string){
    const roomIDAddress = await getRoomIDAddress(roomid, password);
    const router = useRouter();

    router.push({
        pathname: '/target-page',
        query: { roomIDAddress }
    });
}