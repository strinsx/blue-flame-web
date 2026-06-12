
import { getSimilar } from "@/app/lib/tmdb/movie"

export async function GET(request: Request) {
    try {

        const { searchParams } = new URL(request.url)
        const movieId = Number(searchParams.get('id'))
        return Response.json(await getSimilar(movieId))

    } catch (error) {

        return Response.json(
            { error: 'Failed to fetch' },
            { status: 500 }
        )

    }
}