
import { onAirTV } from "@/app/lib/tmdb/tv";

export async function GET() {

    try {

        return Response.json(await onAirTV());
        
    } catch (error) {

        return Response.json(
            {error: 'Failed to fetch'},
            {status: 500}
        )
        
    }

}