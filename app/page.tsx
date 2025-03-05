import Genres from "@/components/genres";
import Header from "@/components/header";
import MovieList from "@/components/movie-list";

export default function Home() {
  return (
    <div className="max-w-[1600px] p-[50px] mx-auto">
      <Header />
      <Genres />
      <MovieList />
    </div>
  );
}
