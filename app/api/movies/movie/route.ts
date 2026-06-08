import { getPopularMovies } from "@/app/lib/tmdb/movie";

export async function GET() {

    try {

        return Response.json(await getPopularMovies())

    } catch (error) {

        return Response.json(
            {error: 'Failed to fetch!'},
            {status: 500}
        )

    }

}