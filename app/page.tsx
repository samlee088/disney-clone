import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await gettopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={[]} title="Upcoming" />
      </div>
    </main>
  );
}
