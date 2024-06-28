'use server'

import { ShowRoom } from '@/typings';
import JoinShowPage from './showPage';

async function getData() {

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseUrl}/api/showroom`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data: ShowRoom[] = await response.json();
    console.log(data)
    return data;
}

const JoinPage = async () => {
    const data : ShowRoom[] = await getData();

    return (
        <JoinShowPage data={data} />
    );
};

export default JoinPage;
