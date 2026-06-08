
import { getSimilar } from "@/app/lib/tmdb/movie"

export async function GET(){
    try {

        return Response.json(await getSimilar())
        
    } catch (error) {

        return Response.json(
            {error: 'Failed to fetch'}, 
            {status: 500}
        )
        
    }
}