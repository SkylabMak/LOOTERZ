import { lobbys } from "../data"

export async function GET(req : Request, {params} : {params : {id : string}}) {

    const id = Number(params.id);

    try {
        const lobby = lobbys.find(lobby => lobby.lobbyId === id);

        if (!lobby) {
            return Response.json({
                message : `No Lobby id ${id}`
            });
        }

        return Response.json(lobby);
    } catch(error) {
        return Response.json({
            message : "error"
        })
    }

}