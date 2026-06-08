
import { getTrendingTV } from "@/app/lib/tmdb/tv";

export async function GET() {

    try {

        return Response.json(await getTrendingTV());
        
    } catch (error) {

        return Response.json(
            {error: 'Failed to fetch'},
            {status: 500}
        )
        
    }

}