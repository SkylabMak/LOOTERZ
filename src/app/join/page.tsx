'use server'

import { ShowRoom } from '@/typings';
import JoinShowPage from './showPage';
import { cookies } from 'next/headers';

async function getData() {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseUrl}/api/showroom`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
            credentials: 'include'
        },
        cache: 'no-store',
      });
    const cookieStore = cookies();
    const userID = cookieStore.get('userID');
    console.log(userID?.value+" is "+typeof userID?.value )
    if (!response.ok) {
        // console.log("status is " + response.status)
        // throw new Error('Failed to fetch data status is ' +response.status);
    }
    const data: ShowRoom[] =  (response.ok)?await response.json():[]
    // console.log(response)
    

    return data;
}

const JoinPage = async () => {
    const data: ShowRoom[] = await getData();

    return (
        <JoinShowPage data={data} />
    );
};

export default JoinPage;
