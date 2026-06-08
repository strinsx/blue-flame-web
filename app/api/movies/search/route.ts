import { searchbyID } from "@/app/lib/tmdb/movie";


export async function GET(){
    try {

        return Response.json(await searchbyID());
        
    } catch (error) {
        return Response.json(
            {error: 'Failed to fetched'},
            {status: 500}
        )
    }
}