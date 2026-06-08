
import { getPopularTV } from "@/app/lib/tmdb/tv";

export async function GET() {

    try {

        return Response.json(await getPopularTV());
        
    } catch (error) {

        return Response.json(
            {error: 'Failed to fetch'},
            {status: 500}
        )
        
    }

}