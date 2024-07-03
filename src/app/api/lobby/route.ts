import {lobbys} from "./data"

export async function GET() {

    return Response.json(lobbys);

}