
import { nowPlaying } from "@/app/lib/tmdb/movie";

export async function GET() {

    try {

        return Response.json(await nowPlaying());
        
    } catch (error) {

        return Response.json(
            {error: 'failed to fetch'},
            {status: 500}
        )
        
    }

}