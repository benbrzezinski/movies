import Genres from "@/components/genres";
import Header from "@/components/header";
import MovieList from "@/components/movie-list";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Genres />
        <MovieList />
      </main>
    </>
  );
}
